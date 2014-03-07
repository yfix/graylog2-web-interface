/*
 * Copyright 2014 TORCH GmbH
 *
 * This file is part of Graylog2.
 *
 * Graylog2 is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Graylog2 is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Graylog2.  If not, see <http://www.gnu.org/licenses/>.
 */

$(document).ready(function() {
    'use strict';

    var Field = function(name, hash, selected, displayColumn, sorted, sortDirection) {
        this.name = ko.observable(name);
        this.hash = ko.observable(hash);
        this.selected = ko.observable(selected);
        this.displayOrder = ko.observable(displayColumn);

        this.sorted = ko.observable(sorted);
        this.sortDirection = ko.observable(sortDirection);
    };

    /**
     * Binding handler for deciding the css class of the sort icons in the table header.
     * Depends on both the direction of the sorted field and whether a field is sorted at all.
     * Hover is done solely in css.
     */
    ko.bindingHandlers.sortHoverClass = {
        update: function(element, valueAccessor) {
            var direction = $(element).data('direction');
            var field = ko.unwrap(valueAccessor());
            if (!field.sorted()) {
                $(element).addClass('choose-sort-order');
                return;
            }
            if (field.sortDirection() !== direction) {
                $(element).addClass('choose-sort-order');
            }
        }
    };

    var Message = function (id, index, msgFields) {
        this.id = ko.observable(id);
        this.index = ko.observable(index);
        this.fields = ko.observableArray(msgFields);

        this.selectedFields = ko.computed(function() {
            return ko.utils.arrayFilter(this.fields(), function(field) {
                return field.field().selected();
            }).sort(function(a,b){
                    var va = a.field().displayOrder();
                    var vb = b.field().displayOrder();
                    if (va > vb) { return 1; }
                    if (va < vb) { return -1; }
                    if (va === vb) { return 0; }
                });
        }, this);

    };

    var MessageField = function(field, value) {
        this.field = ko.observable(field);
        this.value = ko.observable(value);

        this.showSort = function(field, event) {
            var target = event.srcElement;
            var th = $(target).closest('table').find('th').eq($(target).index());
            th.addClass("sort-hovered");
        };
        this.hideSort = function(field, event) {
            var target = event.srcElement;
            var th = $(target).closest('table').find('th').eq($(target).index());
            th.removeClass("sort-hovered");
        };
    };

    var SearchResultModel = function(data) {
        var self = this;
        /**
         * maps the field's name hash to the field so we can later look it up and share the observables in tables
         */
        var fieldHashToField = {};

        var makePageFieldArray = function (fieldArray) {
            return ko.utils.arrayMap(fieldArray, function(elem, idx) {
                var field = new Field(elem.name, elem.hash, elem.selected, idx+1, elem.sorted, elem.sortDirection);
                fieldHashToField[elem.hash] = field;
                return field;
            });
        };

        this.originalQuery = ko.observable(data.originalQuery);
        this.originalTimeRange = ko.observable(data.originalTimeRange);
        this.tookMs = ko.observable(data.tookMs);
        this.totalResultCount = ko.observable(data.totalResultCount);
        this.page = ko.observable(data.page);
        this.builtQuery = ko.observable(data.builtQuery);
        this.pageFields = ko.observableArray(makePageFieldArray(data.pageFields));

        var makeMessageDataMatrix = function(messages) {
            return ko.utils.arrayMap(messages, function(msg) {
                var fields = ko.utils.arrayMap(msg.fields, function(field) {
                    var fieldObj = fieldHashToField[field.hash];
                    return new MessageField(fieldObj, field.value);
                });
                return new Message(msg.id, msg.index, fields);
            });
        };
        this.messages = ko.observableArray(makeMessageDataMatrix(data.messages));

        this.selectedFields = ko.computed(function() {
            var allFields = self.pageFields();
            return ko.utils.arrayFilter(allFields, function(field){
                return field.selected();
            });
        });

        this.sortLink = function(direction, field) {
            var uri = new URI();
            uri.query(function(queryData) {
                queryData.sortField = field.name();
                queryData.sortOrder = direction;
                queryData.page = self.page();
            });
            document.location.href = uri.toString();
        };
    };

    var model = new SearchResultModel(initialSearchResultData);

    // bind the model to both main content and side bar (they don't necessarily have the same ancestor)
    $(".search-result-main-container, .search-result-sidebar-container").each(function(){
        ko.applyBindings(model, $(this).elem);
    });

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };
});
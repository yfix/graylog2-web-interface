/*
 * Copyright 2013 TORCH UG
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
package controllers;

import com.google.inject.Inject;
import org.graylog2.restclient.lib.APIException;
import org.graylog2.restclient.lib.ApiClient;
import org.graylog2.restclient.lib.ServerNodes;
import org.graylog2.restclient.models.Node;
import org.graylog2.restclient.models.StreamService;
import org.graylog2.restclient.models.Stream;
import org.graylog2.restclient.models.api.requests.streams.CreateStreamRequest;
import play.data.Form;
import play.mvc.Result;
import views.html.streams.clone_stream;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public class StreamsController extends AuthenticatedController {
    private static final Form<CreateStreamRequest> createStreamForm = Form.form(CreateStreamRequest.class);

    @Inject
    private StreamService streamService;

    @Inject
    private ServerNodes serverNodes;

    public Result index() {
		try {
			List<Stream> streams = streamService.all();
            Map<String, Node> nodes = serverNodes.asMap();

			return ok(views.html.streams.index.render(currentUser(), streams, nodes));
		} catch (IOException e) {
			return status(504, views.html.errors.error.render(ApiClient.ERROR_MSG_IO, e, request()));
		} catch (APIException e) {
			String message = "Could not fetch streams. We expected HTTP 200, but got a HTTP " + e.getHttpCode() + ".";
			return status(504, views.html.errors.error.render(message, e, request()));
		}
	}

    public Result newStream() {
        return ok(views.html.streams.new_stream.render(currentUser()));
    }

    public Result edit(String streamId) {
        try {
            Stream stream = streamService.get(streamId);
            return ok(views.html.streams.edit.render(currentUser(), stream));
        } catch (IOException e) {
            return status(504, views.html.errors.error.render(ApiClient.ERROR_MSG_IO, e, request()));
        } catch (APIException e) {
            String message = "Could not fetch stream. We expected HTTP 200, but got a HTTP " + e.getHttpCode() + ".";
            return status(504, views.html.errors.error.render(message, e, request()));
        }
    }

    public Result create() {
        Form<CreateStreamRequest> form = createStreamForm.bindFromRequest();
        if (form.hasErrors()) {
            flash("error", "Please fill in all fields: " + form.errors());

            return redirect(routes.StreamsController.newStream());
        }

        String newStreamId;

        try {
            CreateStreamRequest csr = form.get();
            newStreamId = streamService.create(csr);
        } catch (APIException e) {
            String message = "Could not create stream. We expected HTTP 201, but got a HTTP " + e.getHttpCode() + ".";
            return status(504, views.html.errors.error.render(message, e, request()));
        } catch (IOException e) {
            return status(504, views.html.errors.error.render(ApiClient.ERROR_MSG_IO, e, request()));
        }

        return redirect(routes.StreamRulesController.index(newStreamId));
    }

    public Result cloneStreamForm(String stream_id) {
        return ok(clone_stream.render(currentUser(), stream_id));
    }

    public Result cloneStream(String stream_id) {
        Form<CreateStreamRequest> form = createStreamForm.bindFromRequest();
        if (form.hasErrors()) {
            flash("error", "Please fill in all fields: " + form.errors());

            return redirect(routes.StreamsController.cloneStreamForm(stream_id));
        }

        String newStreamId;

        try {
            CreateStreamRequest csr = form.get();
            newStreamId = streamService.cloneStream(stream_id, csr);
        } catch (APIException e) {
            String message = "Could not create stream. We expected HTTP 201, but got a HTTP " + e.getHttpCode() + ".";
            return status(504, views.html.errors.error.render(message, e, request()));
        } catch (IOException e) {
            return status(504, views.html.errors.error.render(ApiClient.ERROR_MSG_IO, e, request()));
        }

        return redirect(routes.StreamRulesController.index(newStreamId));
    }

    public Result update(String streamId) {
        Form<CreateStreamRequest> form = createStreamForm.bindFromRequest();
        if (form.hasErrors()) {
            flash("error", "Please fill in all fields: " + form.errors());

            return redirect(routes.StreamsController.edit(streamId));
        }

        try {
            CreateStreamRequest csr = form.get();
            streamService.update(streamId, csr);
        } catch (APIException e) {
            String message = "Could not create stream. We expected HTTP 201, but got a HTTP " + e.getHttpCode() + ".";
            return status(504, views.html.errors.error.render(message, e, request()));
        } catch (IOException e) {
            return status(504, views.html.errors.error.render(ApiClient.ERROR_MSG_IO, e, request()));
        }

        return redirect(routes.StreamsController.index());
    }

    public Result delete(String stream_id) {
        try {
            streamService.delete(stream_id);
        } catch (APIException e) {
            String message = "Could not delete stream. We expect HTTP 204, but got a HTTP " + e.getHttpCode() + ".";
            return status(504, views.html.errors.error.render(message, e, request()));
        } catch (IOException e) {
            return status(504, views.html.errors.error.render(ApiClient.ERROR_MSG_IO, e, request()));
        }

        return redirect(routes.StreamsController.index());
    }

    public Result pause(String stream_id) {
        try {
            streamService.pause(stream_id);
        } catch (APIException e) {
            String message = "Could not delete stream. We expect HTTP 204, but got a HTTP " + e.getHttpCode() + ".";
            return status(504, views.html.errors.error.render(message, e, request()));
        } catch (IOException e) {
            return status(504, views.html.errors.error.render(ApiClient.ERROR_MSG_IO, e, request()));
        }

        return redirect(routes.StreamsController.index());
    }

    public Result resume(String stream_id) {
        try {
            streamService.resume(stream_id);
        } catch (APIException e) {
            String message = "Could not delete stream. We expect HTTP 204, but got a HTTP " + e.getHttpCode() + ".";
            return status(504, views.html.errors.error.render(message, e, request()));
        } catch (IOException e) {
            return status(504, views.html.errors.error.render(ApiClient.ERROR_MSG_IO, e, request()));
        }

        return redirect(routes.StreamsController.index());
    }
}

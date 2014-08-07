// TODO: JSON data should be retrieved from web server using $.getJSON
var dummyData = {
    "query": "*",
    "built_query": "{\"from\":0,\"size\":150,\"query\":{\"match_all\":{}},\"post_filter\":{\"range\":{\"timestamp\":{\"from\":\"2014-08-04 12:43:55.148\",\"to\":\"2014-08-04 12:48:55.148\",\"include_lower\":true,\"include_upper\":true}}},\"sort\":[{\"timestamp\":{\"order\":\"desc\"}}]}",
    "used_indices": [
        "graylog2_0"
    ],
    "messages": [
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326/edit",
                "took_ms": 85,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326/edit [200] 85ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "edit",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b1031230-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.971Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 77,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 77ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b1002c00-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.952Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 95,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 95ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0fbe640-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.924Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 101,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 101ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 54351,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0f8d900-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.904Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 117,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 117ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0f4e160-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.878Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 124,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 124ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0f0e9c0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.852Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 86,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 86ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0ec07c0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.820Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 128,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 128ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0e74cd0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.789Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 73,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 73ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0e32e20-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.762Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "streams": [],
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "source": "example.org",
                "_id": "b0dec150-1bd5-11e4-b484-7cd1c36d3b62",
                "message": "successful DELETE",
                "gl2_source_input": "53df807e036431b17661dbab",
                "timestamp": "2014-08-04T12:48:53.733Z"
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 108,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 108ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0db8d00-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.712Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 71,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 71ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0d87fc0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.692Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 97,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 97ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0d4d640-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.668Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 73,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 73ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0d04260-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.638Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 100,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 100ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0ccbff0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.615Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 126,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 126ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0c96490-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.593Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 92,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 92ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 74422,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0c67e60-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.574Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 96,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 96ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0c2fbf0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.551Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 76,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 76ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0be8f20-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.522Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 72,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 72ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0bb5ad0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.501Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326/edit",
                "took_ms": 106,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326/edit [200] 106ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "edit",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0b71510-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.473Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 97,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 97ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0b2cf50-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.445Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 75,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 75ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0af9b00-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.424Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326/edit",
                "took_ms": 82,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326/edit [200] 82ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "edit",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0abca70-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.399Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 102,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 102ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0a90b50-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.381Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 71,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 71ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0a5aff0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.359Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 98,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 98ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0a1b850-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.333Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 124,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 124ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b09d7290-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.305Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 122,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 122ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b098deb0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.275Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 99,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 99ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b09498f0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.247Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 88,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 88ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b08fde00-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.216Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 95,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 95ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b08bbf50-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.189Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 108,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 108ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0870460-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.158Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 75,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 75ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b082e5b0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.131Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "streams": [],
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "source": "example.org",
                "_id": "b07e51d0-1bd5-11e4-b484-7cd1c36d3b62",
                "message": "successful POST",
                "gl2_source_input": "53df807e036431b17661dbab",
                "timestamp": "2014-08-04T12:48:53.101Z"
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 119,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 119ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0796fd0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.069Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 116,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 116ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0759f40-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.044Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 121,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 121ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0718090-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:53.017Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 95,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 95ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b06dfe20-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.994Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 93,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 93ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b06aa2c0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.972Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 87,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 87ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b066d230-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.947Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 75,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 75ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 74422,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b06328b0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.923Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 117,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 117ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0601b70-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.903Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 97,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 97ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b05d0e30-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.883Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 127,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 127ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b058c870-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.855Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 127,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 127ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b054d0d0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.829Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 99,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 99ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b04feed0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.797Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 108,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 108ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b04ce190-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.777Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 101,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 101ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b048e9f0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.751Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 112,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 112ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b04603c0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.732Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 101,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 101ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b04121c0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.700Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326/edit",
                "took_ms": 82,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326/edit [200] 82ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "edit",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b03c8de0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.670Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 77,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 77ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0389640-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.644Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "streams": [],
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "source": "example.org",
                "_id": "b033db50-1bd5-11e4-b484-7cd1c36d3b62",
                "message": "successful DELETE",
                "gl2_source_input": "53df807e036431b17661dbab",
                "timestamp": "2014-08-04T12:48:52.613Z"
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 117,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 117ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0307ff0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.591Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 113,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 113ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 54351,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b02bec10-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.561Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 123,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 123ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0284290-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.537Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 95,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 95ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0250e40-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.516Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 77,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 77ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0213db0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.491Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 81,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 81ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 74422,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b01e0960-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.470Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 105,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 105ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0194e70-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.439Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 79,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 79ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 74422,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b01508b0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.411Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 91,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 91ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b010c2f0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.383Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 78,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 78ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 74422,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b00c7d30-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.355Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 94,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 94ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0079b30-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.323Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 116,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 116ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 54351,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b0048df0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.303Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 128,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 128ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "b00159a0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.282Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "UsersController",
                "resource": "/users",
                "took_ms": 116,
                "streams": [],
                "source": "example.org",
                "message": "GET /users [200] 116ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "affe4c60-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.262Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 118,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 118ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "affb3f20-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.242Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 108,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 108ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 54351,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aff74780-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.216Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "streams": [],
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "source": "example.org",
                "_id": "aff41330-1bd5-11e4-b484-7cd1c36d3b62",
                "message": "successful POST",
                "gl2_source_input": "53df807e036431b17661dbab",
                "timestamp": "2014-08-04T12:48:52.195Z"
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 106,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 106ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afefcd70-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.167Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 72,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 72ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afeb3990-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.137Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 128,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 128ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afe76900-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.112Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 115,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 115ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afe45bc0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.092Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 96,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 96ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afe0b240-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.068Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 126,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 126ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afdbf750-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.037Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 75,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 75ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afd76370-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:52.007Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 98,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 98ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afd42f20-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.986Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 89,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 89ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afd148f0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.967Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "streams": [],
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "source": "example.org",
                "_id": "afcc8e00-1bd5-11e4-b484-7cd1c36d3b62",
                "message": "successful POST",
                "gl2_source_input": "53df807e036431b17661dbab",
                "timestamp": "2014-08-04T12:48:51.936Z"
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 128,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 128ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afc980c0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.916Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 71,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 71ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afc64c70-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.895Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 104,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 104ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afc14360-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.862Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 122,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 122ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afbe5d30-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.843Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 90,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 90ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afb9c950-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.813Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 98,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 98ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afb69500-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.792Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 123,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 123ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afb3aed0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.773Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 122,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 122ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afaf6910-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.745Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 75,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 75ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afaa8710-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.713Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 96,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 96ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afa779d0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.693Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 116,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 116ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afa3f760-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.670Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 108,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 108ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "afa04de0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.646Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 113,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 113ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af9b92f0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.615Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "UsersController",
                "resource": "/users",
                "took_ms": 83,
                "streams": [],
                "source": "example.org",
                "message": "GET /users [200] 83ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af9885b0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.595Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 117,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 117ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 74422,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af959f80-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.576Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 78,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 78ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af9159c0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.548Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 108,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 108ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af8db040-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.524Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 103,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 103ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af894370-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.495Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 82,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 82ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af860f20-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.474Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 128,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 128ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af81f070-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.447Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 81,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 81ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af7ce760-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.414Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 92,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 92ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af787a90-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.385Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 119,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 119ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af73bfa0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.354Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 72,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 72ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af706440-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.332Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 79,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 79ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af6b8240-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.300Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 71,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 71ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af671570-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.271Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "streams": [],
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "source": "example.org",
                "_id": "af625a80-1bd5-11e4-b484-7cd1c36d3b62",
                "message": "successful POST",
                "gl2_source_input": "53df807e036431b17661dbab",
                "timestamp": "2014-08-04T12:48:51.240Z"
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326/edit",
                "took_ms": 126,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326/edit [200] 126ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "edit",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af5eb100-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.216Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 116,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 116ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af5ae070-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.191Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 95,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 95ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af56e8d0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.165Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 79,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 79ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af5206d0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.133Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 107,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 107ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af4e5d50-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.109Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 93,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 93ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 74422,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af4a8cc0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.084Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 116,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 116ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af464700-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.056Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 127,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 127ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af4339c0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:51.036Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "streams": [],
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "source": "example.org",
                "_id": "af3f1b10-1bd5-11e4-b484-7cd1c36d3b62",
                "message": "successful DELETE",
                "gl2_source_input": "53df807e036431b17661dbab",
                "timestamp": "2014-08-04T12:48:51.009Z"
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "UsersController",
                "resource": "/users",
                "took_ms": 106,
                "streams": [],
                "source": "example.org",
                "message": "GET /users [200] 106ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af3bbfb0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.987Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 127,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 127ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af38b270-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.967Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 89,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 89ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 74422,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af357e20-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.946Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 110,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 110ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af307510-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.913Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 95,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 95ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af2d67d0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.893Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 107,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 107ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af29e560-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.870Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 99,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 99ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 74422,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af259fa0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.842Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 127,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 127ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af2180f0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.815Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 108,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 108ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af1ec1d0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.797Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 72,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 72ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 74422,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af1b8d80-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.776Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "streams": [],
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "source": "example.org",
                "_id": "af1795e0-1bd5-11e4-b484-7cd1c36d3b62",
                "message": "successful DELETE",
                "gl2_source_input": "53df807e036431b17661dbab",
                "timestamp": "2014-08-04T12:48:50.750Z"
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 108,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 108ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af143a80-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.728Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 112,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 112ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af0ff4c0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.700Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 73,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 73ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af0c4b40-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.676Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 92,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 92ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af08efe0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.654Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 88,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 88ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 74422,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "af0434f0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.623Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "streams": [],
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "source": "example.org",
                "_id": "aeffa110-1bd5-11e4-b484-7cd1c36d3b62",
                "message": "successful POST",
                "gl2_source_input": "53df807e036431b17661dbab",
                "timestamp": "2014-08-04T12:48:50.593Z"
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 107,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 107ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aefa9800-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.560Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 124,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 124ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 54351,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aef71590-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.537Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 111,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 111ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aef281b0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.507Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 92,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 92ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aeef4d60-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.486Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 108,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 108ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aeebcaf0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.463Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 85,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 85ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 74422,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aee86f90-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.441Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 75,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 75ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aee3b4a0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.410Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 106,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 106ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 74422,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aedef9b0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.379Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "LoginController",
                "resource": "/login",
                "took_ms": 82,
                "streams": [],
                "source": "example.org",
                "message": "GET /login [200] 82ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "login",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aedadb00-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.352Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 91,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 91ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aed5f900-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.320Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 72,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 72ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aed29da0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.298Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "UsersController",
                "resource": "/users",
                "took_ms": 112,
                "streams": [],
                "source": "example.org",
                "message": "GET /users [200] 112ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aecf1b30-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.275Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 111,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 111ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aeca6040-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.244Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 124,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 124ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6469981,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aec5f370-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.215Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts",
                "took_ms": 126,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts [200] 126ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 6476752,
                "action": "index",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aec1d4c0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.188Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        },
        {
            "message": {
                "controller": "PostsController",
                "resource": "/posts/45326",
                "took_ms": 103,
                "streams": [],
                "source": "example.org",
                "message": "GET /posts/45326 [200] 103ms",
                "gl2_source_input": "53df807e036431b17661dbab",
                "http_method": "GET",
                "user_id": 9001,
                "action": "show",
                "gl2_source_node": "2e2367e1-8943-46f5-8205-7666f623a228",
                "_id": "aebcf2c0-1bd5-11e4-b484-7cd1c36d3b62",
                "timestamp": "2014-08-04T12:48:50.156Z",
                "http_response_code": 200
            },
            "index": "graylog2_0"
        }
    ],
    "fields": [
        "controller",
        "http_method",
        "resource",
        "took_ms",
        "user_id",
        "action",
        "source",
        "message",
        "http_response_code"
    ],
    "time": 18,
    "total_results": 7251,
    "error": null,
    "generic_error": null
};


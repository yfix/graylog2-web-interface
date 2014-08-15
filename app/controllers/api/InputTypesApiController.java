package controllers.api;

import controllers.AuthenticatedController;
import org.graylog2.restclient.lib.APIException;
import org.graylog2.restclient.models.InputService;
import org.graylog2.restclient.models.NodeService;
import org.graylog2.restclient.models.api.responses.system.InputTypeSummaryResponse;
import play.mvc.Result;

import javax.inject.Inject;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author Dennis Oelkers <dennis@torch.sh>
 */
public class InputTypesApiController extends AuthenticatedController {
    private final InputService inputService;
    private final NodeService nodeService;

    @Inject
    public InputTypesApiController(InputService inputService, NodeService nodeService) {
        this.inputService = inputService;
        this.nodeService = nodeService;
    }

    public Result list() throws IOException, APIException {
        Map<String, String> result = new HashMap<>();

        for (Map.Entry<String, InputTypeSummaryResponse> entry : inputService.getAllInputTypeInformation().entrySet()) {
            result.put(entry.getKey(), entry.getValue().name);
        }
        return ok(json(result)).as("application/json");
    }

    public Result get(String node_id, String type) throws IOException, APIException, NodeService.NodeNotFoundException {
        return ok(json(inputService.getInputTypeInformation(nodeService.loadNode(node_id), type))).as("application/json");
    }
}

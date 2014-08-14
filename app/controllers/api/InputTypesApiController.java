package controllers.api;

import controllers.AuthenticatedController;
import org.graylog2.restclient.lib.APIException;
import org.graylog2.restclient.models.InputService;
import org.graylog2.restclient.models.NodeService;
import play.mvc.Result;

import javax.inject.Inject;
import java.io.IOException;

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
        return ok(json(inputService.getAllInputTypeInformation())).as("application/json");
    }

    public Result get(String node_id, String type) throws IOException, APIException, NodeService.NodeNotFoundException {
        return ok(json(inputService.getInputTypeInformation(nodeService.loadNode(node_id), type))).as("application/json");
    }
}

package controllers.api;

import controllers.AuthenticatedController;
import org.graylog2.restclient.lib.APIException;
import org.graylog2.restclient.models.ClusterEntity;
import org.graylog2.restclient.models.ClusterService;
import org.graylog2.restclient.models.NodeService;
import play.mvc.Result;

import javax.inject.Inject;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Dennis Oelkers <dennis@torch.sh>
 */
public class NodesApiController extends AuthenticatedController {
    private final NodeService nodeService;
    private final ClusterService clusterService;

    @Inject
    public NodesApiController(NodeService nodeService, ClusterService clusterService) {
        this.nodeService = nodeService;
        this.clusterService = clusterService;
    }

    public Result list() throws APIException, IOException {
        List<ClusterEntity> nodes = new ArrayList<>();
        nodes.addAll(nodeService.radios().values());
        nodes.addAll(nodeService.servers().values());
        return ok(json(nodes)).as("application/json");
    }

    public Result radios() throws APIException, IOException {
        return ok(json(nodeService.radios().values())).as("application/json");
    }

    public Result servers() throws APIException, IOException {
        return ok(json(nodeService.servers().values())).as("application/json");
    }
}

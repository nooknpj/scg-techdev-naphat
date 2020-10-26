package web.springboot;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

@RestController
public class DOSCGController {

    DOSCGModel model = new DOSCGModel();
    JSONParser jsonParser = new JSONParser();

    // get google api key from application.properties
    @Value("${api.key}")
    private String googleApiKey;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String greet() {
        return "test home path";
    }

    @RequestMapping(value = "/findBC", method = RequestMethod.GET)
    public String findBC() {
        int[] result = model.findBC();
        String jsonString = "{ \"b\": %s, \"c\": %s }";
        jsonString = String.format(jsonString,result[0],result[1]);
        return jsonString;
    }

    @RequestMapping(value = "/findXYZ", method = RequestMethod.GET)
    public String findXYZ() {
        int[] result = model.findXYZ();
        String jsonString = "{ \"x\": %s, \"y\": %s, \"z\": %s }";
        jsonString = String.format(jsonString,result[0],result[1],result[2]);
        return jsonString;
    }

    @RequestMapping(value ="/direction",method = RequestMethod.GET)
    public JSONObject getDirection(){
        String origin = "13.8029598,100.5390045";
        String destination = "13.746067,100.538778";
        return model.getDirections(googleApiKey,origin,destination);
    }

}

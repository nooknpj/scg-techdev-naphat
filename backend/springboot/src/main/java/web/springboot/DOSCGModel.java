package web.springboot;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class DOSCGModel {
    
    private Integer a = 21;
    
    public int[] findXYZ(){
        // given X,Y,5,9,15,23,Z
        // let diff[i] represents number[i+1]-number[i]
        int[] diff = new int[6];
        diff[2] = 9-5; // 4
        diff[3] = 15-9; // 6
        diff[4] = 23-15; // 8
        // from given values we can conclude that diff[i] = 2*i
        diff[1] = 2*1;
        diff[0] = 2*0;
        diff[5] = 2*5;
        
        Integer y = 5-diff[1];
        Integer x = y-diff[0];
        Integer z = 23+diff[5];
    
        return new int[]{x,y,z};
    }

    public int[] findBC(){
        Integer b = 23 - a;
        Integer c = -21 - a;
        return new int[]{b,c};
    }

    public JSONObject getDirections(String googleApiKey, String origin, String destination){
        RestTemplate restTemplate = new RestTemplate();
        String targetUrl = "https://maps.googleapis.com/maps/api/directions/json?origin="+origin+"&destination="+destination+"&key="+googleApiKey+"&language=th&mode=driving";
        ResponseEntity<String> result = restTemplate.getForEntity(targetUrl, String.class);
        JSONParser parser = new JSONParser();
        JSONObject directions;
		try {
			directions = (JSONObject) parser.parse(result.getBody());
		} catch (ParseException e) {
			e.printStackTrace();
			return new JSONObject(); 
		}
        return directions;
        
    }
}

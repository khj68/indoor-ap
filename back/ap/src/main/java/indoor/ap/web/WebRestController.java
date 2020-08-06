package indoor.ap.web;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileReader;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

@RestController
public class WebRestController {
    JSONParser parser = new JSONParser();

    @GetMapping("/parse")
    @CrossOrigin
    public JSONArray parse() {
        JSONArray err = new JSONArray();
        try{
            JSONArray retArray = new JSONArray();

            
            Object obj = parser.parse(new FileReader("C:\\Users\\SKTelecom\\Desktop\\jobs\\IN\\indoor-ap\\back\\ap\\src\\main\\java\\indoor\\ap\\web\\log\\200804_150811.json"));
            JSONObject retObject = new JSONObject();

            JSONArray jsonArray = (JSONArray) obj;
            JSONObject jsonObject = new JSONObject();
            for(int i=0; i<jsonArray.size(); i++) {
                jsonObject = (JSONObject)jsonArray.get(i);
                System.out.println();
                System.out.println(i);
                JSONObject latLng = (JSONObject)jsonObject.get("latLng");
                System.out.print(latLng.get("latitude")+" ");
                System.out.println(latLng.get("longitude"));

                retObject.put("lat", latLng.get("latitude"));
                retObject.put("lng", latLng.get("longitude"));
                
                JSONArray wifies = (JSONArray)jsonObject.get("wifiScanResults");
                JSONObject wifi = new JSONObject();
                for(int j=0; j<wifies.size(); j++){
                    wifi = (JSONObject)wifies.get(j);
                    System.out.println("ssid: "+wifi.get("ssid"));
                    System.out.println("bssid: "+wifi.get("bssid"));
                    System.out.println("rssi: "+wifi.get("rssi"));
                    System.out.println("timestamp: "+wifi.get("timestamp"));
                }

                retArray.add(retObject);
            }

            return retArray;


        } catch(Exception e) {
            e.printStackTrace();
            return err;
        }

    
        // return "parsed data";
    }

    @GetMapping("/spot")
    public String spot() {
        return "spot data";
    }
    
    @GetMapping("/wifi")
    public String wifi() {
        return "wifi data";
    }
}
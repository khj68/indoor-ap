package indoor.ap.web;

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
    public JSONArray parse() {
        JSONArray j = new JSONArray();
        try{
            Object obj = parser.parse(new FileReader("C:\\Users\\SKTelecom\\Desktop\\jobs\\IN\\indoor-ap\\back\\ap\\src\\main\\java\\indoor\\ap\\web\\log\\200804_150811.json"));

            JSONArray jsonArray = (JSONArray) obj;
            return jsonArray;


        } catch(Exception e) {
            e.printStackTrace();
            return j;
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
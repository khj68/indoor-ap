package indoor.ap.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

@RestController
public class WebRestController {
    
    @GetMapping("/parse")
    public String parse() {
        return "parsed data";
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
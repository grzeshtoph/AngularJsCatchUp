package com.greg.angularjs;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

/**
 * Web controller.
 */
@Controller
public class WebController {

    @Value("${application.message}")
    private String message = "Hello World";

    @RequestMapping("/")
    public String welcome(Map<String, Object> model) {
        model.put("message", this.message);
        model.put("fragmentName", "fragments/welcomePage");
        return "welcome";
    }
}

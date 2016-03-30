package com.greg.angularjs;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

/**
 * Web controller.
 */
@Controller
public class WebController {
    private static final Log LOGGER = LogFactory.getLog(WebController.class);

    @Value("${welcome.message}")
    private String message = "Hello World";

    @RequestMapping("/")
    public String welcome(Map<String, Object> model) {
        LOGGER.debug("# welcome entered");
        model.put("message", this.message);
        model.put("fragmentName", "fragments/welcomePage");
        return "index";
    }

    @RequestMapping("/dcomm-operators")
    public String rtpiOperatorsOpen(Map<String, Object> model) {
        LOGGER.debug("# rtpiOperatorsOpen entered");
        model.put("fragmentName", "fragments/dcommOperators");
        return "index";
    }
}

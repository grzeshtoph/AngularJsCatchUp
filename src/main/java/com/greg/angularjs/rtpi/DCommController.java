package com.greg.angularjs.rtpi;

import com.fasterxml.jackson.annotation.JsonView;
import com.greg.angularjs.rtpi.model.DCommOperatorMessage;
import com.greg.angularjs.rtpi.model.DCommOperatorView;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.servlet.ServletException;

/**
 * REST controller to handle Dublin public transport RTPI.
 */
@RestController
@RequestMapping("/dcommservice")
public class DCommController {
    @JsonView(DCommOperatorView.Summary.class)
    @RequestMapping("/operators")
    public DCommOperatorMessage getOperators() {

        RestTemplate restTemplate = new RestTemplate();

        DCommOperatorMessage result =  restTemplate.getForObject("https://data.dublinked.ie/cgi-bin/rtpi/operatorinformation", DCommOperatorMessage.class);

        if ("0".equals(result.getErrorCode())) {
            return result;
        } else {
            throw new RuntimeException("Error, when fetching list of operators: " + result.getErrorMessage() + ", " + result.getErrorCode());
        }
    }
}

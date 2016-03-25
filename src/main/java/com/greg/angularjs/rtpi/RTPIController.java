package com.greg.angularjs.rtpi;

import com.fasterxml.jackson.annotation.JsonView;
import com.greg.angularjs.rtpi.model.RTPIOperatorMessage;
import com.greg.angularjs.rtpi.model.RTPIOperatorView;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

/**
 * REST controller to handle Dublin public transport RTPI.
 */
@RestController
@RequestMapping("/rtpiservice")
public class RTPIController {
    @JsonView(RTPIOperatorView.Summary.class)
    @RequestMapping("/operators")
    public RTPIOperatorMessage getOperators() {

        RestTemplate restTemplate = new RestTemplate();

        return restTemplate.getForObject("https://data.dublinked.ie/cgi-bin/rtpi/operatorinformation", RTPIOperatorMessage.class);
    }
}

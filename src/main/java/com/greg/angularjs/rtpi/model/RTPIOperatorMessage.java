package com.greg.angularjs.rtpi.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;

import java.util.List;

/**
 * RTPI operator message.
 */
public class RTPIOperatorMessage {
    @JsonView(RTPIOperatorView.Summary.class)
    @JsonProperty("errorcode")
    private String errorCode;

    @JsonView(RTPIOperatorView.Summary.class)
    @JsonProperty("errormessage")
    private String errorMessage;

    @JsonView(RTPIOperatorView.Summary.class)
    @JsonProperty("numberofresults")
    private int numberOfResults;

    @JsonView(RTPIOperatorView.Summary.class)
    private String timestamp;

    @JsonView(RTPIOperatorView.Summary.class)
    private List<RTPIOperator> results;

    public String getErrorCode() {
        return errorCode;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public int getNumberOfResults() {
        return numberOfResults;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public List<RTPIOperator> getResults() {
        return results;
    }
}

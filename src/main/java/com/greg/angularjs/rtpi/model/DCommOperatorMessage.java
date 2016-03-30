package com.greg.angularjs.rtpi.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;

import java.util.List;

/**
 * RTPI operator message.
 */
public class DCommOperatorMessage {
    @JsonView(DCommOperatorView.Summary.class)
    @JsonProperty("errorcode")
    private String errorCode;

    @JsonView(DCommOperatorView.Summary.class)
    @JsonProperty("errormessage")
    private String errorMessage;

    @JsonView(DCommOperatorView.Summary.class)
    @JsonProperty("numberofresults")
    private int numberOfResults;

    @JsonView(DCommOperatorView.Summary.class)
    private String timestamp;

    @JsonView(DCommOperatorView.Summary.class)
    private List<DCommOperator> results;

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

    public List<DCommOperator> getResults() {
        return results;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public void setNumberOfResults(int numberOfResults) {
        this.numberOfResults = numberOfResults;
    }

    public void setResults(List<DCommOperator> results) {
        this.results = results;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
}

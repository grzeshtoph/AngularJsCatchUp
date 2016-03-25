package com.greg.angularjs.rtpi.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.annotation.JsonView;

/**
 * Java bean representing operation information for RTPI.
 */
public class RTPIOperator {
    @JsonView(RTPIOperatorView.Summary.class)
    @JsonProperty("operatorreference")
    private String operatorReference;

    @JsonView(RTPIOperatorView.Summary.class)
    @JsonProperty("operatorname")
    private String operatorName;

    @JsonView(RTPIOperatorView.Summary.class)
    @JsonProperty("operatordescription")
    private String operatorDescription;

    public String getOperatorReference() {
        return operatorReference;
    }

    public String getOperatorName() {
        return operatorName;
    }

    public String getOperatorDescription() {
        return operatorDescription;
    }

    @Override
    public String toString() {
        return "RTPIOperator{" +
                "operatorReference='" + operatorReference + '\'' +
                ", operatorName='" + operatorName + '\'' +
                ", operatorDescription='" + operatorDescription + '\'' +
                '}';
    }
}

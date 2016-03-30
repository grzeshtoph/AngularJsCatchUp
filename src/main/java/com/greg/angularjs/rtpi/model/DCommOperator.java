package com.greg.angularjs.rtpi.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;

/**
 * Java bean representing operation information for RTPI.
 */
public class DCommOperator {
    @JsonView(DCommOperatorView.Summary.class)
    @JsonProperty("operatorreference")
    private String operatorReference;

    @JsonView(DCommOperatorView.Summary.class)
    @JsonProperty("operatorname")
    private String operatorName;

    @JsonView(DCommOperatorView.Summary.class)
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
        return "DCommOperator{" +
                "operatorReference='" + operatorReference + '\'' +
                ", operatorName='" + operatorName + '\'' +
                ", operatorDescription='" + operatorDescription + '\'' +
                '}';
    }
}

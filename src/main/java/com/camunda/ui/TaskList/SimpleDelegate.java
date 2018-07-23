package com.camunda.ui.TaskList;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;

public class SimpleDelegate implements JavaDelegate {

	@Override
	public void execute(DelegateExecution arg0) throws Exception {
		// TODO Auto-generated method stub

		System.out.println("Inside Simple Delegate Class");
	}

}

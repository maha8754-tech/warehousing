using System;
public class User {
	private int userId;
	private string fullName;
	private string username;
	private string passwordHash;
	private bool isActive;

	public bool VerifyPassword(ref object password) {
		throw new System.Exception("Not implemented");
	}
	public bool HasPermission(ref object action) {
		throw new System.Exception("Not implemented");
	}

	private Auth_controller auth controller;
	private Stock_movement 1;

}

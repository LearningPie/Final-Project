package com.cdac.LearningPie.Services;

public class OTPService {

	public static String generateOtp() {
		String str = "0123456789";
		String otp = "";
		for(int i=0; i<4; i++) {
			int rno = (int) (Math.random() * str.length());
			otp += str.charAt(rno);
		}
        return otp;
	}
}

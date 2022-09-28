package com.app.ezride.emailSender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class EmailSenderService {
@Autowired
private JavaMailSender sendMail;

 public String sendMail(String toEmail,String subject,String body) {
	   SimpleMailMessage smm=new SimpleMailMessage();
	   smm.setFrom("abhisheksananse83@gmail.com");
	   smm.setTo(toEmail);
	   smm.setText(body);
	   smm.setSubject(subject);
	   sendMail.send(smm);
	   return "Mail Send Success";
 }
}

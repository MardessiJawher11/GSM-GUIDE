package gsm.service;

import java.util.List;

import gsm.entities.PhoneT;

public interface PhoneTService {
public List <PhoneT> getAllPhoneTs();
public PhoneT findPhoneTById(Long id);
public PhoneT createPhoneT(PhoneT phoneT);
public PhoneT updatePhoneT(PhoneT phoneT);
public void deletePhoneT(Long id);
public PhoneT updatePhoneTById(Long id,PhoneT updatedPhoneT);
public PhoneT getPhoneTByTel(String tel);}

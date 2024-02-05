package gsm.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import gsm.entities.PhoneT;
import gsm.repositories.PhoneTRepository;
@Service
public class PhoneTServiceImpl implements PhoneTService {

@Autowired
private PhoneTRepository phoneTRepository;
@Override
public List<PhoneT> getAllPhoneTs(){
	return phoneTRepository.findAll();
}
@Override
public PhoneT findPhoneTById(Long id) {
	Optional<PhoneT> utOptional = phoneTRepository.findById(id); 
	
	if(utOptional.isEmpty() ) {
		return null;
	}else {
		return utOptional.get();
	}	
}
@Override
public PhoneT getPhoneTByTel(String tel) {
	return phoneTRepository.findByTel(tel);
}
@Override
public PhoneT createPhoneT(PhoneT phoneT) {
    return phoneTRepository.save(phoneT);
}
@Override
public PhoneT updatePhoneT(PhoneT phoneT) {
	Optional<PhoneT> utOptional = phoneTRepository.findById(phoneT.getId()); 
	if(utOptional.isEmpty() ) {
		return null;
	}else {
		return phoneTRepository.save(phoneT);
	}
}

@Override
public void deletePhoneT(Long id) {
	 phoneTRepository.deleteById(id);
	
}
@Override
public PhoneT updatePhoneTById(Long id, PhoneT updatedPhoneT) {
    Optional<PhoneT> phoneTOptional = phoneTRepository.findById(id);
    if (phoneTOptional.isPresent()) {
        PhoneT existingPhoneT = phoneTOptional.get();
        

        if (updatedPhoneT.getName() != null) {
            existingPhoneT.setName(updatedPhoneT.getName());
        }
        
        if (updatedPhoneT.getLastName() != null) {
            existingPhoneT.setLastName(updatedPhoneT.getLastName());
        }
        
        if (updatedPhoneT.getModel() != null) {
            existingPhoneT.setModel(updatedPhoneT.getModel());
        }
        
        if (updatedPhoneT.getTel() != null) {
            existingPhoneT.setTel(updatedPhoneT.getTel());
        }
        
        if (updatedPhoneT.getPanne() != null) {
            existingPhoneT.setPanne(updatedPhoneT.getPanne());
        }
        
        if (updatedPhoneT.getEtat() != null) {
            existingPhoneT.setEtat(updatedPhoneT.getEtat());
        }
    
       
        return phoneTRepository.save(existingPhoneT);
    } else {
        throw new NoSuchElementException("Telephone non trouvé avec l'ID : " + id);
    }
    
}

}

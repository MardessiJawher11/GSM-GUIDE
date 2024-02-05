package gsm.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gsm.entities.PhoneT;

import gsm.repositories.PhoneTRepository;
import gsm.service.PhoneTService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/phonet")
public class PhoneTController {
	@Autowired
	private PhoneTService phoneTService ;
	@Autowired
	private  PhoneTRepository phoneTRepository;
	@GetMapping
	public List<PhoneT> getAllPhoneTs()
	{
		return phoneTService.getAllPhoneTs();
	}
	@GetMapping("/byTel/{tel}")
	public ResponseEntity<?> getPhoneTByMatricule( @PathVariable (value = "tel")String tel) {
	    try {
	        
	        PhoneT phonet = phoneTService.getPhoneTByTel(tel);

	        if (phonet != null) {
	            return new ResponseEntity<>(phonet, HttpStatus.OK);
	        } else {
	            System.out.println("Phone not found");
	            return new ResponseEntity<>("Phone not found", HttpStatus.NOT_FOUND);
	        }
	    } catch (Exception e) {
	        System.out.println("An error occurred: " + e.getMessage());
	        return new ResponseEntity<>("An error occurred: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}

	@GetMapping(path="/{id}")
	public ResponseEntity<PhoneT> findPhoneTById(@PathVariable Long id)
	{
		PhoneT phoneT= phoneTService.findPhoneTById(id);
		
		if(phoneT==null)
		{
			return new ResponseEntity<PhoneT>(HttpStatus.NO_CONTENT);
		}else {
			return new ResponseEntity<PhoneT>(phoneT,HttpStatus.OK);
		}
	}
	@PostMapping
    public ResponseEntity<PhoneT> CreatePhoneT(@RequestBody PhoneT phoneT) {
      
		try {
           
 
        	PhoneT createdPhoneT = phoneTService.createPhoneT(phoneT);

            if (createdPhoneT != null) {
                return new ResponseEntity<>(createdPhoneT, HttpStatus.CREATED);
                
            } else {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	@PutMapping
	public PhoneT UpdatePhoneT(@RequestBody PhoneT phoneT)
	{
		return phoneTService.updatePhoneT(phoneT);
	}	
	
	@DeleteMapping(path="/supprimer/{id}")
	public void deletePhoneT(@PathVariable Long id)
	{
		phoneTService.deletePhoneT( id);
	}
	@PutMapping(path="/{id}")
	public ResponseEntity<PhoneT> updatePhoneTById(@PathVariable Long id, @RequestBody PhoneT updatedPhoneT) {
	    Optional<PhoneT> optionalPhoneT = phoneTRepository.findById(id);
	    if (optionalPhoneT.isPresent()) {
	    	PhoneT existingPhoneT = optionalPhoneT.get();
	        existingPhoneT.setName(updatedPhoneT.getName());
	        existingPhoneT.setLastName(updatedPhoneT.getLastName());
	        existingPhoneT.setPanne(updatedPhoneT.getPanne());
	        existingPhoneT.setTel(updatedPhoneT.getTel());
	        existingPhoneT.setModel(updatedPhoneT.getModel());
	        existingPhoneT.setEtat(updatedPhoneT.getEtat());
	       

	        PhoneT updatedPhonneT = phoneTRepository.save(existingPhoneT);
	        return ResponseEntity.ok(updatedPhonneT);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}
	 
	
}

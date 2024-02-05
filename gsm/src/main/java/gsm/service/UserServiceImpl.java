package gsm.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gsm.entities.User;
import gsm.repositories.UserRepository;
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private  UserRepository userRepository;
	public boolean isUserExists(String email) {
        return userRepository.existsByEmail(email);
    }
	@Override
	public List<User> getAllUsers() {
		
		return userRepository.findAll();
	}
	@Override
	public User findUserById(Long id) {
		Optional<User> utOptional = userRepository.findById(id); 
		
		if(utOptional.isEmpty() ) {
			return null;
		}else {
			return utOptional.get();
		}	
	}
	@Override
    public User createUser(User user) {
        return userRepository.save(user);
    }
	@Override
	public User updateUser(User user) {
		Optional<User> utOptional = userRepository.findById(user.getId()); 
		if(utOptional.isEmpty() ) {
			return null;
		}else {
			return userRepository.save(user);
		}
	}

	@Override
	public void deleteUser(Long id) {
		 userRepository.deleteById(id);
		
	}
	@Override
    public User getUserByMailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }
	@Override
	public User updateUserById(Long id, User updatedUser) {
	    Optional<User> userOptional = userRepository.findById(id);
	    if (userOptional.isPresent()) {
	        User existingUser = userOptional.get();
	        
	
	        if (updatedUser.getName() != null) {
	            existingUser.setName(updatedUser.getName());
	        }
	        
	        if (updatedUser.getLastName() != null) {
	            existingUser.setLastName(updatedUser.getLastName());
	        }
	        
	        if (updatedUser.getPassword() != null) {
	            existingUser.setPassword(updatedUser.getPassword());
	        }
	        
	        if (updatedUser.getTel() != null) {
	            existingUser.setTel(updatedUser.getTel());
	        }
	        
	        if (updatedUser.getSexe() != null) {
	            existingUser.setSexe(updatedUser.getSexe());
	        }
	        
	        if (updatedUser.getEmail() != null) {
	            existingUser.setEmail(updatedUser.getEmail());
	        }
	        
	        if (updatedUser.getDateNaissance() != null) {
	            existingUser.setDateNaissance(updatedUser.getDateNaissance());
	        }
	        if (updatedUser.getRole() == null) {
	            updatedUser.setRole(existingUser.getRole());
	        }
	        
	        return userRepository.save(existingUser);
	    } else {
	        throw new NoSuchElementException("Utilisateur non trouvé avec l'ID : " + id);
	    }
	    
	}
	  }
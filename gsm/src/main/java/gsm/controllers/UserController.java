package gsm.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gsm.entities.User;
import gsm.repositories.UserRepository;
import gsm.service.UserService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService ;
	@Autowired
	private  UserRepository userRepository;
	@GetMapping
	public List<User> getAllUsers()
	{
		return userService.getAllUsers();
	}
	@PostMapping("/connexion")
	public ResponseEntity<?> getUserByMailAndPassword(@RequestBody User user) {
	    try {
	        String email = user.getEmail();
	        String password = user.getPassword();
	        System.out.println("Received request with mail: " + email + " and password: " + password);
	        User conxuser = userService.getUserByMailAndPassword(email, password);

	        if (conxuser != null) {
	            return new ResponseEntity<>(conxuser, HttpStatus.OK);
	        } else {
	            System.out.println("User not found");
	            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
	        }

	    } catch (Exception e) {
	        System.out.println("An error occurred: " + e.getMessage());
	        return new ResponseEntity<>("An error occurred: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	@GetMapping(path="/{id}")
	public ResponseEntity<User> findUserById(@PathVariable Long id)
	{
		User user= userService.findUserById(id);
		
		if(user==null)
		{
			return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
		}else {
			return new ResponseEntity<User>(user,HttpStatus.OK);
		}
	}
	@PostMapping
	public ResponseEntity<User> createUser(@RequestBody User user) {
	    try {
	        user.setRole("user");

	        
	        User createdUser = userService.createUser(user);

	        if (createdUser != null) {
	            // User created successfully
	            return new ResponseEntity<>(createdUser, HttpStatus.CREATED); // 201 Created
	        } else {
	            // User creation failed for some reason
	            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // 500 Internal Server Error
	        }

	    } catch (Exception e) {
	        // Log the exception for debugging purposes
	        e.printStackTrace();
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // 500 Internal Server Error
	    }
	}

	@PutMapping
	public User UpdateUser(@RequestBody User user)
	{
		return userService.updateUser(user);
	}	
	
	@DeleteMapping(path="/supprimer/{id}")
	public void deleteUser(@PathVariable Long id)
	{
		userService.deleteUser( id);
	}
	@PutMapping(path="/{id}")
	public ResponseEntity<User> updateUserById(@PathVariable Long id, @RequestBody User updatedUser) {
	    Optional<User> optionalUser = userRepository.findById(id);
	    if (optionalUser.isPresent()) {
	        User existingUser = optionalUser.get();
	        existingUser.setName(updatedUser.getName());
	        existingUser.setLastName(updatedUser.getLastName());
	        existingUser.setPassword(updatedUser.getPassword());
	        existingUser.setTel(updatedUser.getTel());
	        existingUser.setSexe(updatedUser.getSexe());
	        existingUser.setEmail(updatedUser.getEmail());
	        existingUser.setDateNaissance(updatedUser.getDateNaissance());
	        existingUser.setRole(updatedUser.getRole());

	        User updatedUtilisateur = userRepository.save(existingUser);
	        return ResponseEntity.ok(updatedUtilisateur);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}
    @Autowired
    private JavaMailSender javaMailSender; 

	
	}


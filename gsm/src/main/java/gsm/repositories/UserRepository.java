package gsm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gsm.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	 User findByEmailAndPassword(String email, String password);
	 boolean existsByEmail(String email);
	 
}

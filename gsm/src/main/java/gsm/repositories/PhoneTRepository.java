package gsm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import gsm.entities.PhoneT;

public interface PhoneTRepository extends JpaRepository<PhoneT,Long>{
 PhoneT findByTel(String tel);
}

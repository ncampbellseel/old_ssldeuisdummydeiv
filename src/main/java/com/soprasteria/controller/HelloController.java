package com.soprasteria.controller;

import java.sql.Timestamp;
import java.util.Date;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.soprasteria.model.Hello;
import com.soprasteria.model.Link;
import com.soprasteria.model.Notification;
import com.soprasteria.model.User;
import com.soprasteria.model.Video;
import com.soprasteria.model.World;
import com.soprasteria.repository.LinkRepository;
import com.soprasteria.repository.NotificationRepository;
import com.soprasteria.repository.UserRepository;
import com.soprasteria.repository.VideoRepository;

@RestController
public class HelloController {

	@Autowired
	private VideoRepository videoRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private NotificationRepository notificationRepository;
	
	@Autowired
	private LinkRepository linkRepository;
	
    private static final String template = "Hello, %s!";
    private static final String template2 = "World, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Hello greeting(@RequestParam(value="name", defaultValue="World") String name) {
    	
    	Date now=new Date();
    	
    	Video video=new Video();
    	video.setProductionNo("1234");
    	video.setS3Key("1234");
    	videoRepository.save(video);
    	
    	User user=new User();
    	user.setUsername("User");
    	user.setPassword("Pass");
    	userRepository.save(user);
    	
    	Notification notification=new Notification();
    	notification.setCrimeRefNo("CRIMEREFNO");
    	notification.setDateTime(new Timestamp(now.getTime()));
    	notification.setStatus("Unread");
    	notificationRepository.save(notification);
    	
    	Link link=new Link();
    	link.setNotification(notification);
    	link.setVideo(video);
    	link.setTranscript("TEST");
    	link.setUrl("www.test.com");
    	linkRepository.save(link);
    	
        return new Hello(counter.incrementAndGet(),
                            String.format(template, name));
    }
    
    @RequestMapping("/hello")
    public World greeting2(@RequestParam(value="name", defaultValue="Hello") String name) {
        return new World(counter.incrementAndGet(),
                            String.format(template2, name));
    }
}

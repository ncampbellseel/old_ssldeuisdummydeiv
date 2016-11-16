package com.soprasteria.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name="link")
public class Link {

	public Link(){}
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
	
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="video_id")
    private Video video;
	
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="notification_id")
    private Notification notification;
	    
	private String url;
	
	private String transcript;

	public Video getVideo() {
		return video;
	}

	public void setVideo(Video video) {
		this.video = video;
	}

	public Notification getNotification() {
		return notification;
	}

	public void setNotification(Notification notification) {
		this.notification = notification;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getTranscript() {
		return transcript;
	}

	public void setTranscript(String transcript) {
		this.transcript = transcript;
	}

	public long getId() {
		return id;
	}
	
	
}

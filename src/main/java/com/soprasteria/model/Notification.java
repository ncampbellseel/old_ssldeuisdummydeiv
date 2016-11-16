package com.soprasteria.model;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity(name = "notification")
public class Notification {

	public Notification() {
	}

	public Notification(String crimeRefNo, Timestamp dateTime, String status) {
		this.crimeRefNo = crimeRefNo;
		this.status = status;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "crime_ref_no", nullable = false, length = 50)
	private String crimeRefNo;

	@Column(name = "date_time", nullable = false)
	private Timestamp dateTime;

	@Column(name = "status", nullable = true, length = 50)
	private String status;
	
	@OneToMany(fetch=FetchType.LAZY, cascade = CascadeType.ALL, mappedBy="notification")
	private Set<Link> links = new HashSet<Link>(0);
	

	public Set<Link> getLinks() {
	    return links;
	}
	
    public void setLinks(Set<Link> links) {
        this.links = links;
    }
	
	public String getCrimeRefNo() {
		return crimeRefNo;
	}

	public void setCrimeRefNo(String crimeRefNo) {
		this.crimeRefNo = crimeRefNo;
	}

	public Timestamp getDateTime() {
		return dateTime;
	}

	public void setDateTime(Timestamp dateTime) {
		this.dateTime = dateTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	public long getId() {
		return id;
	}
	
	
}
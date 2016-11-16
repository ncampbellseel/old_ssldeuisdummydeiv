package com.soprasteria.model;

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

@Entity(name="video")
public class Video{

	public Video(){}
	
	public Video(String s3Key, String productionNo) {
		this.s3Key = s3Key;
		this.productionNo = productionNo;
	}

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
	

	@Column(name = "s3_key", nullable = false, length=40)
	private String s3Key;
	

	@Column(name = "production_no", nullable = false, length=40)
	private String productionNo;
	
	@OneToMany(fetch=FetchType.LAZY, cascade = CascadeType.ALL, mappedBy="video")
	private Set<Link> links = new HashSet<Link>(0);
	

	public Set<Link> getLinks() {
	    return links;
	}
	
    public void setLinks(Set<Link> links) {
        this.links = links;
    }


	public String getS3Key() {
		return s3Key;
	}

	public void setS3Key(String s3Key) {
		this.s3Key = s3Key;
	}

	public String getProductionNo() {
		return productionNo;
	}

	public void setProductionNo(String productionNo) {
		this.productionNo = productionNo;
	}

	public long getId() {
		return id;
	}
	
	
	

}
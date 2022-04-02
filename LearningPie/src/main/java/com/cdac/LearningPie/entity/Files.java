package com.cdac.LearningPie.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;


@Entity

public class Files {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int fileId;
	private String fileName;
	
	@ManyToOne
	@JoinColumn(name = "group_id")
	private GroupInfo group;

	public int getFileId() {
		return fileId;
	}

	public void setFileId(int fileId) {
		this.fileId = fileId;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public GroupInfo getGroup() {
		return group;
	}

	public void setGroup(GroupInfo group) {
		this.group = group;
	}

	@Override
	public String toString() {
		return "Files [fileId=" + fileId + ", fileName=" + fileName + ", group=" + group + "]";
	}
	
	
}

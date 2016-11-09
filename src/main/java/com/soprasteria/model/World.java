package com.soprasteria.model;

public class World {

    private final long id;
    private final String content;

    public World(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}

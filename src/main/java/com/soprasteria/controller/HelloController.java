package com.soprasteria.controller;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.soprasteria.model.Hello;
import com.soprasteria.model.World;

@RestController
public class HelloController {

    private static final String template = "Hello, %s!";
    private static final String template2 = "World, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Hello greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Hello(counter.incrementAndGet(),
                            String.format(template, name));
    }
    
    @RequestMapping("/hello")
    public World greeting2(@RequestParam(value="name", defaultValue="Hello") String name) {
        return new World(counter.incrementAndGet(),
                            String.format(template2, name));
    }
}

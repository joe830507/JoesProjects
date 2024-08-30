package com.lin.japanese_learning;

import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class JapaneseController {

    @Autowired
    private JapaneseService japaneseService;

    @GetMapping
    public String managementPage() {
        return "japanese_management";
    }

    @GetMapping("/getList")
    @ResponseBody
    public ResponseEntity<List<Japanese>> getList() {
        return ResponseEntity.ok(japaneseService.getList());
    }

    @PostMapping
    @ResponseBody
    public ResponseEntity<String> save(@RequestBody Japanese entity) {
        japaneseService.save(entity);
        return ResponseEntity.ok("It's saved.");
    }

}
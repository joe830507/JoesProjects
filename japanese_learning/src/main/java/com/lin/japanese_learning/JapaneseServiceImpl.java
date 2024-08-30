package com.lin.japanese_learning;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JapaneseServiceImpl implements JapaneseService {
    @Autowired
    private JapaneseRepository japaneseRepository;

    @Override
    public List<Japanese> getList() {
        return japaneseRepository.findAll();
    }

    @Override
    public void save(Japanese entity) {
        japaneseRepository.save(entity);
    }
}
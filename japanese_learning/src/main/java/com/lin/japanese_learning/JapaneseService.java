package com.lin.japanese_learning;

import java.util.List;

public interface JapaneseService {
    public List<Japanese> getList();

    public void save(Japanese entity);
}

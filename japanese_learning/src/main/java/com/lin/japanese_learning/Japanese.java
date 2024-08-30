package com.lin.japanese_learning;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Japanese {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Type type;
    private String content;
    private String comment;
}

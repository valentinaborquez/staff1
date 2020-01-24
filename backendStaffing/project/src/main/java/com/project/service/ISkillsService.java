package com.project.service;

import com.project.dto.ReqSkillsDto;
import com.project.dto.ResponseSkillsDto;
import com.project.model.Skills;

import java.util.List;

public interface ISkillsService {
    List<Skills> obtenerHabilidades();
    boolean crearHabilidad(Skills skills);
    ResponseSkillsDto guardarHabilidad(ReqSkillsDto habilidad) throws Exception;


}

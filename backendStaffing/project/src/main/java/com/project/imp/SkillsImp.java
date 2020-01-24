package com.project.imp;

import com.project.dto.ReqSkillsDto;
import com.project.dto.ResponseSkillsDto;
import com.project.model.Skills;
import com.project.service.ISkillsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillsImp implements ISkillsService {
    @Override
    public List<Skills> obtenerHabilidades() {
        return null;
    }

    @Override
    public boolean crearHabilidad(Skills skills) {
        return false;
    }

    @Override
    public ResponseSkillsDto guardarHabilidad(ReqSkillsDto habilidad) throws Exception {
        return null;
    }
}

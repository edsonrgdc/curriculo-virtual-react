import React, { useState } from 'react';

import Header from './components/heade/Header'
import Pessoal from './components/pessoal/Pessoal'
import características from './components/características/Características'
import Projetos from './components/projetos/Projetos'
import Formação from './components/formção/Formação'
import Educação from './components/educação/Educação'
import RedesSociais from './components/redessociais/RedesSociais'

import './Curriculo.css'

function Curriculo()

const [curriculo, setCurriculo] = useState({
  nome: 'Édson Ruan Goulart da Costa',
  titulo: 'Curriculo Virtual em React',

  aniversário: '22/01/2002',
  cidade: 'São Leopoldo',
  telefone: '(51) 9 8065-6492',
  email: 'edsonrgdc18@gmail.com',

  características: 'Proatividade, pontualidade,excelencia, equilibrio emocional e boa comunicação. Gosto de trabalhar tanto individualmente como em grupo. Estou sempre em busca de conhecimentos que agreguem valor a minha pessoa e também para aqueles que convivem junto comigo.',

  projetos: [
    {
      titulo: 'Maquinas avançadas',
      tecnologia: 'nenhuma específica',
      texto: 'Maquinas que podem distorcer a realidade através de uma tempestade catastrófica imaginaria.'
    },
    {
      titulo: 'Mouse tecnologico',
      tecnologia: 'antiga',
      texto: 'Mouse capaz de acelerar a troca de páginas na velocidade de uma lesma.'
    },
    {
      titulo: 'Placa mãe',
      tecnologia: 'nenhuma',
      texto: 'hardware capaz de aguentar extremas temperaturas através de códigos Git.'
    },
    {
      titulo: 'Grande terremoto',
      tecnologia: 'Unity',
      texto: 'jogo de realidade virtual simulador de terremotos.'
    },
    {
      titulo: 'Boxe',
      tecnologia: 'Unity',
      texto: 'Jogo de luta, inspirado em Rock Balboa.'
    },
    {
      titulo: 'jogo da lesma',
      tecnologia: 'nenhuma',
      texto: 'Consiste em empurrar lesmas por um percurso de 50 metros com uma mangueira com água.'
    }
  ],

  redesSociais: [
    { url: 'https://www.facebook.com/ruan.costa.35513800', text: 'Facebook' },
    { url: 'https://github.com/edsonrgdc', text: 'GitHub' }
  ],

  educação:[
    {
      nome: 'Cursando o 3° ano do Ensino Médio',
      local: 'Escola Estadual de Ensino Médio Professora Helena Câmara'
    }
  ],

  cursosConcluídos: [
    {
      nome: 'Montagem e manutençao de notebooks, celulares, computadores e redes',
      local: 'Prepara Cursos - São Leopoldo'
    },
    {
      nome: 'Mecanico de manutenção industrial',
      local: 'Instituto SENAI de Inovação Soluções Integradas em Metalmecânica'
    }
  ],

  cursosAndamento: [
    {
      nome: 'Eletroeletrônica de manutenção industrial',
      local: 'Instituto SENAI de Inovação Soluções Integradas em Metalmecânica'
    },
    {
      nome: 'Front End - Html5, Css, JavaScript, React',
      local: 'Novo Hamburgo - Betools - Tecno Start'
    }
  ],

  complemento: [
    {
      nome: 'Carteira de Habilitação - AB - Em andamento.',
      local: 'Valderez - São Leopoldo'
    }
  ]
})

return (
  <>
    <Header nome={curriculo.nome} titulo={curriculo.titulo} />

    <main>
      <Pessoal aniversário={curriculo.aniversário} cidade={curriculo.cidade} email={curriculo.email} />
      <Características texto={curriculo.características} />
      <Projetos projetos={curriculo.projetos} />
      <RedesSociais redesSociais={curriculo.redesSociais} />
      <Educação educação={curriculo.educação} />
      <CursosConcluídos cursosConcluídos={curriculo.cursosConcluídos} />
      <CursosAndamento cursosAndamento={curriculo.cursosAndamento} />
      <Complemento complemento={curriculo.complemento} />
    </main>

      <Footer nome={curriculo.nome} telefone={curriculo.telefone}/>
  </>
)

export default Curriculo


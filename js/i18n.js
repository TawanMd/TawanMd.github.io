window.PORTFOLIO_I18N = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      stack: 'Stack',
      journey: 'Trajetória',
      contact: 'Contato',
    },
    hero: {
      badge: 'Disponível para desafios em Backend, Integrações & Dados',
      greeting: 'Olá, eu sou',
      typingPrefix: '>',
      typingPhrases: [
        'Integrações & Open Finance',
        'APIs REST & PostgreSQL',
        'IA Aplicada à Automação Contábil',
      ],
      pitch:
        'Profissional com 5+ anos em tecnologia (suporte técnico, implantação Azure, QA e desenvolvimento), sendo ~1,5 ano construindo automações, integrações via API e protótipos de dados em fintech contábil.',
      ctaProjects: 'Ver Projetos',
      ctaAbout: 'Sobre Mim',
      runBtn: '▶ Executar',
      copyBtn: 'Copiar',
      copiedBtn: 'Copiado!',
      kpiYears: 'Anos em Tecnologia',
      kpiSpeed: 'Velocidade no Validador Contábil',
      kpiProjects: 'Projetos & Automações Reais',
      kpiEnglish: 'Inglês Avançado (EF SET)',
    },
    about: {
      eyebrow: '01 · Sobre Mim',
      title: 'Da investigação em produção à construção de integrações',
      desc: 'Uno visão prática de regra de negócio contábil com entrega técnica em Python, Node.js, SQL e IA aplicada.',
      roleTag: 'Backend · Integrações & Open Finance',
      locBadge: 'Florianópolis, SC',
      adsBadge: 'ADS Concluído · Nov/2026',
      cs50Badge: 'CS50P HarvardX',
      enBadge: 'Inglês C1 · EF SET',
      p1: 'Minha base começou no suporte técnico e implantação de software SaaS e on-premise em Azure, lidando com SQL, Power BI e integrações REST/SOAP com ERPs como SAP e TOTVS.',
      p2: 'Na Mister Contador (adquirida pela Conta Azul / Grupo Visma em jul/2026), passei por QA e Desenvolvimento Júnior até o Suporte Sênior — construindo ferramentas reais que eliminam trabalho manual em escritórios contábeis.',
      highlight:
        'Já validei um MVP de Open Finance via API da Pluggy com dados reais autorizados junto a um escritório parceiro, levando melhorias diretas para o produto.',
      pillars: [
        {
          title: 'Backend & Open Finance',
          desc: 'APIs REST em Node.js e Python (Flask/Express), consumo seguro de Open Finance (Pluggy), webhooks, tratamento de erros e containerização com Docker.',
        },
        {
          title: 'Dados & Automação',
          desc: 'Consultas e modelagem em PostgreSQL, validação estrutural de PDFs contábeis, parsing de extratos OFX e dashboards analíticos em Superset e Streamlit.',
        },
        {
          title: 'IA Aplicada a Negócios',
          desc: 'Integrações com a Gemini API (visão para notas fiscais, assistente financeiro e rotinas agendadas) e fluxo de engenharia assistido por IA com foco em confiabilidade.',
        },
      ],
    },
    projects: {
      eyebrow: '02 · Portfólio Técnico',
      title: 'Projetos construídos para resolver dores reais',
      desc: 'Explore pelo carrossel, filtre por especialidade ou abra a arquitetura detalhada de cada entrega.',
      filters: {
        all: 'Todos',
        backend: 'Open Finance & Backend',
        ai: 'IA & Web',
        data: 'Dados & Python',
      },
      archBtn: 'Ver Arquitetura',
      otherTitle: 'Outros Projetos & Provas de Conceito (POCs)',
      otherItems: [
        {
          title: 'Mister Analytics — POC Interna (não levada à produção)',
          desc: 'Protótipo de BI multitenant em Flask, Apache Superset e PostgreSQL com isolamento por schema e otimização de consultas SQL.',
          links: [],
        },
        {
          title: 'Automação Admin (Extensão Chrome)',
          desc: 'Extensão em JavaScript que lê listas de CNPJs para automatizar bloqueios em lote no painel administrativo.',
          links: [{ label: 'GitHub', url: 'https://github.com/TawanMd/Automacao-admin' }],
        },
        {
          title: 'Landing Pages Freelance em Produção',
          desc: 'Sites comerciais para Origem Personalizados RS (painel admin com hash SHA-256 no cliente) e Ana Mayra na Vercel.',
          links: [
            { label: 'Origem RS', url: 'https://luis-eduardo.vercel.app' },
            { label: 'Ana Mayra', url: 'https://ana-mayra.vercel.app' },
          ],
        },
      ],
      modalLabels: {
        problem: 'Problema',
        solution: 'Solução',
        arch: 'Arquitetura & Stack',
        impact: 'Impacto Real',
        repo: 'Ver Código no GitHub',
        live: 'Abrir Aplicação',
      },
      items: [
        {
          id: 'anas-bakery',
          category: 'ai',
          categoryLabel: 'IA & Web',
          highlight: 'Em Produção',
          title: "Ana's Bakery — Web, Gestão Financeira & IA",
          summary:
            'Plataforma em produção com vitrine, painel financeiro protegido por sessão, cron jobs na Vercel e Central IA com Gemini.',
          tags: ['JavaScript', 'Vercel Functions', 'Gemini API', 'Vercel Blob'],
          repoUrl: 'https://github.com/TawanMd/ana-s-bakery',
          liveUrl: 'https://anasbakery.vercel.app',
          problem:
            'Pequenos negócios de confeitaria perdem margem quando preços de insumos mudam e controlam custos em planilhas manuais.',
          solution:
            'Site comercial integrado a um painel administrativo restrito com cálculos de ROI/custos e Central IA para leitura de notas fiscais e radar de preços.',
          arch:
            'Frontend estático otimizado + proxy.js protegendo rotas com cookie assinado (lib/auth.js), persistência em Vercel Blob, funções serverless (/api/ai/*) e cron agendado 2x/semana com @google/genai.',
          impact:
            'Sistema ativo em produção na Vercel, em evolução para suportar pedidos diretos pelo site com fluxo de pagamento.',
        },
        {
          id: 'open-finance-mvp',
          category: 'backend',
          categoryLabel: 'Open Finance & Backend',
          highlight: 'Validado c/ Cliente',
          title: 'MVP Open Finance Contábil (Pluggy)',
          summary:
            'Protótipo em Node.js puro e Docker conectado à API da Pluggy para leitura real de contas PJ, PF/CAEPF e corretoras.',
          tags: ['Node.js', 'Pluggy API', 'Open Finance', 'Docker', 'Render'],
          repoUrl: 'https://github.com/TawanMd/sandbox-marcio',
          liveUrl: null,
          problem:
            'Era necessário validar como payloads reais de Open Finance (PJ, produtor rural e investimentos) se comportam na conciliação e escrituração contábil.',
          solution:
            'Aplicação single-tenant sem dependências externas conectando-se diretamente à Pluggy para exibir extratos, cartões, investimentos e registros contábeis reais.',
          arch:
            'Servidor Node.js puro (server.mjs) com HTTP Basic Auth, frontend desacoplado, Dockerfile, configuração Render e smoke tests automatizados.',
          impact:
            'Validado com dados reais autorizados junto a um escritório contábil parceiro, gerando melhorias incorporadas ao produto Mister Contador.',
        },
        {
          id: 'validador-pdf',
          category: 'data',
          categoryLabel: 'Dados & Python',
          highlight: '+100% Velocidade',
          title: 'Validador de Plano de Contas em PDF',
          summary:
            'Aplicação desktop em Python que audita estrutura, códigos e descrições de planos de contas contábeis antes do processamento.',
          tags: ['Python', 'pdfplumber', 'Tkinter', 'PyInstaller'],
          repoUrl: 'https://github.com/TawanMd/PDF-testing',
          liveUrl: null,
          problem:
            'Conferir manualmente PDFs extensos de planos de contas gerava atraso operacional e erros de formatação ou códigos inconsistentes na importação.',
          solution:
            'Ferramenta gráfica simples com extração página a página, separando erros fatais de avisos (tokens grudados) com exportação de log em .txt.',
          arch:
            'Script Python modular com pdfplumber para parsing estrutural, regex de validação hierárquica, GUI em Tkinter e empacotamento via PyInstaller.',
          impact:
            'Dobrou a velocidade de verificação interna (+100% de produtividade), reduzindo drasticamente erros manuais e retrabalho.',
        },
        {
          id: 'transactions-pluggy',
          category: 'backend',
          categoryLabel: 'Open Finance & Backend',
          highlight: 'Open Finance',
          title: 'Transactions Pluggy — Consulta Segura',
          summary:
            'Aplicação full-stack com backend Express isolando credenciais da Pluggy para consultar transações por Account ID e período.',
          tags: ['Node.js', 'Express', 'Axios', 'REST API', 'Vercel'],
          repoUrl: 'https://github.com/TawanMd/transactions-pluggy',
          liveUrl: 'https://transactions-pluggy.vercel.app',
          problem:
            'Consultar APIs financeiras diretamente do navegador exporia Client ID e Client Secret da instituição.',
          solution:
            'Camada intermediária em Node.js/Express com autenticação de acesso e proxy seguro para busca dinâmica de transações.',
          arch:
            'Frontend desacoplado (Vercel) comunicando via Fetch API + CORS com API REST Node/Express/Axios usando variáveis de ambiente no servidor.',
          impact:
            'Serviu como base prática para evoluir para integrações Open Finance mais completas e arquitetura segura de credenciais.',
        },
        {
          id: 'ofx-analysis',
          category: 'data',
          categoryLabel: 'Dados & Python',
          highlight: 'Extratos .ofx',
          title: 'OFX Analysis — Leitor de Extratos',
          summary:
            'Aplicação desktop em Python com tema moderno para leitura visual rápida de extratos bancários no padrão .ofx.',
          tags: ['Python', 'Tkinter', 'sv-ttk', 'OFX'],
          repoUrl: 'https://github.com/TawanMd/ofx-analysis',
          liveUrl: null,
          problem:
            'Arquivos .ofx são padrão bancário para conciliação, mas difíceis de inspecionar rapidamente sem abrir um ERP ou editor de texto.',
          solution:
            'Visualizador desktop com tabela colorida para créditos/débitos, tradução de descrições padrão, dados da conta e saldo consolidado.',
          arch:
            'Python 3 + Tkinter estilizado com sv-ttk e parser dedicado para tags de extratos bancários OFX.',
          impact:
            'Agiliza conferência e triagem de extratos financeiros em fluxos de suporte e análise contábil.',
        },
        {
          id: 'lol-analysis',
          category: 'data',
          categoryLabel: 'Dados & Python',
          highlight: 'Random Forest',
          title: 'LoL Analysis — Dashboard & ML',
          summary:
            'Dashboard exploratório em Streamlit integrado à API do Kaggle com modelo Random Forest para previsão de vitória.',
          tags: ['Python', 'Streamlit', 'scikit-learn', 'Random Forest'],
          repoUrl: 'https://github.com/TawanMd/LoL-Analysis',
          liveUrl: null,
          problem:
            'Explorar correlações entre objetivos iniciais de partidas ranqueadas e transformá-las em uma interface interativa de simulação.',
          solution:
            'Pipeline automatizado que baixa o dataset via Kaggle API, treina Random Forest e exibe importância de features + simulador em tempo real.',
          arch:
            'Módulos separados para ingestão (data_manager.py), treino (train_model.py com joblib) e visualização interativa em app.py (Streamlit).',
          impact:
            'Demonstra ciclo completo de análise exploratória, engenharia de features e publicação de modelo preditivo em Python.',
        },
      ],
    },
    stack: {
      eyebrow: '03 · Stack & Competências',
      title: 'Ferramentas organizadas por domínio técnico',
      desc: 'Foco em backend, integração confiável de APIs, bancos relacionais e IA aplicada — sem dispersão.',
      groups: [
        {
          title: 'Backend & Integrações',
          items: ['Python', 'Node.js', 'JavaScript ES6+', 'REST APIs', 'Express.js', 'Flask', 'Open Finance (Pluggy)', 'SOAP / XML / JSON'],
        },
        {
          title: 'Dados & Bancos',
          items: ['PostgreSQL', 'SQL Query Tuning', 'Apache Superset', 'Power BI + Gateway', 'pandas', 'scikit-learn', 'Streamlit', 'pdfplumber'],
        },
        {
          title: 'Cloud, DevOps & QA',
          items: ['Git & GitHub', 'Docker', 'Microsoft Azure', 'Azure DevOps', 'Render & Vercel', 'Linux', 'ISTQB / pytest', 'Cypress & Selenium'],
        },
        {
          title: 'IA Aplicada & Negócio',
          items: ['Gemini API (@google/genai)', 'Visão Computacional (NFs)', 'Cursor & MCP', 'Conciliação Contábil', 'Extratos OFX', 'ITIL & SLA B2B'],
        },
      ],
    },
    journey: {
      eyebrow: '04 · Trajetória & Formação',
      title: 'Evolução consistente até a engenharia de produto',
      desc: 'Mais de 5 anos em tecnologia, combinando vivência real com clientes B2B e entrega contínua de código.',
      timeline: [
        {
          role: 'Analista de Suporte Sênior · Dev & Qualidade Jr · QA Analyst',
          date: 'Out/2024 – Atual',
          company: 'Mister Contador (adquirida pela Conta Azul / Grupo Visma em jul/2026) · Florianópolis, SC',
          bullets: [
            'Suporte Sênior: investigação técnica de incidentes em produção via SQL, análise de integrações contábeis para ~3 mil escritórios, triagem de bugs com engenharia e ferramentas internas.',
            'Dev & Qualidade Jr (desde mai/2025): construiu MVP Open Finance (Pluggy/Node.js/Docker) validado com escritório parceiro, validador PDF em Python (+100% de velocidade), extensão JS e POC analítica em Flask + Superset + PostgreSQL.',
            'QA Analyst (out/2024 – mai/2025): testes manuais (práticas ISTQB) em homologação e produção, documentação de evidências e atendimento B2B técnico.',
          ],
        },
        {
          role: 'Technical Support Analyst',
          date: 'Jun/2024 – Set/2024',
          company: 'DropLatam · Florianópolis, SC',
          bullets: [
            'Suporte técnico à aplicação web para operação na América Latina seguindo práticas ITIL via Zendesk e ManyChat.',
          ],
        },
        {
          role: 'IT Support Analyst & Implantação SaaS',
          date: 'Mar/2022 – Mar/2024',
          company: 'Paradigma Business Solutions · Florianópolis, SC',
          bullets: [
            'Implantação e atualização de software SaaS e on-premise em Microsoft Azure e Azure DevOps sob SLAs rigorosos.',
            'Manipulação de dados em SQL, manutenção de Power BI (incl. gateway de dados), Microsoft Dynamics CRM e treinamento de estagiários.',
            'Testes e integração de APIs REST e SOAP (JSON, XML, SoapUI) conectadas a ERPs (SAP e TOTVS).',
          ],
        },
        {
          role: 'Analista de Suporte ao Usuário',
          date: 'Jan/2021 – Jan/2022',
          company: 'ARN Representações · Florianópolis, SC',
          bullets: [
            'Suporte N1/N2 (hardware e software), aplicação de práticas ITIL e administração de acessos no Microsoft 365.',
          ],
        },
      ],
      eduTitle: 'Formação Acadêmica',
      eduItems: [
        { title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', sub: 'UniCesumar · Ago/2022 – Nov/2026 (Concluído)' },
        { title: 'CS50P — Programming with Python', sub: 'HarvardX · Certificado (Projeto final com pytest)' },
      ],
      certTitle: 'Certificações',
      certItems: [
        { title: 'EF SET English Certificate', sub: 'Nível Avançado C1 (Compreensão e comunicação)' },
        { title: 'Code Island Cloud', sub: 'Fundamentos de computação em nuvem' },
      ],
      langTitle: 'Idiomas',
      langItems: [
        { title: 'Português', sub: 'Língua materna' },
        { title: 'Inglês', sub: 'Avançado (C1 – EF SET) · Preparado para entrevistas técnicas' },
        { title: 'Espanhol', sub: 'Profissional (Professional working)' },
      ],
    },
    contact: {
      eyebrow: '05 · Contato',
      title: 'Vamos construir integrações sólidas juntos?',
      desc: 'Aberto a conversas sobre Backend, Engenharia de Integrações, Open Finance e Dados — no Brasil ou em times remotos internacionais.',
      whatsappBtn: 'WhatsApp',
      whatsappAria: 'Conversar no WhatsApp',
      whatsappMsg: 'Olá Thauan, vi seu portfólio e gostaria de conversar sobre uma oportunidade em tecnologia.',
      copyEmail: 'Copiar E-mail',
      emailToast: 'E-mail copiado: thauan.matheus40@gmail.com',
      sendEmail: 'Enviar E-mail',
      footerText: 'Desenvolvido por Thauan Matheus · Florianópolis, SC',
    },
    cmd: {
      placeholder: 'Buscar seção, projeto ou ação... (ex: Pluggy, Dark, Sobre)',
      help: '↑↓ navegar · Enter executar · Esc fechar',
      navGroup: 'Seção',
      projGroup: 'Projeto',
      actGroup: 'Ação',
      runTerminal: 'Executar snippet do terminal',
      toggleLang: 'Alternar idioma (PT / EN)',
      toggleTheme: 'Alternar tema (Dark / Light)',
      copyEmail: 'Copiar e-mail (thauan.matheus40@gmail.com)',
      openWhatsapp: 'Chamar no WhatsApp',
      openGithub: 'Abrir GitHub (@TawanMd)',
      openLinkedin: 'Abrir LinkedIn',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      stack: 'Stack',
      journey: 'Experience',
      contact: 'Contact',
    },
    hero: {
      badge: 'Open to Backend, Integrations & Data Engineering roles',
      greeting: "Hi, I'm",
      typingPrefix: '>',
      typingPhrases: [
        'Integrations & Open Finance',
        'REST APIs & PostgreSQL',
        'Applied AI for Accounting Automation',
      ],
      pitch:
        'Technology professional with 5+ years of experience (technical support, Azure SaaS deployment, QA, and development), including ~1.5 years building automations, API integrations, and data prototypes in an accounting fintech.',
      ctaProjects: 'View Projects',
      ctaAbout: 'About Me',
      runBtn: '▶ Run',
      copyBtn: 'Copy',
      copiedBtn: 'Copied!',
      kpiYears: 'Years in Tech',
      kpiSpeed: 'Chart-of-Accounts Validator Speed',
      kpiProjects: 'Real Projects & Automations',
      kpiEnglish: 'Advanced English (EF SET)',
    },
    about: {
      eyebrow: '01 · About Me',
      title: 'From production troubleshooting to building API integrations',
      desc: 'Bridging real accounting business rules with hands-on execution in Python, Node.js, SQL, and applied AI.',
      roleTag: 'Backend · Integrations & Open Finance',
      locBadge: 'Florianópolis, Brazil',
      adsBadge: 'B.Tech. ADS · Nov/2026',
      cs50Badge: 'CS50P HarvardX',
      enBadge: 'English C1 · EF SET',
      p1: 'My foundation started in technical support and SaaS/on-premise deployments on Microsoft Azure, working daily with SQL, Power BI, and REST/SOAP integrations connected to ERPs like SAP and TOTVS.',
      p2: 'At Mister Contador (acquired by Conta Azul / Visma Group in Jul 2026), I progressed through QA and Junior Development into Senior Support — building practical tools that remove manual work for accounting teams.',
      highlight:
        'I validated an Open Finance MVP using the Pluggy API with authorized real data alongside a partner accounting firm, bringing concrete improvements into the core product.',
      pillars: [
        {
          title: 'Backend & Open Finance',
          desc: 'REST APIs in Node.js and Python (Flask/Express), secure Open Finance consumption (Pluggy), error handling, and Docker containerization.',
        },
        {
          title: 'Data & Automation',
          desc: 'PostgreSQL querying and optimization, structural validation of accounting PDFs, OFX bank statement parsing, and analytics dashboards in Superset and Streamlit.',
        },
        {
          title: 'Applied Business AI',
          desc: 'Production Gemini API integrations (receipt vision parsing, financial advisory, scheduled price sync) and AI-assisted engineering workflows focused on reliability.',
        },
      ],
    },
    projects: {
      eyebrow: '02 · Technical Portfolio',
      title: 'Projects built to solve real operational problems',
      desc: 'Browse the carousel, filter by domain, or inspect the architecture breakdown of each project.',
      filters: {
        all: 'All',
        backend: 'Open Finance & Backend',
        ai: 'AI & Web',
        data: 'Data & Python',
      },
      archBtn: 'View Architecture',
      otherTitle: 'Additional Projects & Proofs of Concept (POCs)',
      otherItems: [
        {
          title: 'Mister Analytics — Internal POC (not shipped to production)',
          desc: 'Multitenant BI prototype built with Flask, Apache Superset, and PostgreSQL featuring per-schema data isolation and SQL query tuning.',
          links: [],
        },
        {
          title: 'Admin Automation (Chrome Extension)',
          desc: 'JavaScript browser extension that reads CNPJ lists to automate bulk account actions in an internal admin portal.',
          links: [{ label: 'GitHub', url: 'https://github.com/TawanMd/Automacao-admin' }],
        },
        {
          title: 'Production Freelance Landing Pages',
          desc: 'Commercial websites for Origem Personalizados RS (client-side SHA-256 admin panel) and Ana Mayra deployed on Vercel.',
          links: [
            { label: 'Origem RS', url: 'https://luis-eduardo.vercel.app' },
            { label: 'Ana Mayra', url: 'https://ana-mayra.vercel.app' },
          ],
        },
      ],
      modalLabels: {
        problem: 'Problem',
        solution: 'Solution',
        arch: 'Architecture & Stack',
        impact: 'Real Impact',
        repo: 'View Code on GitHub',
        live: 'Open Live App',
      },
      items: [
        {
          id: 'anas-bakery',
          category: 'ai',
          categoryLabel: 'AI & Web',
          highlight: 'In Production',
          title: "Ana's Bakery — Web, Financial Hub & AI",
          summary:
            'Production platform featuring a storefront, session-protected financial dashboard, Vercel cron jobs, and a Gemini AI Hub.',
          tags: ['JavaScript', 'Vercel Functions', 'Gemini API', 'Vercel Blob'],
          repoUrl: 'https://github.com/TawanMd/ana-s-bakery',
          liveUrl: 'https://anasbakery.vercel.app',
          problem:
            'Small artisanal bakeries lose margin when ingredient prices fluctuate and rely on error-prone manual spreadsheets.',
          solution:
            'Commercial storefront paired with a protected financial management panel, ROI calculations, and an AI Hub for receipt parsing and price tracking.',
          arch:
            'Optimized static frontend + proxy.js session protection (lib/auth.js), Vercel Blob persistence, serverless endpoints (/api/ai/*), and bi-weekly scheduled sync via @google/genai.',
          impact:
            'Live in production on Vercel and currently expanding to direct customer ordering with payment integration.',
        },
        {
          id: 'open-finance-mvp',
          category: 'backend',
          categoryLabel: 'Open Finance & Backend',
          highlight: 'Client Validated',
          title: 'Accounting Open Finance MVP (Pluggy)',
          summary:
            'Zero-dependency Node.js and Docker prototype connected to the Pluggy API to read real business, individual/CAEPF, and brokerage accounts.',
          tags: ['Node.js', 'Pluggy API', 'Open Finance', 'Docker', 'Render'],
          repoUrl: 'https://github.com/TawanMd/sandbox-marcio',
          liveUrl: null,
          problem:
            'The product team needed to evaluate how real Open Finance payloads behave across corporate, rural-producer, and brokerage accounts for bookkeeping.',
          solution:
            'Single-tenant zero-dependency application connecting directly to Pluggy to display statements, credit cards, investments, and accounting records.',
          arch:
            'Pure Node.js server (server.mjs) with HTTP Basic Auth, decoupled frontend, Dockerfile, Render deployment config, and automated smoke tests.',
          impact:
            'Validated with authorized real data alongside a partner accounting firm, driving concrete improvements into Mister Contador.',
        },
        {
          id: 'validador-pdf',
          category: 'data',
          categoryLabel: 'Data & Python',
          highlight: '+100% Speed',
          title: 'Chart-of-Accounts PDF Validator',
          summary:
            'Python desktop application auditing structure, account codes, and descriptions inside accounting PDFs before system ingestion.',
          tags: ['Python', 'pdfplumber', 'Tkinter', 'PyInstaller'],
          repoUrl: 'https://github.com/TawanMd/PDF-testing',
          liveUrl: null,
          problem:
            'Manually reviewing long chart-of-accounts PDFs caused operational bottlenecks and missed formatting or hierarchy errors.',
          solution:
            'User-friendly desktop GUI parsing pages sequentially, separating fatal structural errors from non-fatal token warnings with .txt log export.',
          arch:
            'Modular Python script using pdfplumber text extraction, hierarchical regex validation, Tkinter UI, and PyInstaller packaging.',
          impact:
            'Doubled internal verification speed (+100% productivity), sharply reducing manual checks and rework.',
        },
        {
          id: 'transactions-pluggy',
          category: 'backend',
          categoryLabel: 'Open Finance & Backend',
          highlight: 'Open Finance',
          title: 'Transactions Pluggy — Secure Explorer',
          summary:
            'Full-stack app with a Node.js/Express backend isolating Pluggy API credentials to query financial transactions by Account ID and date range.',
          tags: ['Node.js', 'Express', 'Axios', 'REST API', 'Vercel'],
          repoUrl: 'https://github.com/TawanMd/transactions-pluggy',
          liveUrl: 'https://transactions-pluggy.vercel.app',
          problem:
            'Calling financial APIs directly from the browser would expose sensitive Client ID and Client Secret credentials.',
          solution:
            'Express backend proxy with access login protecting credentials on the server while serving filtered transaction views.',
          arch:
            'Decoupled frontend (Vercel) communicating via Fetch API + CORS with a Node/Express/Axios REST server configured with environment variables.',
          impact:
            'Established the architectural pattern carried forward into broader Open Finance integrations.',
        },
        {
          id: 'ofx-analysis',
          category: 'data',
          categoryLabel: 'Data & Python',
          highlight: '.ofx Parser',
          title: 'OFX Analysis — Statement Parser',
          summary:
            'Modern Python desktop viewer for quick visual inspection and financial summarization of .ofx bank statements.',
          tags: ['Python', 'Tkinter', 'sv-ttk', 'OFX'],
          repoUrl: 'https://github.com/TawanMd/ofx-analysis',
          liveUrl: null,
          problem:
            'Raw .ofx files are standard for bank reconciliation but cumbersome to inspect quickly outside full ERP systems.',
          solution:
            'Desktop table viewer with color-coded credits/debits, readable transaction descriptions, account metadata, and period totals.',
          arch:
            'Python 3 + Tkinter themed with sv-ttk and dedicated OFX tag parsing.',
          impact:
            'Speeds up statement inspection during support diagnostics and accounting reconciliation workflows.',
        },
        {
          id: 'lol-analysis',
          category: 'data',
          categoryLabel: 'Data & Python',
          highlight: 'Random Forest',
          title: 'LoL Analysis — Dashboard & ML',
          summary:
            'Interactive Streamlit exploratory dashboard connected to the Kaggle API with a Random Forest win-probability simulator.',
          tags: ['Python', 'Streamlit', 'scikit-learn', 'Random Forest'],
          repoUrl: 'https://github.com/TawanMd/LoL-Analysis',
          liveUrl: null,
          problem:
            'Exploring early-game statistical correlations across ranked matches and turning them into an interactive predictive simulator.',
          solution:
            'Automated pipeline fetching the Kaggle dataset, training a Random Forest classifier, and surfacing feature importance and live predictions.',
          arch:
            'Separated modules for data ingestion (data_manager.py), training (train_model.py + joblib), and interactive Streamlit app (app.py).',
          impact:
            'Demonstrates end-to-end exploratory analysis, feature engineering, and model serving in Python.',
        },
      ],
    },
    stack: {
      eyebrow: '03 · Tech Stack',
      title: 'Tools organized by engineering domain',
      desc: 'Focused on backend services, reliable API integrations, relational databases, and applied AI.',
      groups: [
        {
          title: 'Backend & Integrations',
          items: ['Python', 'Node.js', 'JavaScript ES6+', 'REST APIs', 'Express.js', 'Flask', 'Open Finance (Pluggy)', 'SOAP / XML / JSON'],
        },
        {
          title: 'Data & Databases',
          items: ['PostgreSQL', 'SQL Query Tuning', 'Apache Superset', 'Power BI + Gateway', 'pandas', 'scikit-learn', 'Streamlit', 'pdfplumber'],
        },
        {
          title: 'Cloud, DevOps & QA',
          items: ['Git & GitHub', 'Docker', 'Microsoft Azure', 'Azure DevOps', 'Render & Vercel', 'Linux', 'ISTQB / pytest', 'Cypress & Selenium'],
        },
        {
          title: 'Applied AI & Domain',
          items: ['Gemini API (@google/genai)', 'Receipt Vision Parsing', 'Cursor & MCP', 'Accounting Reconciliation', 'OFX Statements', 'ITIL & B2B SLA'],
        },
      ],
    },
    journey: {
      eyebrow: '04 · Experience & Education',
      title: 'Consistent progression into product engineering',
      desc: '5+ years in technology combining B2B customer operations, SaaS deployments, and practical software delivery.',
      timeline: [
        {
          role: 'Senior Support Analyst · Jr Dev & Quality · Software QA',
          date: 'Oct 2024 – Present',
          company: 'Mister Contador (acquired by Conta Azul / Visma Group in Jul 2026) · Florianópolis, Brazil',
          bullets: [
            'Senior Support: production incident investigation with SQL, accounting integration analysis for ~3,000 firms, bug triage with engineering, and internal utilities.',
            'Jr Dev & Quality (from May 2025): built Open Finance MVP (Pluggy/Node.js/Docker) validated with a partner firm, Python PDF validator (+100% speed), Chrome extension, and Flask + Superset + PostgreSQL analytics POC.',
            'Software QA (Oct 2024 – May 2025): structured manual testing (ISTQB practices) across staging and production plus high-touch B2B technical support.',
          ],
        },
        {
          role: 'Technical Support Analyst',
          date: 'Jun 2024 – Sep 2024',
          company: 'DropLatam · Florianópolis, Brazil',
          bullets: [
            'ITIL-aligned technical support for a Latin America-wide web application using Zendesk and ManyChat.',
          ],
        },
        {
          role: 'IT Support Analyst & SaaS Deployment',
          date: 'Mar 2022 – Mar 2024',
          company: 'Paradigma Business Solutions · Florianópolis, Brazil',
          bullets: [
            'SaaS and on-premise deployments and upgrades on Microsoft Azure and Azure DevOps under strict SLA targets.',
            'SQL data analysis, Power BI report/gateway maintenance, Microsoft Dynamics CRM operations, and intern mentoring.',
            'Integration and testing of REST and SOAP APIs (JSON, XML, SoapUI) connected to SAP and TOTVS ERPs.',
          ],
        },
        {
          role: 'User Support Analyst',
          date: 'Jan 2021 – Jan 2022',
          company: 'ARN Representações · Florianópolis, Brazil',
          bullets: [
            'L1/L2 hardware and software troubleshooting, ITIL practices, and Microsoft 365 user permissions administration.',
          ],
        },
      ],
      eduTitle: 'Education',
      eduItems: [
        { title: 'B.Tech. in Systems Analysis and Development (ADS)', sub: 'UniCesumar · Aug 2022 – Nov 2026 (Completed)' },
        { title: 'CS50P — Programming with Python', sub: 'HarvardX · Certified (Final project with pytest)' },
      ],
      certTitle: 'Certifications',
      certItems: [
        { title: 'EF SET English Certificate', sub: 'C1 Advanced (Reading, listening & technical communication)' },
        { title: 'Code Island Cloud', sub: 'Cloud computing fundamentals' },
      ],
      langTitle: 'Languages',
      langItems: [
        { title: 'Portuguese', sub: 'First language (Fluent)' },
        { title: 'English', sub: 'Advanced (C1 – EF SET) · Ready for technical interviews' },
        { title: 'Spanish', sub: 'Professional working proficiency' },
      ],
    },
    contact: {
      eyebrow: '05 · Contact',
      title: "Let's build reliable integrations together?",
      desc: 'Open to conversations around Backend Engineering, API Integrations, Open Finance, and Data — in Brazil or remote global teams.',
      whatsappBtn: 'WhatsApp',
      whatsappAria: 'Chat on WhatsApp',
      whatsappMsg: 'Hi Thauan, I saw your portfolio and would love to connect about a tech opportunity.',
      copyEmail: 'Copy Email',
      emailToast: 'Email copied: thauan.matheus40@gmail.com',
      sendEmail: 'Send Email',
      footerText: 'Built by Thauan Matheus · Florianópolis, SC, Brazil',
    },
    cmd: {
      placeholder: 'Search section, project or action... (e.g. Pluggy, Dark, About)',
      help: '↑↓ navigate · Enter run · Esc close',
      navGroup: 'Section',
      projGroup: 'Project',
      actGroup: 'Action',
      runTerminal: 'Run terminal snippet',
      toggleLang: 'Switch language (PT / EN)',
      toggleTheme: 'Toggle theme (Dark / Light)',
      copyEmail: 'Copy email (thauan.matheus40@gmail.com)',
      openWhatsapp: 'Chat on WhatsApp',
      openGithub: 'Open GitHub (@TawanMd)',
      openLinkedin: 'Open LinkedIn',
    },
  },
};

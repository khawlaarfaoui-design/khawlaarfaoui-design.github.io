const projectsData = [
    {
        id: "beaglev-ai",
        title: "Déploiement & Optimisation IA sur BeagleV-Ahead",
        subtitle: "Hardware Acceleration & Embedded Linux",
        category: "Embedded AI / RISC-V",
        shortDesc: "Étude d'architecture et chaîne d'outils pour l'exécution de modèles IA sur plateforme RISC-V (SoC TH1520) via NPU et extensions vectorielles.",
        techs: ["RISC-V", "TH1520", "NPU", "Yocto", "Docker", "C/C++", "Python", "HHB", "CSI-NN2", "SHL"],
        metrics: "Architecture RISC-V C910/C906 + NPU",
        pipeline: "PyTorch/TF → ONNX → HHB Compiler → CSI-NN2/SHL → Execution (NPU/CPU)",
        problem: "Déployer de l'IA sur des plateformes embarquées RISC-V nécessite la maîtrise des extensions vectorielles (RVV) et des drivers matériels propriétaires NPU.",
        objective: "Évaluer et implémenter la chaîne de compilation croisée complète pour l'exécution d'inférences sur SoC XuanTie TH1520.",
        approach: "Étude bas niveau des drivers VHA, intégration sous Linux embarqué (Yocto/Ubuntu) et benchmark des bibliothèques d'accélération SHL/NNA.",
        challenges: "Gestion de la compilation croisée complexe, contraintes de mémoire alignée et intégration des dépendances runtime du NPU.",
        results: "Pipeline de déploiement fonctionnel sur carte BeagleV-Ahead Rev 1.0, documenté pour des modèles de vision et de traitement du signal."
    },
    {
        id: "cnn-c906",
        title: "CNN Classification de Formes sur Processeur RISC-V C906",
        subtitle: "Execution On-Core Direct",
        category: "RISC-V / Micro-CNN",
        shortDesc: "Implémentation d'un réseau CNN compact sur le cœur RISC-V C906 (sans NPU) pour la reconnaissance de formes géométriques.",
        techs: ["Keras", "ONNX", "TFLite", "HHB", "CSI-NN2", "RISC-V C906", "Cross-Compilation"],
        metrics: "Execution Time = 82.38 ms | FPS = 12.14",
        pipeline: "Keras (Input 1x64x64x1) → ONNX → HHB → RISC-V Assembly/Binary → C906 Execution",
        problem: "Exécuter des inférences efficaces directement sur des cœurs CPU légers RISC-V sans recourir à un accélérateur matériel externe.",
        objective: "Quantifier les performances pures d'un réseau CNN compact (entrée 1x64x64x1) sur le cœur C906 du TH1520.",
        approach: "Génération de code via HHB compiler, optimisation de la taille du binaire et exécution autonome sur le cœur RISC-V.",
        challenges: "Résolution de Segmentation Faults, incompatibilités d'opérateurs (ex: Squeeze), et gestion des entrées Float32 vs modèles quantifiés INT8.",
        results: "Obtention de métriques de performance réelles et vérifiées en environnement d'inférence direct : 82.38 ms par graphe (12.14 FPS)."
    },
    {
        id: "plegma-nilm",
        title: "Deep Learning for Non-Intrusive Load Monitoring (NILM)",
        subtitle: "Smart Energy Monitoring",
        category: "Energy Systems / AI",
        shortDesc: "Désagrégation de consommation électrique par apprentissage profond à partir du dataset industriel Plegma.",
        techs: ["PyTorch", "ONNX", "Python", "NumPy", "Energy Data Analysis"],
        metrics: "Train Set: 332 765 x 128 | Binaire Classification",
        pipeline: "Raw Power Data (128 Window) → Normalization → Deep CNN → ONNX Export",
        problem: "Identifier l'état de fonctionnement d'équipements électriques spécifiques à partir d'un signal de consommation globale sans capteurs intrusifs.",
        objective: "Entraîner et optimiser un modèle Deep CNN compact sur des fenêtres temporelles (longueur 128) issues du jeu de données Plegma.",
        approach: "Prétraitement des fichiers .npz, structuration des jeux d'apprentissage (332k+ échantillons) et exportation au format ONNX pour préparation embarquée.",
        challenges: "Gestion du bruit dans les données temporelles, équilibrage des données et optimisation de la taille du modèle pour l'embarqué.",
        results: "Modèle compact exporté sous plusieurs variantes ONNX (nilm_cnn_best.pt, nilm_ac1_model.onnx), prêt pour l'intégration Edge."
    },
    {
        id: "nilm-npu",
        title: "Deployment of NILM Network on TH1520 NPU",
        subtitle: "Edge AI Acceleration Proof-of-Concept",
        category: "Hardware Acceleration",
        shortDesc: "Inférence matérielle accélérée du modèle NILM sur le NPU de la plateforme BeagleV-Ahead.",
        techs: ["NPU", "TH1520", "VHA Drivers", "libshl_th1520", "HHB", "PyTorch to NPU"],
        metrics: "NPU Graph Time = 12.73 ms | FPS = 78.53",
        pipeline: "PyTorch NILM → ONNX Simplifier → HHB NPU Binary → VHA Driver (/dev/vha0) → NPU Execution",
        problem: "Transférer un modèle de surveillance énergétique de l'environnement Cloud/PC vers un NPU embarqué à haute efficacité.",
        objective: "Valider le gain d'inférence (FPS) sur le NPU via l'interface `/dev/vha0` et les bibliothèques `libimgdnn` et `libshl_th1520`.",
        approach: "Compilation du modèle avec HHB pour cibler l'architecture NPU. Analyse du runtime et capture des métriques d'exécution.",
        challenges: "Gestion d'un avertissement runtime d'alignement mémoire (Wrong Memory Alignment - 128 bytes) identifié pendant les tests.",
        results: "Accélération réussie passant à 78.53 FPS (12.73 ms execution time). Identification précise des axes d'optimisation mémoire requis."
    },
    {
        id: "energy-forecast",
        title: "Exploration: Short-Term Energy Consumption Forecasting",
        subtitle: "Research & Literature Review",
        category: "Research / Smart Grid",
        shortDesc: "Étude des architectures CNN et PINNs (Physics-Informed Neural Networks) pour la prévision de charge énergétique.",
        techs: ["Deep Learning", "CNNs", "PINNs", "Time Series", "Physics-Informed AI"],
        metrics: "Exploratory Proof-of-Concept",
        pipeline: "Time Series Data → Feature Extraction → Temporal CNN / PINN Architecture",
        problem: "Anticiper la demande énergétique à court terme pour améliorer la gestion des microgrids et l'intégration des énergies renouvelables.",
        objective: "Explorer l'apport théorique et pratique des architectures hybrides intégrant des contraintes physiques (PINN) à la prévision de consommation.",
        approach: "Revue de la littérature scientifique, modélisation préliminaire et évaluation des méthodes de prévision infra-horaire et journalière.",
        challenges: "Modélisation de la variabilité dynamique des charges et sélection des hyperparamètres optimaux.",
        results: "Base conceptuelle et chaîne d'expérimentation documentée pour l'intégration future dans des contrôleurs embarqués de microgrids."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('projects-container');
    
    // Inject Projects
    projectsData.forEach(p => {
        const card = document.createElement('div');
        card.className = "bg-card border border-glass rounded-xl p-6 flex flex-col justify-between hover:border-accent transition cursor-pointer";
        card.onclick = () => openModal(p.id);
        card.innerHTML = `
            <div>
                <span class="text-xs font-semibold text-accent uppercase tracking-wider">${p.category}</span>
                <h3 class="text-xl font-bold mt-1 mb-2">${p.title}</h3>
                <p class="text-xs text-muted mb-4">${p.subtitle}</p>
                <p class="text-sm text-muted mb-4">${p.shortDesc}</p>
                <div class="bg-card-dark p-3 rounded-lg text-xs font-mono text-accent mb-4 border border-glass">
                    <i class="fa-solid fa-gauge-high mr-2"></i>${p.metrics}
                </div>
            </div>
            <div>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${p.techs.map(t => `<span class="bg-accent-soft text-accent text-xs px-2 py-1 rounded">${t}</span>`).join('')}
                </div>
                <button class="btn-secondary text-xs w-full justify-center">Détails de l'Ingénierie &rarr;</button>
            </div>
        `;
        container.appendChild(card);
    });

    // Modal Logic
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('close-modal');
    closeBtn.onclick = () => modal.classList.add('hidden');
    window.onclick = (e) => { if (e.target === modal) modal.classList.add('hidden'); };
});

function openModal(id) {
    const p = projectsData.find(item => item.id === id);
    if (!p) return;
    
    const content = document.getElementById('modal-content');
    content.innerHTML = `
        <span class="text-xs font-semibold text-accent uppercase tracking-wider">${p.category}</span>
        <h2 class="text-2xl font-extrabold mt-1 mb-2">${p.title}</h2>
        <p class="text-sm text-muted mb-6">${p.subtitle}</p>

        <div class="bg-card-dark p-4 rounded-xl mb-6 font-mono text-xs border border-glass">
            <span class="text-accent block font-bold mb-1">// Workflow / Deployment Pipeline:</span>
            ${p.pipeline}
        </div>

        <div class="space-y-4 text-sm leading-relaxed">
            <div>
                <h4 class="font-bold text-accent">Problématique :</h4>
                <p class="text-muted">${p.problem}</p>
            </div>
            <div>
                <h4 class="font-bold text-accent">Objectif Ingénieur :</h4>
                <p class="text-muted">${p.objective}</p>
            </div>
            <div>
                <h4 class="font-bold text-accent">Approche Technique :</h4>
                <p class="text-muted">${p.approach}</p>
            </div>
            <div>
                <h4 class="font-bold text-accent">Défis & Debugging (Engineering Lessons) :</h4>
                <p class="text-muted">${p.challenges}</p>
            </div>
            <div>
                <h4 class="font-bold text-accent">Résultats & Métriques Relevées :</h4>
                <p class="text-muted font-semibold">${p.results}</p>
            </div>
        </div>
    `;
    document.getElementById('project-modal').classList.remove('hidden');
}

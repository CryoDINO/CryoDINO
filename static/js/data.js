const paper = {
  metadata: {
    title:
      "CryoDINO: A generalizable 3D foundation model for Cryo-electron tomography",
    description: "This is a description",
    keywords: ["This", "Is", "A", "Keyword"],
  },
  // navbar: {
  //   home_link: "https://example.com",
  //   more_research: [
  //     {
  //       name: "Research 1",
  //       link: "https://example.com/research-1",
  //     },
  //     {
  //       name: "Research 2",
  //       link: "https://example.com/research-2",
  //     },
  //   ],
  // },
  authors: [
    {
      name: "Ahmadreza Attarpour",
      affiliation: { number: "1,2" },
      equal_contribution: true,
    },
    {
      name: "Sumin Kim",
      affiliation: { number: "1,2,3" },
      equal_contribution: true,
    },
    {
      name: "Jun Ma",
      affiliation: { number: "1,2,3" },
    },
    {
      name: "Tony Xu",
      affiliation: { number: "4" },
    },
    {
      name: "Yeonwoo Seo",
      affiliation: { number: "8" },
    },
    {
      name: "Baidu Li",
      affiliation: { number: "2" },
    },
    {
      name: "Maged Goubran",
      affiliation: { number: "4,5,6,7" },
    },
    {
      name: "Bo Wang",
      affiliation: { number: "1,2,3" },
    },
  ],
  affiliations: [
    {
      number: "1",
      name: "Department of Computer Science, University of Toronto, Toronto, Canada",
    },
    {
      number: "2",
      name: "Peter Munk Cardiac Centre, University Health Network, Toronto, Canada",
    },
    { number: "3", name: "Vector Institute, Toronto, Canada" },
    {
      number: "4",
      name: "Department of Medical Biophysics, University of Toronto, Toronto, Canada",
    },
    {
      number: "5",
      name: "Physical Sciences Platform, Sunnybrook Research Institute, Toronto, Canada",
    },
    {
      number: "6",
      name: "Hurvitz Brain Sciences, Sunnybrook Health Sciences Centre, Toronto, Canada",
    },
    {
      number: "7",
      name: "Centre for Neuromodulation, Sunnybrook Health Sciences Centre, Toronto, Canada",
    },
    {
      number: "8",
      name: "Department of Computer Science and Engineering, Korea University, Seoul, South Korea",
    },
  ],
  link_items: [
    // {
    //   name: "Paper",
    //   link: "https://example.com/paper.pdf",
    //   icon: "fas fa-file-pdf",
    // },
    // {
    //   name: "Arxiv",
    //   link: "https://arxiv.org/abs/xxx",
    //   icon: "ai ai-arxiv",
    // },
    // {
    //   name: "Video",
    //   link: "https://youtube.com/xxx",
    //   icon: "fab fa-youtube",
    // },
    // {
    //   name: "Code",
    //   link: "https://github.com/xxx",
    //   icon: "fab fa-github",
    // },
    // {
    //   name: "Dataset",
    //   link: "https://example.com/dataset",
    //   icon: "fa-solid fa-database",
    // },
  ],
  content: {
    intros: [
      // { type: "abstract", title: "Abstract", text: "This is the abstract of the paper." },
      // { type: "contributions", title: "Key Contributions", items: ["First key contribution", "Second key contribution"] },
    ],
    sections: [
      {
        title: "From Raw Tomogram to a Universal 3D Cryo-ET Foundation Model",
        image: "./static/images/demo-fig1-min.png",
        image_name: "Figure 1 — Pipeline",
        text: "Starting from raw tomograms spanning diverse species, resolutions, and imaging protocols, we extract over 360,000 volumetric 3D patches and apply a self-supervised 3DINO framework — jointly optimizing image-level and patch-level objectives through teacher–student learning. The result is a ViT-Large foundation model that generalizes across downstream tasks by simply attaching a decoder — with minimal data with label.",
      },
      {
        title: "CryoDINO Sees What Matters — Without Ever Seeing a Label",
        image: "./static/images/demo-fig2-min.png",
        image_name: "Figure 2 — PCA & Attention Maps",
        text: "Visualizing the internal representations of CryoDINO reveals strikingly structured feature spaces. PCA projections of patch tokens cleanly separate biologically distinct regions — cytoplasm, membrane, and organelles — across all three anatomical planes (axial, coronal, sagittal). Self-attention heads further confirm that the model spontaneously learns to focus on biologically meaningful structures, despite never receiving a single segmentation label during pretraining. These emergent representations are the foundation of CryoDINO's strong downstream transfer.",
      },
      {
        title: "Outperforming a Fully Supervised Expert — With Half the Labels",
        image: "./static/images/demo-fig3-min.jpg",
        image_name: "Figure 3 — Radar Charts",
        text: "Across three challenging benchmarks (CZII-10001, CZII-10010, EMPIAR-10989) and diverse subcellular targets — organelles, cytoplasm, actin filaments, and membranes — CryoDINO with a frozen encoder trained on just 50% of labeled data (only for 100 epochs) closely rivals or outperform nnU-Net trained on 100% of labels under its full supervised protocol with deep supervision and test-time postprocessing, and 1000 epochs training . With 100% of labels, CryoDINO surpasses nnU-Net on every axis. This demonstrates that self-supervised pretraining on unlabeled cryo-ET volumes captures representations powerful enough to reduce annotation burden by half without sacrificing accuracy.",
      },
    ],
    // conclusion: ["First paragraph...", "Second paragraph..."],
  },
  bibtex: `@article{xxx,
    author    = {xxx},
    title     = {xxx},
    journal   = {xxx},
    year      = {xxx},
  }`,
};

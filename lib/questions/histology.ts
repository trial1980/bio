import { Chapter, Question } from '../types';

export const HISTOLOGY_CHAPTERS: Chapter[] = [
  {
    "id": "hist-01",
    "number": 1,
    "subject": "Histology",
    "title": "Cytology & Microscopy (Cell Membrane, Organelles, Cytoskeleton & Nucleus)",
    "shortTitle": "Cytology & Organelles",
    "description": "TEM/LM resolution & special stains (PAS, silver, iron hematoxylin), trilaminar plasmalemma & glycocalyx, membranous organelles (rER, sER, Golgi, lysosomes, peroxisomes, mitochondria), cytoskeleton (microtubules, cilia, centrioles, actin, intermediate filaments), and nuclear chromatin/nucleolus.",
    "category": "Cell Biology & Microscopy",
    "pdfSource": "histology",
    "startPage": 2,
    "endPage": 9,
    "totalPdfQuestions": 85
  },
  {
    "id": "hist-02",
    "number": 2,
    "subject": "Histology",
    "title": "Epithelial Tissue, Cell Junctions & Glands",
    "shortTitle": "Epithelial Tissue",
    "description": "Simple, pseudostratified, stratified & transitional (urothelium) epithelia, apical modifications (microvilli, stereocilia, motile 9+2 cilia), junctional complexes (zonula occludens, zonula adherens, desmosomes, hemidesmosomes, gap junctions), type IV collagen basal lamina, and exocrine/endocrine secretion modes (merocrine, apocrine, holocrine).",
    "category": "Basic Tissues",
    "pdfSource": "histology",
    "startPage": 10,
    "endPage": 17,
    "totalPdfQuestions": 72
  },
  {
    "id": "hist-03",
    "number": 3,
    "subject": "Histology",
    "title": "Connective Tissue (Cells, Fibers, C.T. Proper & Adipose Tissue)",
    "shortTitle": "Connective Tissue",
    "description": "Mesenchymal origin, fixed & free C.T. cells (fibroblasts, pericytes, macrophages/histiocytes, mast cells, plasma cells, unilocular white vs multilocular brown adipocytes), collagen types I/III/IV, reticular & elastic fibers, special stains (Mallory, Van Gieson, Orcein, Silver, Sudan III), and C.T. proper types (loose areolar, mucoid Wharton's jelly, dense regular/irregular, yellow elastic, reticular).",
    "category": "Basic Tissues",
    "pdfSource": "histology",
    "startPage": 18,
    "endPage": 23,
    "totalPdfQuestions": 63
  },
  {
    "id": "hist-04",
    "number": 4,
    "subject": "Histology",
    "title": "Blood & Hematopoiesis (RBCs, Leukocytes, Platelets & Bone Marrow)",
    "shortTitle": "Blood & Leukocytes",
    "description": "Erythrocyte biconcave adaptations, spectrin cytoskeleton, rouleaux & reticulocytes (supravital stain), granulocytes (neutrophils, eosinophils with internum/major basic protein, basophils with IgE receptors), agranulocytes (T/B/NK lymphocytes, CD4/CD8/CD16 markers, monocytes with frosted-glass appearance), megakaryocyte demarcation channels, and platelet hyalomere/granulomere.",
    "category": "Blood & Immunity",
    "pdfSource": "histology",
    "startPage": 24,
    "endPage": 29,
    "totalPdfQuestions": 65
  }
];

export const HISTOLOGY_QUESTIONS: Question[] = [
  {
    "id": "hist-01-q1",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 1,
    "stem": "The electron microscopic picture of cell membrane",
    "options": [
      {
        "key": "a",
        "text": "Two-unit membranes separated by space."
      },
      {
        "key": "b",
        "text": "3-10 flat curved membranes."
      },
      {
        "key": "c",
        "text": "Two dark lines separated by clear one."
      },
      {
        "key": "d",
        "text": "Two subunits small and large."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 2)",
    "explanation": "Official Answer: (C) — Two dark lines separated by clear one. The cell membrane (plasmalemma) measures 7.5–10 nm in thickness and appears by TEM as a trilaminar structure (two electron-dense dark lines separated by a central electron-lucent clear zone, known as the unit membrane). Integral proteins are embedded within or span across the phospholipid bilayer, whereas the external cell coat (glycocalyx) consists of glycolipids and glycoproteins stained by PAS and silver stains.",
    "pdfSource": "histology",
    "pdfPage": 2
  },
  {
    "id": "hist-01-q2",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 2,
    "stem": "Protein components of the cell membrane is",
    "options": [
      {
        "key": "a",
        "text": "Peripheral present inside the lipid bilayer."
      },
      {
        "key": "b",
        "text": "Peripheral small continuous molecules outside the lipid bilayer."
      },
      {
        "key": "c",
        "text": "Integral present outside the lipid bilayer."
      },
      {
        "key": "d",
        "text": "Integral may cross the lipid bilayer."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 2)",
    "explanation": "Official Answer: (D) — Integral may cross the lipid bilayer. The cell membrane (plasmalemma) measures 7.5–10 nm in thickness and appears by TEM as a trilaminar structure (two electron-dense dark lines separated by a central electron-lucent clear zone, known as the unit membrane). Integral proteins are embedded within or span across the phospholipid bilayer, whereas the external cell coat (glycocalyx) consists of glycolipids and glycoproteins stained by PAS and silver stains.",
    "pdfSource": "histology",
    "pdfPage": 2
  },
  {
    "id": "hist-01-q3",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 3,
    "stem": "Glycocalyx is formed of",
    "options": [
      {
        "key": "a",
        "text": "Molecules of lipoproteins and glycoproteins."
      },
      {
        "key": "b",
        "text": "Molecules of glycolipids and glycoproteins."
      },
      {
        "key": "c",
        "text": "Molecules of proteoglycans and glycoproteins."
      },
      {
        "key": "d",
        "text": "Molecules of phospholipids and cholesterol."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 2)",
    "explanation": "Official Answer: (B) — Molecules of glycolipids and glycoproteins. The cell membrane (plasmalemma) measures 7.5–10 nm in thickness and appears by TEM as a trilaminar structure (two electron-dense dark lines separated by a central electron-lucent clear zone, known as the unit membrane). Integral proteins are embedded within or span across the phospholipid bilayer, whereas the external cell coat (glycocalyx) consists of glycolipids and glycoproteins stained by PAS and silver stains.",
    "pdfSource": "histology",
    "pdfPage": 2
  },
  {
    "id": "hist-01-q4",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 4,
    "stem": "What is the limiting membrane of a cell?",
    "options": [
      {
        "key": "a",
        "text": "Plasmalemma."
      },
      {
        "key": "b",
        "text": "Glycocalyx."
      },
      {
        "key": "c",
        "text": "Protoplasm."
      },
      {
        "key": "d",
        "text": "Cristae."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 2)",
    "explanation": "Official Answer: (A) — Plasmalemma. The cell membrane (plasmalemma) measures 7.5–10 nm in thickness and appears by TEM as a trilaminar structure (two electron-dense dark lines separated by a central electron-lucent clear zone, known as the unit membrane). Integral proteins are embedded within or span across the phospholipid bilayer, whereas the external cell coat (glycocalyx) consists of glycolipids and glycoproteins stained by PAS and silver stains.",
    "pdfSource": "histology",
    "pdfPage": 2
  },
  {
    "id": "hist-01-q5",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 5,
    "stem": "The following stains can be used to stain the cell membrane",
    "options": [
      {
        "key": "a",
        "text": "Silver stain."
      },
      {
        "key": "b",
        "text": "Trichrome stains."
      },
      {
        "key": "c",
        "text": "Orcein stain."
      },
      {
        "key": "d",
        "text": "Indian ink."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 2)",
    "explanation": "Official Answer: (A) — Silver stain. The cell membrane (plasmalemma) measures 7.5–10 nm in thickness and appears by TEM as a trilaminar structure (two electron-dense dark lines separated by a central electron-lucent clear zone, known as the unit membrane). Integral proteins are embedded within or span across the phospholipid bilayer, whereas the external cell coat (glycocalyx) consists of glycolipids and glycoproteins stained by PAS and silver stains. The resolving power of the transmission electron microscope (TEM) is approximately 0.2 nm (compared to 0.2 micrometers for light microscopy). 1 micrometer equals 1,000 nm (so 0.4 micrometers = 400 nm). Iron hematoxylin stains mitochondria and centrioles dark black; PAS stains carbohydrates (glycogen, glycocalyx/cell membrane, basement membrane); silver stains the Golgi apparatus, reticular fibers, and cell membrane.",
    "pdfSource": "histology",
    "pdfPage": 2
  },
  {
    "id": "hist-01-q6",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 6,
    "stem": "As regard the ribosomes one of the following is correct:",
    "options": [
      {
        "key": "a",
        "text": "The rRNA is formed in the pars granulosa & combined with the protein formed in the cytoplasm."
      },
      {
        "key": "b",
        "text": "The rRNA is formed in the nucleolus & combined with the protein formed in the nucleus."
      },
      {
        "key": "c",
        "text": "The rRNA is formed in the nucleolus & combined with the protein formed in the nucleolus."
      },
      {
        "key": "d",
        "text": "The rRNA is formed in the pars amorpha & combined with the protein formed in the cytoplasm."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 2)",
    "explanation": "Official Answer: (A) — The rRNA is formed in the pars granulosa & combined with the protein formed in the cytoplasm. Ribosomal RNA (rRNA) is transcribed from the nucleolar organizer (DNA) in the nucleolus and assembled with proteins synthesized in the cytoplasm to form small and large ribosomal subunits, which exit via nuclear pores. Ribosomes attach to rER membranes via ribophorin receptors and confer cytoplasmic basophilia due to their phosphate-rich rRNA.",
    "pdfSource": "histology",
    "pdfPage": 2
  },
  {
    "id": "hist-01-q7",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 7,
    "stem": "The muscle cells could contain all the following filaments except:",
    "options": [
      {
        "key": "a",
        "text": "Actin."
      },
      {
        "key": "b",
        "text": "Vimentin."
      },
      {
        "key": "c",
        "text": "Keratin."
      },
      {
        "key": "d",
        "text": "Desmin."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 2)",
    "explanation": "Official Answer: (C) — Keratin. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules).",
    "pdfSource": "histology",
    "pdfPage": 2
  },
  {
    "id": "hist-01-q8",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 8,
    "stem": "As regard the microtubules one of the following is incorrect:",
    "options": [
      {
        "key": "a",
        "text": "They are formed of tubulin protein by polymerizations."
      },
      {
        "key": "b",
        "text": "They arise from the microtubular organizing center."
      },
      {
        "key": "c",
        "text": "They have unfixed length."
      },
      {
        "key": "d",
        "text": "They share in the formation of centrioles, cilia, microvilli and flagella."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 2)",
    "explanation": "Official Answer: (D) — They share in the formation of centrioles, cilia, microvilli and flagella. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules).",
    "pdfSource": "histology",
    "pdfPage": 2
  },
  {
    "id": "hist-01-q9",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 9,
    "stem": "As regard the microvilli one of the following is correct:",
    "options": [
      {
        "key": "a",
        "text": "They are formed of core of microtubules covered with cell membrane."
      },
      {
        "key": "b",
        "text": "They are formed of core microtubules & not covered with cell membrane."
      },
      {
        "key": "c",
        "text": "They are formed of core of microfilaments covered with cell membrane."
      },
      {
        "key": "d",
        "text": "They are formed of core of actin filaments & not covered with cell membrane."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 2)",
    "explanation": "Official Answer: (C) — They are formed of core of microfilaments covered with cell membrane. The cell membrane (plasmalemma) measures 7.5–10 nm in thickness and appears by TEM as a trilaminar structure (two electron-dense dark lines separated by a central electron-lucent clear zone, known as the unit membrane). Integral proteins are embedded within or span across the phospholipid bilayer, whereas the external cell coat (glycocalyx) consists of glycolipids and glycoproteins stained by PAS and silver stains. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules).",
    "pdfSource": "histology",
    "pdfPage": 2
  },
  {
    "id": "hist-01-q10",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 10,
    "stem": "In dwarfism the following could be the cause except:",
    "options": [
      {
        "key": "a",
        "text": "Defect in the formation of the glycoprotein growth hormone in the rER."
      },
      {
        "key": "b",
        "text": "Defect in the formation of the glycoprotein growth hormone in the sER."
      },
      {
        "key": "c",
        "text": "Decreased amount of the secreted growth hormone."
      },
      {
        "key": "d",
        "text": "Defect in the growth hormone’ receptors on the target cells."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 3)",
    "explanation": "Official Answer: (B) — Defect in the formation of the glycoprotein growth hormone in the sER. The rough endoplasmic reticulum (rER) consists of interconnected flattened cisternae specialized for synthesizing proteins for export, initial glycosylation, and budding transfer vesicles from its tubules toward the cis face of the Golgi. The smooth endoplasmic reticulum (sER) forms anastomosing tubules responsible for lipid/steroid synthesis, glycogen metabolism, drug detoxification, and Ca2+ storage.",
    "pdfSource": "histology",
    "pdfPage": 3
  },
  {
    "id": "hist-01-q11",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 11,
    "stem": "In glycogen storage diseases the cause could be:",
    "options": [
      {
        "key": "a",
        "text": "Defect in the rER."
      },
      {
        "key": "b",
        "text": "Defect in the sER."
      },
      {
        "key": "c",
        "text": "Defect in the lysosomes."
      },
      {
        "key": "d",
        "text": "Defect in the peroxisomes."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 3)",
    "explanation": "Official Answer: (B) — Defect in the sER. The rough endoplasmic reticulum (rER) consists of interconnected flattened cisternae specialized for synthesizing proteins for export, initial glycosylation, and budding transfer vesicles from its tubules toward the cis face of the Golgi. The smooth endoplasmic reticulum (sER) forms anastomosing tubules responsible for lipid/steroid synthesis, glycogen metabolism, drug detoxification, and Ca2+ storage.",
    "pdfSource": "histology",
    "pdfPage": 3
  },
  {
    "id": "hist-01-q12",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 12,
    "stem": "All of the following organelles could share in the formation of a protein hormone except:",
    "options": [
      {
        "key": "a",
        "text": "Rough endoplasmic reticulum."
      },
      {
        "key": "b",
        "text": "Golgi apparatus."
      },
      {
        "key": "c",
        "text": "Mitochondria."
      },
      {
        "key": "d",
        "text": "Smooth endoplasmic reticulum."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 3)",
    "explanation": "Official Answer: (D) — Smooth endoplasmic reticulum. The rough endoplasmic reticulum (rER) consists of interconnected flattened cisternae specialized for synthesizing proteins for export, initial glycosylation, and budding transfer vesicles from its tubules toward the cis face of the Golgi. The smooth endoplasmic reticulum (sER) forms anastomosing tubules responsible for lipid/steroid synthesis, glycogen metabolism, drug detoxification, and Ca2+ storage.",
    "pdfSource": "histology",
    "pdfPage": 3
  },
  {
    "id": "hist-01-q13",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 13,
    "stem": "One of the following is correct as regard the inner nuclear membrane; it is linked to:",
    "options": [
      {
        "key": "a",
        "text": "Ribosomes."
      },
      {
        "key": "b",
        "text": "Myosin filaments."
      },
      {
        "key": "c",
        "text": "Lamins filaments."
      },
      {
        "key": "d",
        "text": "Euchromatin filaments."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 3)",
    "explanation": "Official Answer: (C) — Lamins filaments. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules). Euchromatin is extended, transcriptionally active chromatin that appears pale in LM and predominates in active protein-synthesizing cells (such as neurons/nerve cells, which have a large vesicular pale euchromatic nucleus and prominent nucleolus). Heterochromatin is condensed, inactive chromatin clumped at the nuclear periphery (associated with the inner nuclear membrane via lamins). Chromatin is basophilic due to the negatively charged phosphate groups of DNA.",
    "pdfSource": "histology",
    "pdfPage": 3
  },
  {
    "id": "hist-01-q14",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 14,
    "stem": "Which of the following is NOT a membranous organelle?",
    "options": [
      {
        "key": "a",
        "text": "Lysosomes."
      },
      {
        "key": "b",
        "text": "Peroxisomes."
      },
      {
        "key": "c",
        "text": "Mitochondria."
      },
      {
        "key": "d",
        "text": "Ribosomes."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 3)",
    "explanation": "Official Answer: (D) — Ribosomes. Ribosomal RNA (rRNA) is transcribed from the nucleolar organizer (DNA) in the nucleolus and assembled with proteins synthesized in the cytoplasm to form small and large ribosomal subunits, which exit via nuclear pores. Ribosomes attach to rER membranes via ribophorin receptors and confer cytoplasmic basophilia due to their phosphate-rich rRNA.",
    "pdfSource": "histology",
    "pdfPage": 3
  },
  {
    "id": "hist-01-q15",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 15,
    "stem": "Which organelle contains digestive enzymes?",
    "options": [
      {
        "key": "a",
        "text": "Rough endoplasmic reticulum."
      },
      {
        "key": "b",
        "text": "Smooth endoplasmic reticulum."
      },
      {
        "key": "c",
        "text": "Lysosome."
      },
      {
        "key": "d",
        "text": "Mitochondria."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 3)",
    "explanation": "Official Answer: (C) — Lysosome. Lysosomes are membranous organelles rich in acid hydrolytic enzymes (demonstrated histochemically via acid phosphatase). Primary lysosomes are homogeneous vesicles; fusion with a phagosome forms a heterolysosome, fusion with an autophagic vacuole forms an autolysosome, and fusion with pinocytic vesicles forms a multivesicular body. Indigestible material remains as residual bodies (lipofuscin). Receptor-mediated endocytosis uses clathrin-coated pits.",
    "pdfSource": "histology",
    "pdfPage": 3
  },
  {
    "id": "hist-01-q16",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 16,
    "stem": "What structure is at the base of cilia?",
    "options": [
      {
        "key": "a",
        "text": "Ribosomes."
      },
      {
        "key": "b",
        "text": "Peroxisome."
      },
      {
        "key": "c",
        "text": "Microfilaments."
      },
      {
        "key": "d",
        "text": "Centrioles."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 3)",
    "explanation": "Official Answer: (D) — Centrioles. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules).",
    "pdfSource": "histology",
    "pdfPage": 3
  },
  {
    "id": "hist-01-q17",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 17,
    "stem": "Which of the following is NOT considered an inclusion?",
    "options": [
      {
        "key": "a",
        "text": "Pigment."
      },
      {
        "key": "b",
        "text": "Glycogen."
      },
      {
        "key": "c",
        "text": "Lipid."
      },
      {
        "key": "d",
        "text": "Peroxisome."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 3)",
    "explanation": "Official Answer: (D) — Peroxisome. Peroxisomes (microbodies) are spherical membranous organelles containing oxidative enzymes (oxidases that generate H2O2 and catalase that breaks down H2O2 to water and oxygen) as well as beta-oxidation enzymes for long-chain fatty acids. Unlike lysosomal enzymes, peroxisomal enzymes are synthesized on free cytosolic ribosomes.",
    "pdfSource": "histology",
    "pdfPage": 3
  },
  {
    "id": "hist-01-q18",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 18,
    "stem": "How thick is the plasma membrane?",
    "options": [
      {
        "key": "a",
        "text": "7.5-10 angstroms."
      },
      {
        "key": "b",
        "text": "7.5-10 nanometers."
      },
      {
        "key": "c",
        "text": "7.5-10 micrometers."
      },
      {
        "key": "d",
        "text": "7.5-10 millimeters."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 3)",
    "explanation": "Official Answer: (B) — 7.5-10 nanometers. The cell membrane (plasmalemma) measures 7.5–10 nm in thickness and appears by TEM as a trilaminar structure (two electron-dense dark lines separated by a central electron-lucent clear zone, known as the unit membrane). Integral proteins are embedded within or span across the phospholipid bilayer, whereas the external cell coat (glycocalyx) consists of glycolipids and glycoproteins stained by PAS and silver stains.",
    "pdfSource": "histology",
    "pdfPage": 3
  },
  {
    "id": "hist-01-q19",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 19,
    "stem": "What is the term for the general process that cells use to extrude material from the cell?",
    "options": [
      {
        "key": "a",
        "text": "Endocytosis."
      },
      {
        "key": "b",
        "text": "Exocytosis."
      },
      {
        "key": "c",
        "text": "Pinocytosis."
      },
      {
        "key": "d",
        "text": "Phagocytosis."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 3)",
    "explanation": "Official Answer: (B) — Exocytosis. Lysosomes are membranous organelles rich in acid hydrolytic enzymes (demonstrated histochemically via acid phosphatase). Primary lysosomes are homogeneous vesicles; fusion with a phagosome forms a heterolysosome, fusion with an autophagic vacuole forms an autolysosome, and fusion with pinocytic vesicles forms a multivesicular body. Indigestible material remains as residual bodies (lipofuscin). Receptor-mediated endocytosis uses clathrin-coated pits.",
    "pdfSource": "histology",
    "pdfPage": 3
  },
  {
    "id": "hist-01-q20",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 20,
    "stem": "Which organelle stores, concentrates and packages proteins within a cell?",
    "options": [
      {
        "key": "a",
        "text": "Rough endoplasmic reticulum."
      },
      {
        "key": "b",
        "text": "Smooth endoplasmic reticulum."
      },
      {
        "key": "c",
        "text": "Lysosome."
      },
      {
        "key": "d",
        "text": "Golgi apparatus."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 4)",
    "explanation": "Official Answer: (D) — Golgi apparatus. The Golgi apparatus receives transfer vesicles from the rER at its convex cis (entry) face and buds off secretory vesicles and lysosomes from its concave trans (maturing) face. It concentrates, modifies, and packages proteins, renews the cell membrane, and appears as a pale unstained perinuclear area (negative Golgi image) in H&E-stained protein-secreting cells; it is demonstrated positively by silver stain.",
    "pdfSource": "histology",
    "pdfPage": 4
  },
  {
    "id": "hist-01-q21",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 21,
    "stem": "Which of the following is NOT a membranous organelle?",
    "options": [
      {
        "key": "a",
        "text": "Lysosomes."
      },
      {
        "key": "b",
        "text": "Filaments."
      },
      {
        "key": "c",
        "text": "Peroxisomes."
      },
      {
        "key": "d",
        "text": "Mitochondria."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 4)",
    "explanation": "Official Answer: (B) — Filaments. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules).",
    "pdfSource": "histology",
    "pdfPage": 4
  },
  {
    "id": "hist-01-q22",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 22,
    "stem": "What are the folds on the inner mitochondrial membrane called?",
    "options": [
      {
        "key": "a",
        "text": "Matrix."
      },
      {
        "key": "b",
        "text": "Saccules."
      },
      {
        "key": "c",
        "text": "Cisternae."
      },
      {
        "key": "d",
        "text": "Cristae."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 4)",
    "explanation": "Official Answer: (D) — Cristae. Mitochondria are double-membraned organelles containing their own circular DNA and ribosomes. The outer membrane is smooth and contains porins; the inner membrane folds into cristae studded with elementary particles (globular F1 heads carrying ATP synthetase activity), while the mitochondrial matrix houses Krebs (citric acid) cycle enzymes and calcium matrix granules.",
    "pdfSource": "histology",
    "pdfPage": 4
  },
  {
    "id": "hist-01-q23",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 23,
    "stem": "Which organelle is not involved in lipid metabolism?",
    "options": [
      {
        "key": "a",
        "text": "Rough endoplasmic reticulum."
      },
      {
        "key": "b",
        "text": "Smooth endoplasmic reticulum."
      },
      {
        "key": "c",
        "text": "Peroxisomes."
      },
      {
        "key": "d",
        "text": "Golgi apparatus."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 4)",
    "explanation": "Official Answer: (A) — Rough endoplasmic reticulum. The rough endoplasmic reticulum (rER) consists of interconnected flattened cisternae specialized for synthesizing proteins for export, initial glycosylation, and budding transfer vesicles from its tubules toward the cis face of the Golgi. The smooth endoplasmic reticulum (sER) forms anastomosing tubules responsible for lipid/steroid synthesis, glycogen metabolism, drug detoxification, and Ca2+ storage.",
    "pdfSource": "histology",
    "pdfPage": 4
  },
  {
    "id": "hist-01-q24",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 24,
    "stem": "Which organelle contains detoxifying enzymes?",
    "options": [
      {
        "key": "a",
        "text": "Ribosomes."
      },
      {
        "key": "b",
        "text": "Peroxisome."
      },
      {
        "key": "c",
        "text": "Microfilaments."
      },
      {
        "key": "d",
        "text": "Centrioles."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 4)",
    "explanation": "Official Answer: (B) — Peroxisome. Peroxisomes (microbodies) are spherical membranous organelles containing oxidative enzymes (oxidases that generate H2O2 and catalase that breaks down H2O2 to water and oxygen) as well as beta-oxidation enzymes for long-chain fatty acids. Unlike lysosomal enzymes, peroxisomal enzymes are synthesized on free cytosolic ribosomes.",
    "pdfSource": "histology",
    "pdfPage": 4
  },
  {
    "id": "hist-01-q25",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 25,
    "stem": "Which of the following is NOT a membranous organelle?",
    "options": [
      {
        "key": "a",
        "text": "Microtubules."
      },
      {
        "key": "b",
        "text": "Lysosomes."
      },
      {
        "key": "c",
        "text": "Peroxisomes."
      },
      {
        "key": "d",
        "text": "Mitochondria."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 4)",
    "explanation": "Official Answer: (A) — Microtubules. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules).",
    "pdfSource": "histology",
    "pdfPage": 4
  },
  {
    "id": "hist-01-q26",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 26,
    "stem": "What is the term for the general process that cells us to bring things into the cell?",
    "options": [
      {
        "key": "a",
        "text": "Endocytosis."
      },
      {
        "key": "b",
        "text": "Exocytosis."
      },
      {
        "key": "c",
        "text": "Receptor mediated endocytosis."
      },
      {
        "key": "d",
        "text": "Phagocytosis."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 4)",
    "explanation": "Official Answer: (A) — Endocytosis. Lysosomes are membranous organelles rich in acid hydrolytic enzymes (demonstrated histochemically via acid phosphatase). Primary lysosomes are homogeneous vesicles; fusion with a phagosome forms a heterolysosome, fusion with an autophagic vacuole forms an autolysosome, and fusion with pinocytic vesicles forms a multivesicular body. Indigestible material remains as residual bodies (lipofuscin). Receptor-mediated endocytosis uses clathrin-coated pits.",
    "pdfSource": "histology",
    "pdfPage": 4
  },
  {
    "id": "hist-01-q27",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 27,
    "stem": "Which organelle produces protein for export?",
    "options": [
      {
        "key": "a",
        "text": "Rough endoplasmic reticulum."
      },
      {
        "key": "b",
        "text": "Smooth endoplasmic reticulum."
      },
      {
        "key": "c",
        "text": "Lysosome."
      },
      {
        "key": "d",
        "text": "Ribosomes."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 4)",
    "explanation": "Official Answer: (A) — Rough endoplasmic reticulum. The rough endoplasmic reticulum (rER) consists of interconnected flattened cisternae specialized for synthesizing proteins for export, initial glycosylation, and budding transfer vesicles from its tubules toward the cis face of the Golgi. The smooth endoplasmic reticulum (sER) forms anastomosing tubules responsible for lipid/steroid synthesis, glycogen metabolism, drug detoxification, and Ca2+ storage.",
    "pdfSource": "histology",
    "pdfPage": 4
  },
  {
    "id": "hist-01-q28",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 28,
    "stem": "Where are ribosomal subunits constructed?",
    "options": [
      {
        "key": "a",
        "text": "Cytoplasm."
      },
      {
        "key": "b",
        "text": "Pars amorpha."
      },
      {
        "key": "c",
        "text": "Rough endoplasmic reticulum."
      },
      {
        "key": "d",
        "text": "Nucleolus."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 4)",
    "explanation": "Official Answer: (D) — Nucleolus. Ribosomal RNA (rRNA) is transcribed from the nucleolar organizer (DNA) in the nucleolus and assembled with proteins synthesized in the cytoplasm to form small and large ribosomal subunits, which exit via nuclear pores. Ribosomes attach to rER membranes via ribophorin receptors and confer cytoplasmic basophilia due to their phosphate-rich rRNA.",
    "pdfSource": "histology",
    "pdfPage": 4
  },
  {
    "id": "hist-01-q29",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 29,
    "stem": "What part of the cell is responsible for breaking down and digesting things?",
    "options": [
      {
        "key": "a",
        "text": "Ribosomes."
      },
      {
        "key": "b",
        "text": "Lysosomes."
      },
      {
        "key": "c",
        "text": "Endoplasmic reticulum."
      },
      {
        "key": "d",
        "text": "Vacuole."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 4)",
    "explanation": "Official Answer: (B) — Lysosomes. Lysosomes are membranous organelles rich in acid hydrolytic enzymes (demonstrated histochemically via acid phosphatase). Primary lysosomes are homogeneous vesicles; fusion with a phagosome forms a heterolysosome, fusion with an autophagic vacuole forms an autolysosome, and fusion with pinocytic vesicles forms a multivesicular body. Indigestible material remains as residual bodies (lipofuscin). Receptor-mediated endocytosis uses clathrin-coated pits.",
    "pdfSource": "histology",
    "pdfPage": 4
  },
  {
    "id": "hist-01-q30",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 30,
    "stem": "What part of the cell serves as the intracellular pass way?",
    "options": [
      {
        "key": "a",
        "text": "Endoplasmic reticulum."
      },
      {
        "key": "b",
        "text": "Golgi apparatus."
      },
      {
        "key": "c",
        "text": "Cell membrane."
      },
      {
        "key": "d",
        "text": "Mitochondria."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 4)",
    "explanation": "Official Answer: (A) — Endoplasmic reticulum. The rough endoplasmic reticulum (rER) consists of interconnected flattened cisternae specialized for synthesizing proteins for export, initial glycosylation, and budding transfer vesicles from its tubules toward the cis face of the Golgi. The smooth endoplasmic reticulum (sER) forms anastomosing tubules responsible for lipid/steroid synthesis, glycogen metabolism, drug detoxification, and Ca2+ storage. The resolving power of the transmission electron microscope (TEM) is approximately 0.2 nm (compared to 0.2 micrometers for light microscopy). 1 micrometer equals 1,000 nm (so 0.4 micrometers = 400 nm). Iron hematoxylin stains mitochondria and centrioles dark black; PAS stains carbohydrates (glycogen, glycocalyx/cell membrane, basement membrane); silver stains the Golgi apparatus, reticular fibers, and cell membrane.",
    "pdfSource": "histology",
    "pdfPage": 4
  },
  {
    "id": "hist-01-q31",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 31,
    "stem": "The jellylike interior of the cell is called the:",
    "options": [
      {
        "key": "a",
        "text": "Vacuole."
      },
      {
        "key": "b",
        "text": "Cytosol."
      },
      {
        "key": "c",
        "text": "Cytoskeleton."
      },
      {
        "key": "d",
        "text": "Nucleus."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 5)",
    "explanation": "Official Answer: (B) — Cytosol. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 5
  },
  {
    "id": "hist-01-q32",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 32,
    "stem": "What part of the cell makes proteins?",
    "options": [
      {
        "key": "a",
        "text": "Ribosomes."
      },
      {
        "key": "b",
        "text": "Mitochondria."
      },
      {
        "key": "c",
        "text": "Lysosomes."
      },
      {
        "key": "d",
        "text": "Vacuole."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 5)",
    "explanation": "Official Answer: (A) — Ribosomes. Ribosomal RNA (rRNA) is transcribed from the nucleolar organizer (DNA) in the nucleolus and assembled with proteins synthesized in the cytoplasm to form small and large ribosomal subunits, which exit via nuclear pores. Ribosomes attach to rER membranes via ribophorin receptors and confer cytoplasmic basophilia due to their phosphate-rich rRNA.",
    "pdfSource": "histology",
    "pdfPage": 5
  },
  {
    "id": "hist-01-q33",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 33,
    "stem": "The inner mitochondrial membrane are connected to globular structures that contain:",
    "options": [
      {
        "key": "a",
        "text": "Citric acid cycle enzymes."
      },
      {
        "key": "b",
        "text": "ATP synthetase."
      },
      {
        "key": "c",
        "text": "Reductase enzymes."
      },
      {
        "key": "d",
        "text": "Oxidoreductase enzymes."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 5)",
    "explanation": "Official Answer: (B) — ATP synthetase. Mitochondria are double-membraned organelles containing their own circular DNA and ribosomes. The outer membrane is smooth and contains porins; the inner membrane folds into cristae studded with elementary particles (globular F1 heads carrying ATP synthetase activity), while the mitochondrial matrix houses Krebs (citric acid) cycle enzymes and calcium matrix granules.",
    "pdfSource": "histology",
    "pdfPage": 5
  },
  {
    "id": "hist-01-q34",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 34,
    "stem": "Which statement is correct:",
    "options": [
      {
        "key": "a",
        "text": "Peroxisomes contain hydrolytic enzymes."
      },
      {
        "key": "b",
        "text": "Mitochondria contain oxidoreductase enzymes."
      },
      {
        "key": "c",
        "text": "Lysosomes contain oxidative enzymes."
      },
      {
        "key": "d",
        "text": "Microbodies contain catalase enzymes."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 5)",
    "explanation": "Official Answer: (D) — Microbodies contain catalase enzymes. Peroxisomes (microbodies) are spherical membranous organelles containing oxidative enzymes (oxidases that generate H2O2 and catalase that breaks down H2O2 to water and oxygen) as well as beta-oxidation enzymes for long-chain fatty acids. Unlike lysosomal enzymes, peroxisomal enzymes are synthesized on free cytosolic ribosomes. The resolving power of the transmission electron microscope (TEM) is approximately 0.2 nm (compared to 0.2 micrometers for light microscopy). 1 micrometer equals 1,000 nm (so 0.4 micrometers = 400 nm). Iron hematoxylin stains mitochondria and centrioles dark black; PAS stains carbohydrates (glycogen, glycocalyx/cell membrane, basement membrane); silver stains the Golgi apparatus, reticular fibers, and cell membrane.",
    "pdfSource": "histology",
    "pdfPage": 5
  },
  {
    "id": "hist-01-q35",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 35,
    "stem": "Both oxidases and catalase enzymes are present in:",
    "options": [
      {
        "key": "a",
        "text": "Mitochondria."
      },
      {
        "key": "b",
        "text": "Microtubules."
      },
      {
        "key": "c",
        "text": "Microbodies."
      },
      {
        "key": "d",
        "text": "Microfilaments."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 5)",
    "explanation": "Official Answer: (C) — Microbodies. Peroxisomes (microbodies) are spherical membranous organelles containing oxidative enzymes (oxidases that generate H2O2 and catalase that breaks down H2O2 to water and oxygen) as well as beta-oxidation enzymes for long-chain fatty acids. Unlike lysosomal enzymes, peroxisomal enzymes are synthesized on free cytosolic ribosomes.",
    "pdfSource": "histology",
    "pdfPage": 5
  },
  {
    "id": "hist-01-q36",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 36,
    "stem": "Which of the following statements is correct:",
    "options": [
      {
        "key": "a",
        "text": "Cell membrane thickness is 7.5-10 µm."
      },
      {
        "key": "b",
        "text": "Microtubules’ diameter is 24 mm."
      },
      {
        "key": "c",
        "text": "Microfilaments’ diameter is 5-7 nm."
      },
      {
        "key": "d",
        "text": "Microfilaments is 5-10 nm in length."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 5)",
    "explanation": "Official Answer: (C) — Microfilaments’ diameter is 5-7 nm. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules). The resolving power of the transmission electron microscope (TEM) is approximately 0.2 nm (compared to 0.2 micrometers for light microscopy). 1 micrometer equals 1,000 nm (so 0.4 micrometers = 400 nm). Iron hematoxylin stains mitochondria and centrioles dark black; PAS stains carbohydrates (glycogen, glycocalyx/cell membrane, basement membrane); silver stains the Golgi apparatus, reticular fibers, and cell membrane.",
    "pdfSource": "histology",
    "pdfPage": 5
  },
  {
    "id": "hist-01-q37",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 37,
    "stem": "Regarding primary lysosome, the following is true:",
    "options": [
      {
        "key": "a",
        "text": "Increase in protein forming cell."
      },
      {
        "key": "b",
        "text": "Can appear by histochemical test."
      },
      {
        "key": "c",
        "text": "Is heterogeneous by EM."
      },
      {
        "key": "d",
        "text": "Contain respiratory enzymes."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 5)",
    "explanation": "Official Answer: (B) — Can appear by histochemical test. Lysosomes are membranous organelles rich in acid hydrolytic enzymes (demonstrated histochemically via acid phosphatase). Primary lysosomes are homogeneous vesicles; fusion with a phagosome forms a heterolysosome, fusion with an autophagic vacuole forms an autolysosome, and fusion with pinocytic vesicles forms a multivesicular body. Indigestible material remains as residual bodies (lipofuscin). Receptor-mediated endocytosis uses clathrin-coated pits.",
    "pdfSource": "histology",
    "pdfPage": 5
  },
  {
    "id": "hist-01-q38",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 38,
    "stem": "The secretory vesicles arise from the:",
    "options": [
      {
        "key": "a",
        "text": "Tubules of rER."
      },
      {
        "key": "b",
        "text": "Cis face of the Golgi apparatus."
      },
      {
        "key": "c",
        "text": "Tubules of sER."
      },
      {
        "key": "d",
        "text": "Trans face of the Golgi apparatus."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 5)",
    "explanation": "Official Answer: (D) — Trans face of the Golgi apparatus. The Golgi apparatus receives transfer vesicles from the rER at its convex cis (entry) face and buds off secretory vesicles and lysosomes from its concave trans (maturing) face. It concentrates, modifies, and packages proteins, renews the cell membrane, and appears as a pale unstained perinuclear area (negative Golgi image) in H&E-stained protein-secreting cells; it is demonstrated positively by silver stain.",
    "pdfSource": "histology",
    "pdfPage": 5
  },
  {
    "id": "hist-01-q39",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 39,
    "stem": "Shaft of cilia contains:",
    "options": [
      {
        "key": "a",
        "text": "Peripheral 9 triplets+2 central singlets."
      },
      {
        "key": "b",
        "text": "Peripheral 9 doublets+2 central singlets."
      },
      {
        "key": "c",
        "text": "Peripheral 9 tubules+2 central singlets."
      },
      {
        "key": "d",
        "text": "Peripheral 9 triplets."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 5)",
    "explanation": "Official Answer: (B) — Peripheral 9 doublets+2 central singlets. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules).",
    "pdfSource": "histology",
    "pdfPage": 5
  },
  {
    "id": "hist-01-q40",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 40,
    "stem": "Basal body of cilia is similar to:",
    "options": [
      {
        "key": "a",
        "text": "Centriole."
      },
      {
        "key": "b",
        "text": "Centrosome."
      },
      {
        "key": "c",
        "text": "Centromere."
      },
      {
        "key": "d",
        "text": "Ribosome."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 5)",
    "explanation": "Official Answer: (A) — Centriole. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules).",
    "pdfSource": "histology",
    "pdfPage": 5
  },
  {
    "id": "hist-01-q41",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 41,
    "stem": "Euchromatic nucleus has the following except:",
    "options": [
      {
        "key": "a",
        "text": "Active."
      },
      {
        "key": "b",
        "text": "Pale."
      },
      {
        "key": "c",
        "text": "Condensed."
      },
      {
        "key": "d",
        "text": "Prominent nucleolus."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 5)",
    "explanation": "Official Answer: (C) — Condensed. Euchromatin is extended, transcriptionally active chromatin that appears pale in LM and predominates in active protein-synthesizing cells (such as neurons/nerve cells, which have a large vesicular pale euchromatic nucleus and prominent nucleolus). Heterochromatin is condensed, inactive chromatin clumped at the nuclear periphery (associated with the inner nuclear membrane via lamins). Chromatin is basophilic due to the negatively charged phosphate groups of DNA.",
    "pdfSource": "histology",
    "pdfPage": 5
  },
  {
    "id": "hist-01-q42",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 42,
    "stem": "Iron hematoxylin used to stain:",
    "options": [
      {
        "key": "a",
        "text": "Mitochondria and Golgi."
      },
      {
        "key": "b",
        "text": "Golgi and centriole."
      },
      {
        "key": "c",
        "text": "Mitochondria and centriole."
      },
      {
        "key": "d",
        "text": "Mitochondria and rough endoplasmic reticulum."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 6)",
    "explanation": "Official Answer: (C) — Mitochondria and centriole. Mitochondria are double-membraned organelles containing their own circular DNA and ribosomes. The outer membrane is smooth and contains porins; the inner membrane folds into cristae studded with elementary particles (globular F1 heads carrying ATP synthetase activity), while the mitochondrial matrix houses Krebs (citric acid) cycle enzymes and calcium matrix granules. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules). The resolving power of the transmission electron microscope (TEM) is approximately 0.2 nm (compared to 0.2 micrometers for light microscopy). 1 micrometer equals 1,000 nm (so 0.4 micrometers = 400 nm). Iron hematoxylin stains mitochondria and centrioles dark black; PAS stains carbohydrates (glycogen, glycocalyx/cell membrane, basement membrane); silver stains the Golgi apparatus, reticular fibers, and cell membrane.",
    "pdfSource": "histology",
    "pdfPage": 6
  },
  {
    "id": "hist-01-q43",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 43,
    "stem": "PAS stain is used to demonstrate all of the following except:",
    "options": [
      {
        "key": "a",
        "text": "Cell membrane."
      },
      {
        "key": "b",
        "text": "Glycogen."
      },
      {
        "key": "c",
        "text": "Fat."
      },
      {
        "key": "d",
        "text": "Basement membrane."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 6)",
    "explanation": "Official Answer: (C) — Fat. The resolving power of the transmission electron microscope (TEM) is approximately 0.2 nm (compared to 0.2 micrometers for light microscopy). 1 micrometer equals 1,000 nm (so 0.4 micrometers = 400 nm). Iron hematoxylin stains mitochondria and centrioles dark black; PAS stains carbohydrates (glycogen, glycocalyx/cell membrane, basement membrane); silver stains the Golgi apparatus, reticular fibers, and cell membrane.",
    "pdfSource": "histology",
    "pdfPage": 6
  },
  {
    "id": "hist-01-q44",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 44,
    "stem": "Silver stain is used to demonstrate:",
    "options": [
      {
        "key": "a",
        "text": "Golgi."
      },
      {
        "key": "b",
        "text": "Fat."
      },
      {
        "key": "c",
        "text": "Cell membrane."
      },
      {
        "key": "d",
        "text": "a and c."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 6)",
    "explanation": "Official Answer: (D) — a and c. The resolving power of the transmission electron microscope (TEM) is approximately 0.2 nm (compared to 0.2 micrometers for light microscopy). 1 micrometer equals 1,000 nm (so 0.4 micrometers = 400 nm). Iron hematoxylin stains mitochondria and centrioles dark black; PAS stains carbohydrates (glycogen, glycocalyx/cell membrane, basement membrane); silver stains the Golgi apparatus, reticular fibers, and cell membrane.",
    "pdfSource": "histology",
    "pdfPage": 6
  },
  {
    "id": "hist-01-q45",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 45,
    "stem": "Nucleolar organizer is:",
    "options": [
      {
        "key": "a",
        "text": "Pars fibrosa."
      },
      {
        "key": "b",
        "text": "Early formed rRNA."
      },
      {
        "key": "c",
        "text": "DNA."
      },
      {
        "key": "d",
        "text": "Granular form of RNA."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 6)",
    "explanation": "Official Answer: (C) — DNA. Ribosomal RNA (rRNA) is transcribed from the nucleolar organizer (DNA) in the nucleolus and assembled with proteins synthesized in the cytoplasm to form small and large ribosomal subunits, which exit via nuclear pores. Ribosomes attach to rER membranes via ribophorin receptors and confer cytoplasmic basophilia due to their phosphate-rich rRNA.",
    "pdfSource": "histology",
    "pdfPage": 6
  },
  {
    "id": "hist-01-q46",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 46,
    "stem": "Which of the following organelles share in lipid metabolism:",
    "options": [
      {
        "key": "a",
        "text": "Smooth endoplasmic reticulum."
      },
      {
        "key": "b",
        "text": "Ribosome."
      },
      {
        "key": "c",
        "text": "Peroxisome."
      },
      {
        "key": "d",
        "text": "a and c."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 6)",
    "explanation": "Official Answer: (D) — a and c. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 6
  },
  {
    "id": "hist-01-q47",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 47,
    "stem": "One of the following is NOT an intermediate filament:",
    "options": [
      {
        "key": "a",
        "text": "Lamins."
      },
      {
        "key": "b",
        "text": "Actin."
      },
      {
        "key": "c",
        "text": "Vimentin."
      },
      {
        "key": "d",
        "text": "Keratin."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 6)",
    "explanation": "Official Answer: (B) — Actin. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules).",
    "pdfSource": "histology",
    "pdfPage": 6
  },
  {
    "id": "hist-01-q48",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 48,
    "stem": "Secondary lysosomes include the following except:",
    "options": [
      {
        "key": "a",
        "text": "Multivesicular bodies."
      },
      {
        "key": "b",
        "text": "Heterolysosomes."
      },
      {
        "key": "c",
        "text": "Residual bodies."
      },
      {
        "key": "d",
        "text": "Autolysosome."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 6)",
    "explanation": "Official Answer: (C) — Residual bodies. Lysosomes are membranous organelles rich in acid hydrolytic enzymes (demonstrated histochemically via acid phosphatase). Primary lysosomes are homogeneous vesicles; fusion with a phagosome forms a heterolysosome, fusion with an autophagic vacuole forms an autolysosome, and fusion with pinocytic vesicles forms a multivesicular body. Indigestible material remains as residual bodies (lipofuscin). Receptor-mediated endocytosis uses clathrin-coated pits.",
    "pdfSource": "histology",
    "pdfPage": 6
  },
  {
    "id": "hist-01-q49",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 49,
    "stem": "What structure contributes to the cells cytoskeleton?",
    "options": [
      {
        "key": "a",
        "text": "Ribosomes."
      },
      {
        "key": "b",
        "text": "Peroxisome."
      },
      {
        "key": "c",
        "text": "Microfilaments."
      },
      {
        "key": "d",
        "text": "Centrioles."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 6)",
    "explanation": "Official Answer: (C) — Microfilaments. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules).",
    "pdfSource": "histology",
    "pdfPage": 6
  },
  {
    "id": "hist-01-q50",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 50,
    "stem": "Heterolysosome is formed of:",
    "options": [
      {
        "key": "a",
        "text": "Primary lysosome + pinocytic vesicle."
      },
      {
        "key": "b",
        "text": "Primary lysosome + phagosome."
      },
      {
        "key": "c",
        "text": "Primary lysosome + autophagic vesicle."
      },
      {
        "key": "d",
        "text": "Primary lysosome + Residual body."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 6)",
    "explanation": "Official Answer: (B) — Primary lysosome + phagosome. Lysosomes are membranous organelles rich in acid hydrolytic enzymes (demonstrated histochemically via acid phosphatase). Primary lysosomes are homogeneous vesicles; fusion with a phagosome forms a heterolysosome, fusion with an autophagic vacuole forms an autolysosome, and fusion with pinocytic vesicles forms a multivesicular body. Indigestible material remains as residual bodies (lipofuscin). Receptor-mediated endocytosis uses clathrin-coated pits.",
    "pdfSource": "histology",
    "pdfPage": 6
  },
  {
    "id": "hist-01-q51",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 51,
    "stem": "The nucleus of protein forming cell shows all the following except:",
    "options": [
      {
        "key": "a",
        "text": "More euchromatin by EM."
      },
      {
        "key": "b",
        "text": "More heterochromatin by EM."
      },
      {
        "key": "c",
        "text": "Clear nucleolus."
      },
      {
        "key": "d",
        "text": "Pale by LM."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 6)",
    "explanation": "Official Answer: (B) — More heterochromatin by EM. Euchromatin is extended, transcriptionally active chromatin that appears pale in LM and predominates in active protein-synthesizing cells (such as neurons/nerve cells, which have a large vesicular pale euchromatic nucleus and prominent nucleolus). Heterochromatin is condensed, inactive chromatin clumped at the nuclear periphery (associated with the inner nuclear membrane via lamins). Chromatin is basophilic due to the negatively charged phosphate groups of DNA.",
    "pdfSource": "histology",
    "pdfPage": 6
  },
  {
    "id": "hist-01-q52",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 52,
    "stem": "Regarding the cell membrane, the following is true:",
    "options": [
      {
        "key": "a",
        "text": "Clearly appears by LM."
      },
      {
        "key": "b",
        "text": "Its main function is cell respiration."
      },
      {
        "key": "c",
        "text": "Can be stained by H & E."
      },
      {
        "key": "d",
        "text": "Appear by EM as triple layers."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 6)",
    "explanation": "Official Answer: (D) — Appear by EM as triple layers. The cell membrane (plasmalemma) measures 7.5–10 nm in thickness and appears by TEM as a trilaminar structure (two electron-dense dark lines separated by a central electron-lucent clear zone, known as the unit membrane). Integral proteins are embedded within or span across the phospholipid bilayer, whereas the external cell coat (glycocalyx) consists of glycolipids and glycoproteins stained by PAS and silver stains.",
    "pdfSource": "histology",
    "pdfPage": 6
  },
  {
    "id": "hist-01-q53",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 53,
    "stem": "All of the following are membranous organelles except:",
    "options": [
      {
        "key": "a",
        "text": "Cell membrane."
      },
      {
        "key": "b",
        "text": "Rough endoplasmic reticulum."
      },
      {
        "key": "c",
        "text": "Centriole."
      },
      {
        "key": "d",
        "text": "Lysosome."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 7)",
    "explanation": "Official Answer: (C) — Centriole. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules).",
    "pdfSource": "histology",
    "pdfPage": 7
  },
  {
    "id": "hist-01-q54",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 54,
    "stem": "The most predominant organelle in lipid producing cell is:",
    "options": [
      {
        "key": "a",
        "text": "Golgi complex."
      },
      {
        "key": "b",
        "text": "sER."
      },
      {
        "key": "c",
        "text": "Lysosomes."
      },
      {
        "key": "d",
        "text": "rER."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 7)",
    "explanation": "Official Answer: (B) — sER. The rough endoplasmic reticulum (rER) consists of interconnected flattened cisternae specialized for synthesizing proteins for export, initial glycosylation, and budding transfer vesicles from its tubules toward the cis face of the Golgi. The smooth endoplasmic reticulum (sER) forms anastomosing tubules responsible for lipid/steroid synthesis, glycogen metabolism, drug detoxification, and Ca2+ storage.",
    "pdfSource": "histology",
    "pdfPage": 7
  },
  {
    "id": "hist-01-q55",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 55,
    "stem": "What process is nicknamed “cell eating”?",
    "options": [
      {
        "key": "a",
        "text": "Pinocytosis."
      },
      {
        "key": "b",
        "text": "Active transport."
      },
      {
        "key": "c",
        "text": "Endocytosis."
      },
      {
        "key": "d",
        "text": "Phagocytosis."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 7)",
    "explanation": "Official Answer: (D) — Phagocytosis. Lysosomes are membranous organelles rich in acid hydrolytic enzymes (demonstrated histochemically via acid phosphatase). Primary lysosomes are homogeneous vesicles; fusion with a phagosome forms a heterolysosome, fusion with an autophagic vacuole forms an autolysosome, and fusion with pinocytic vesicles forms a multivesicular body. Indigestible material remains as residual bodies (lipofuscin). Receptor-mediated endocytosis uses clathrin-coated pits.",
    "pdfSource": "histology",
    "pdfPage": 7
  },
  {
    "id": "hist-01-q56",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 56,
    "stem": "An organelle in the cytoplasm that has DNA is called:",
    "options": [
      {
        "key": "a",
        "text": "rER."
      },
      {
        "key": "b",
        "text": "Mitochondria."
      },
      {
        "key": "c",
        "text": "Lysosomes."
      },
      {
        "key": "d",
        "text": "Golgi apparatus."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 7)",
    "explanation": "Official Answer: (B) — Mitochondria. Mitochondria are double-membraned organelles containing their own circular DNA and ribosomes. The outer membrane is smooth and contains porins; the inner membrane folds into cristae studded with elementary particles (globular F1 heads carrying ATP synthetase activity), while the mitochondrial matrix houses Krebs (citric acid) cycle enzymes and calcium matrix granules.",
    "pdfSource": "histology",
    "pdfPage": 7
  },
  {
    "id": "hist-01-q57",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 57,
    "stem": "The transfer vesicles arise from the:",
    "options": [
      {
        "key": "a",
        "text": "Tubules of rER."
      },
      {
        "key": "b",
        "text": "Ribosomes."
      },
      {
        "key": "c",
        "text": "Golgi apparatus."
      },
      {
        "key": "d",
        "text": "Tubules of sER."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 7)",
    "explanation": "Official Answer: (A) — Tubules of rER. The rough endoplasmic reticulum (rER) consists of interconnected flattened cisternae specialized for synthesizing proteins for export, initial glycosylation, and budding transfer vesicles from its tubules toward the cis face of the Golgi. The smooth endoplasmic reticulum (sER) forms anastomosing tubules responsible for lipid/steroid synthesis, glycogen metabolism, drug detoxification, and Ca2+ storage.",
    "pdfSource": "histology",
    "pdfPage": 7
  },
  {
    "id": "hist-01-q58",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 58,
    "stem": "The cytoplasmic surface of the pit is coated by",
    "options": [
      {
        "key": "a",
        "text": "Vimentin."
      },
      {
        "key": "b",
        "text": "Keratin."
      },
      {
        "key": "c",
        "text": "Clathrin."
      },
      {
        "key": "d",
        "text": "Desmin."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 7)",
    "explanation": "Official Answer: (C) — Clathrin. Lysosomes are membranous organelles rich in acid hydrolytic enzymes (demonstrated histochemically via acid phosphatase). Primary lysosomes are homogeneous vesicles; fusion with a phagosome forms a heterolysosome, fusion with an autophagic vacuole forms an autolysosome, and fusion with pinocytic vesicles forms a multivesicular body. Indigestible material remains as residual bodies (lipofuscin). Receptor-mediated endocytosis uses clathrin-coated pits.",
    "pdfSource": "histology",
    "pdfPage": 7
  },
  {
    "id": "hist-01-q59",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 59,
    "stem": "Endoplasmic reticulum is formed of",
    "options": [
      {
        "key": "a",
        "text": "Flat curved membranous saccules."
      },
      {
        "key": "b",
        "text": "Continuous interconnected cisternae."
      },
      {
        "key": "c",
        "text": "Vesicles with two membranes."
      },
      {
        "key": "d",
        "text": "Granules with two subunits."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 7)",
    "explanation": "Official Answer: (B) — Continuous interconnected cisternae. The rough endoplasmic reticulum (rER) consists of interconnected flattened cisternae specialized for synthesizing proteins for export, initial glycosylation, and budding transfer vesicles from its tubules toward the cis face of the Golgi. The smooth endoplasmic reticulum (sER) forms anastomosing tubules responsible for lipid/steroid synthesis, glycogen metabolism, drug detoxification, and Ca2+ storage.",
    "pdfSource": "histology",
    "pdfPage": 7
  },
  {
    "id": "hist-01-q60",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 60,
    "stem": "Basophilia of the cytoplasm is due to",
    "options": [
      {
        "key": "a",
        "text": "Ribosomes and rER."
      },
      {
        "key": "b",
        "text": "Smooth endoplasmic reticulum."
      },
      {
        "key": "c",
        "text": "Golgi apparatus."
      },
      {
        "key": "d",
        "text": "Lysosomes."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 7)",
    "explanation": "Official Answer: (A) — Ribosomes and rER. Ribosomal RNA (rRNA) is transcribed from the nucleolar organizer (DNA) in the nucleolus and assembled with proteins synthesized in the cytoplasm to form small and large ribosomal subunits, which exit via nuclear pores. Ribosomes attach to rER membranes via ribophorin receptors and confer cytoplasmic basophilia due to their phosphate-rich rRNA. The rough endoplasmic reticulum (rER) consists of interconnected flattened cisternae specialized for synthesizing proteins for export, initial glycosylation, and budding transfer vesicles from its tubules toward the cis face of the Golgi. The smooth endoplasmic reticulum (sER) forms anastomosing tubules responsible for lipid/steroid synthesis, glycogen metabolism, drug detoxification, and Ca2+ storage.",
    "pdfSource": "histology",
    "pdfPage": 7
  },
  {
    "id": "hist-01-q61",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 61,
    "stem": "Initial glycosylation is a function of",
    "options": [
      {
        "key": "a",
        "text": "sER."
      },
      {
        "key": "b",
        "text": "Lysosomes."
      },
      {
        "key": "c",
        "text": "Golgi apparatus."
      },
      {
        "key": "d",
        "text": "rER."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 7)",
    "explanation": "Official Answer: (D) — rER. The rough endoplasmic reticulum (rER) consists of interconnected flattened cisternae specialized for synthesizing proteins for export, initial glycosylation, and budding transfer vesicles from its tubules toward the cis face of the Golgi. The smooth endoplasmic reticulum (sER) forms anastomosing tubules responsible for lipid/steroid synthesis, glycogen metabolism, drug detoxification, and Ca2+ storage.",
    "pdfSource": "histology",
    "pdfPage": 7
  },
  {
    "id": "hist-01-q62",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 62,
    "stem": "Ribosomes attached to the rER by",
    "options": [
      {
        "key": "a",
        "text": "Desmin."
      },
      {
        "key": "b",
        "text": "Vimentin."
      },
      {
        "key": "c",
        "text": "Ribophorin."
      },
      {
        "key": "d",
        "text": "Lamin."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 7)",
    "explanation": "Official Answer: (C) — Ribophorin. Ribosomal RNA (rRNA) is transcribed from the nucleolar organizer (DNA) in the nucleolus and assembled with proteins synthesized in the cytoplasm to form small and large ribosomal subunits, which exit via nuclear pores. Ribosomes attach to rER membranes via ribophorin receptors and confer cytoplasmic basophilia due to their phosphate-rich rRNA. The rough endoplasmic reticulum (rER) consists of interconnected flattened cisternae specialized for synthesizing proteins for export, initial glycosylation, and budding transfer vesicles from its tubules toward the cis face of the Golgi. The smooth endoplasmic reticulum (sER) forms anastomosing tubules responsible for lipid/steroid synthesis, glycogen metabolism, drug detoxification, and Ca2+ storage.",
    "pdfSource": "histology",
    "pdfPage": 7
  },
  {
    "id": "hist-01-q63",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 63,
    "stem": "In H&E-stained sections of protein forming cell, Golgi appears as:",
    "options": [
      {
        "key": "a",
        "text": "Deeply basophilic area near the nucleus."
      },
      {
        "key": "b",
        "text": "Deeply acidophilic area near the nucleus."
      },
      {
        "key": "c",
        "text": "Brown fibrils and granules near the nucleus."
      },
      {
        "key": "d",
        "text": "Unstained area near the nucleus."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 7)",
    "explanation": "Official Answer: (D) — Unstained area near the nucleus. The Golgi apparatus receives transfer vesicles from the rER at its convex cis (entry) face and buds off secretory vesicles and lysosomes from its concave trans (maturing) face. It concentrates, modifies, and packages proteins, renews the cell membrane, and appears as a pale unstained perinuclear area (negative Golgi image) in H&E-stained protein-secreting cells; it is demonstrated positively by silver stain. The resolving power of the transmission electron microscope (TEM) is approximately 0.2 nm (compared to 0.2 micrometers for light microscopy). 1 micrometer equals 1,000 nm (so 0.4 micrometers = 400 nm). Iron hematoxylin stains mitochondria and centrioles dark black; PAS stains carbohydrates (glycogen, glycocalyx/cell membrane, basement membrane); silver stains the Golgi apparatus, reticular fibers, and cell membrane.",
    "pdfSource": "histology",
    "pdfPage": 7
  },
  {
    "id": "hist-01-q64",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 64,
    "stem": "Cis face of Golgi",
    "options": [
      {
        "key": "a",
        "text": "Vesicles bud off from it."
      },
      {
        "key": "b",
        "text": "Receives vesicles from rER."
      },
      {
        "key": "c",
        "text": "Connects the saccules together."
      },
      {
        "key": "d",
        "text": "Fuse with cell membrane."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 8)",
    "explanation": "Official Answer: (B) — Receives vesicles from rER. The rough endoplasmic reticulum (rER) consists of interconnected flattened cisternae specialized for synthesizing proteins for export, initial glycosylation, and budding transfer vesicles from its tubules toward the cis face of the Golgi. The smooth endoplasmic reticulum (sER) forms anastomosing tubules responsible for lipid/steroid synthesis, glycogen metabolism, drug detoxification, and Ca2+ storage. The Golgi apparatus receives transfer vesicles from the rER at its convex cis (entry) face and buds off secretory vesicles and lysosomes from its concave trans (maturing) face. It concentrates, modifies, and packages proteins, renews the cell membrane, and appears as a pale unstained perinuclear area (negative Golgi image) in H&E-stained protein-secreting cells; it is demonstrated positively by silver stain.",
    "pdfSource": "histology",
    "pdfPage": 8
  },
  {
    "id": "hist-01-q65",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 65,
    "stem": "Renewal of the cell membrane is a function of",
    "options": [
      {
        "key": "a",
        "text": "sER."
      },
      {
        "key": "b",
        "text": "rER."
      },
      {
        "key": "c",
        "text": "Golgi apparatus."
      },
      {
        "key": "d",
        "text": "Lysosomes."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 8)",
    "explanation": "Official Answer: (C) — Golgi apparatus. The cell membrane (plasmalemma) measures 7.5–10 nm in thickness and appears by TEM as a trilaminar structure (two electron-dense dark lines separated by a central electron-lucent clear zone, known as the unit membrane). Integral proteins are embedded within or span across the phospholipid bilayer, whereas the external cell coat (glycocalyx) consists of glycolipids and glycoproteins stained by PAS and silver stains. The Golgi apparatus receives transfer vesicles from the rER at its convex cis (entry) face and buds off secretory vesicles and lysosomes from its concave trans (maturing) face. It concentrates, modifies, and packages proteins, renews the cell membrane, and appears as a pale unstained perinuclear area (negative Golgi image) in H&E-stained protein-secreting cells; it is demonstrated positively by silver stain.",
    "pdfSource": "histology",
    "pdfPage": 8
  },
  {
    "id": "hist-01-q66",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 66,
    "stem": "The outer mitochondrial membrane",
    "options": [
      {
        "key": "a",
        "text": "Forms cristae."
      },
      {
        "key": "b",
        "text": "Shows elementary particles."
      },
      {
        "key": "c",
        "text": "Smooth with porins."
      },
      {
        "key": "d",
        "text": "Shows attached ribosomes."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 8)",
    "explanation": "Official Answer: (C) — Smooth with porins. Mitochondria are double-membraned organelles containing their own circular DNA and ribosomes. The outer membrane is smooth and contains porins; the inner membrane folds into cristae studded with elementary particles (globular F1 heads carrying ATP synthetase activity), while the mitochondrial matrix houses Krebs (citric acid) cycle enzymes and calcium matrix granules.",
    "pdfSource": "histology",
    "pdfPage": 8
  },
  {
    "id": "hist-01-q67",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 67,
    "stem": "The inner mitochondrial membrane are connected to globular structures that contain",
    "options": [
      {
        "key": "a",
        "text": "Citric acid cycle enzymes."
      },
      {
        "key": "b",
        "text": "Calcium granules."
      },
      {
        "key": "c",
        "text": "Proteins with ATP synthetase activity."
      },
      {
        "key": "d",
        "text": "Circular DNA molecules."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 8)",
    "explanation": "Official Answer: (C) — Proteins with ATP synthetase activity. Mitochondria are double-membraned organelles containing their own circular DNA and ribosomes. The outer membrane is smooth and contains porins; the inner membrane folds into cristae studded with elementary particles (globular F1 heads carrying ATP synthetase activity), while the mitochondrial matrix houses Krebs (citric acid) cycle enzymes and calcium matrix granules.",
    "pdfSource": "histology",
    "pdfPage": 8
  },
  {
    "id": "hist-01-q68",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 68,
    "stem": "Golgi is apical in position in",
    "options": [
      {
        "key": "a",
        "text": "Liver cells."
      },
      {
        "key": "b",
        "text": "Steroid secreting cells."
      },
      {
        "key": "c",
        "text": "Secretory cells."
      },
      {
        "key": "d",
        "text": "Nerve cells."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 8)",
    "explanation": "Official Answer: (C) — Secretory cells. The Golgi apparatus receives transfer vesicles from the rER at its convex cis (entry) face and buds off secretory vesicles and lysosomes from its concave trans (maturing) face. It concentrates, modifies, and packages proteins, renews the cell membrane, and appears as a pale unstained perinuclear area (negative Golgi image) in H&E-stained protein-secreting cells; it is demonstrated positively by silver stain.",
    "pdfSource": "histology",
    "pdfPage": 8
  },
  {
    "id": "hist-01-q69",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 69,
    "stem": "The euchromatin",
    "options": [
      {
        "key": "a",
        "text": "Contains inactive genes."
      },
      {
        "key": "b",
        "text": "Appears dark in EM."
      },
      {
        "key": "c",
        "text": "Predominates in active cells."
      },
      {
        "key": "d",
        "text": "Include peripheral and islands chromatin."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 8)",
    "explanation": "Official Answer: (C) — Predominates in active cells. Euchromatin is extended, transcriptionally active chromatin that appears pale in LM and predominates in active protein-synthesizing cells (such as neurons/nerve cells, which have a large vesicular pale euchromatic nucleus and prominent nucleolus). Heterochromatin is condensed, inactive chromatin clumped at the nuclear periphery (associated with the inner nuclear membrane via lamins). Chromatin is basophilic due to the negatively charged phosphate groups of DNA.",
    "pdfSource": "histology",
    "pdfPage": 8
  },
  {
    "id": "hist-01-q70",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 70,
    "stem": "Where are the enzymes of Kreb’s cycle located?",
    "options": [
      {
        "key": "a",
        "text": "Outer mitochondrial membrane."
      },
      {
        "key": "b",
        "text": "Inner mitochondrial membrane."
      },
      {
        "key": "c",
        "text": "Matrix granules."
      },
      {
        "key": "d",
        "text": "Mitochondrial matrix."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 8)",
    "explanation": "Official Answer: (D) — Mitochondrial matrix. Mitochondria are double-membraned organelles containing their own circular DNA and ribosomes. The outer membrane is smooth and contains porins; the inner membrane folds into cristae studded with elementary particles (globular F1 heads carrying ATP synthetase activity), while the mitochondrial matrix houses Krebs (citric acid) cycle enzymes and calcium matrix granules.",
    "pdfSource": "histology",
    "pdfPage": 8
  },
  {
    "id": "hist-01-q71",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 71,
    "stem": "The resolution of TEM is about",
    "options": [
      {
        "key": "a",
        "text": "0.2 nm."
      },
      {
        "key": "b",
        "text": "0.4 µm."
      },
      {
        "key": "c",
        "text": "0.2 mm."
      },
      {
        "key": "d",
        "text": "0.4 mm."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 8)",
    "explanation": "Official Answer: (A) — 0.2 nm. The resolving power of the transmission electron microscope (TEM) is approximately 0.2 nm (compared to 0.2 micrometers for light microscopy). 1 micrometer equals 1,000 nm (so 0.4 micrometers = 400 nm). Iron hematoxylin stains mitochondria and centrioles dark black; PAS stains carbohydrates (glycogen, glycocalyx/cell membrane, basement membrane); silver stains the Golgi apparatus, reticular fibers, and cell membrane.",
    "pdfSource": "histology",
    "pdfPage": 8
  },
  {
    "id": "hist-01-q72",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 72,
    "stem": "Clumps of nucleoprotein concentrated near the periphery of the nucleus are called",
    "options": [
      {
        "key": "a",
        "text": "Nuclear pore complex."
      },
      {
        "key": "b",
        "text": "Nucleolus."
      },
      {
        "key": "c",
        "text": "Heterochromatin."
      },
      {
        "key": "d",
        "text": "Euchromatin."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 8)",
    "explanation": "Official Answer: (C) — Heterochromatin. Euchromatin is extended, transcriptionally active chromatin that appears pale in LM and predominates in active protein-synthesizing cells (such as neurons/nerve cells, which have a large vesicular pale euchromatic nucleus and prominent nucleolus). Heterochromatin is condensed, inactive chromatin clumped at the nuclear periphery (associated with the inner nuclear membrane via lamins). Chromatin is basophilic due to the negatively charged phosphate groups of DNA.",
    "pdfSource": "histology",
    "pdfPage": 8
  },
  {
    "id": "hist-01-q73",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 73,
    "stem": "Which structures consist of actin?",
    "options": [
      {
        "key": "a",
        "text": "Flagella."
      },
      {
        "key": "b",
        "text": "Cilia."
      },
      {
        "key": "c",
        "text": "Microfilaments."
      },
      {
        "key": "d",
        "text": "Microtubules."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 8)",
    "explanation": "Official Answer: (C) — Microfilaments. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules).",
    "pdfSource": "histology",
    "pdfPage": 8
  },
  {
    "id": "hist-01-q74",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 74,
    "stem": "A lysosome measures 0.4 µm in diameter. What is the diameter in nm?",
    "options": [
      {
        "key": "a",
        "text": "4 nm."
      },
      {
        "key": "b",
        "text": "40 nm."
      },
      {
        "key": "c",
        "text": "400 nm."
      },
      {
        "key": "d",
        "text": "4000 nm."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 8)",
    "explanation": "Official Answer: (C) — 400 nm. Lysosomes are membranous organelles rich in acid hydrolytic enzymes (demonstrated histochemically via acid phosphatase). Primary lysosomes are homogeneous vesicles; fusion with a phagosome forms a heterolysosome, fusion with an autophagic vacuole forms an autolysosome, and fusion with pinocytic vesicles forms a multivesicular body. Indigestible material remains as residual bodies (lipofuscin). Receptor-mediated endocytosis uses clathrin-coated pits. The resolving power of the transmission electron microscope (TEM) is approximately 0.2 nm (compared to 0.2 micrometers for light microscopy). 1 micrometer equals 1,000 nm (so 0.4 micrometers = 400 nm). Iron hematoxylin stains mitochondria and centrioles dark black; PAS stains carbohydrates (glycogen, glycocalyx/cell membrane, basement membrane); silver stains the Golgi apparatus, reticular fibers, and cell membrane.",
    "pdfSource": "histology",
    "pdfPage": 8
  },
  {
    "id": "hist-01-q75",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 75,
    "stem": "Enzymes associated with drug detoxification are associated with:",
    "options": [
      {
        "key": "a",
        "text": "sER."
      },
      {
        "key": "b",
        "text": "rER."
      },
      {
        "key": "c",
        "text": "Golgi body."
      },
      {
        "key": "d",
        "text": "Inner mitochondrial membrane."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 9)",
    "explanation": "Official Answer: (A) — sER. The rough endoplasmic reticulum (rER) consists of interconnected flattened cisternae specialized for synthesizing proteins for export, initial glycosylation, and budding transfer vesicles from its tubules toward the cis face of the Golgi. The smooth endoplasmic reticulum (sER) forms anastomosing tubules responsible for lipid/steroid synthesis, glycogen metabolism, drug detoxification, and Ca2+ storage.",
    "pdfSource": "histology",
    "pdfPage": 9
  },
  {
    "id": "hist-01-q76",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 76,
    "stem": "Nucleolonema is:",
    "options": [
      {
        "key": "a",
        "text": "Early rRNA & mature rRNA."
      },
      {
        "key": "b",
        "text": "DNA & Early rRNA."
      },
      {
        "key": "c",
        "text": "DNA & mature rRNA."
      },
      {
        "key": "d",
        "text": "All the above."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 9)",
    "explanation": "Official Answer: (A) — Early rRNA & mature rRNA. Ribosomal RNA (rRNA) is transcribed from the nucleolar organizer (DNA) in the nucleolus and assembled with proteins synthesized in the cytoplasm to form small and large ribosomal subunits, which exit via nuclear pores. Ribosomes attach to rER membranes via ribophorin receptors and confer cytoplasmic basophilia due to their phosphate-rich rRNA.",
    "pdfSource": "histology",
    "pdfPage": 9
  },
  {
    "id": "hist-01-q77",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 77,
    "stem": "All of the following are basophilic except:",
    "options": [
      {
        "key": "a",
        "text": "Nuclear membrane"
      },
      {
        "key": "b",
        "text": "Chromatin."
      },
      {
        "key": "c",
        "text": "rER."
      },
      {
        "key": "d",
        "text": "Mitochondria."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 9)",
    "explanation": "Official Answer: (D) — Mitochondria. Mitochondria are double-membraned organelles containing their own circular DNA and ribosomes. The outer membrane is smooth and contains porins; the inner membrane folds into cristae studded with elementary particles (globular F1 heads carrying ATP synthetase activity), while the mitochondrial matrix houses Krebs (citric acid) cycle enzymes and calcium matrix granules.",
    "pdfSource": "histology",
    "pdfPage": 9
  },
  {
    "id": "hist-01-q78",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 78,
    "stem": "Microbodies are:",
    "options": [
      {
        "key": "a",
        "text": "Peroxisomes."
      },
      {
        "key": "b",
        "text": "Lysosomes."
      },
      {
        "key": "c",
        "text": "Ribosomes."
      },
      {
        "key": "d",
        "text": "Centrosomes."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 9)",
    "explanation": "Official Answer: (A) — Peroxisomes. Peroxisomes (microbodies) are spherical membranous organelles containing oxidative enzymes (oxidases that generate H2O2 and catalase that breaks down H2O2 to water and oxygen) as well as beta-oxidation enzymes for long-chain fatty acids. Unlike lysosomal enzymes, peroxisomal enzymes are synthesized on free cytosolic ribosomes.",
    "pdfSource": "histology",
    "pdfPage": 9
  },
  {
    "id": "hist-01-q79",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 79,
    "stem": "Microtubular organizing center:",
    "options": [
      {
        "key": "a",
        "text": "From which microtubules originate."
      },
      {
        "key": "b",
        "text": "Rich in gamma tubulin."
      },
      {
        "key": "c",
        "text": "Contain two perpendicular centrioles."
      },
      {
        "key": "d",
        "text": "All of the above."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 9)",
    "explanation": "Official Answer: (D) — All of the above. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules).",
    "pdfSource": "histology",
    "pdfPage": 9
  },
  {
    "id": "hist-01-q80",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 80,
    "stem": "Liver cells:",
    "options": [
      {
        "key": "a",
        "text": "May be binucleated."
      },
      {
        "key": "b",
        "text": "Contain multiple small fat droplets."
      },
      {
        "key": "c",
        "text": "Rich in sER."
      },
      {
        "key": "d",
        "text": "All of the above."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 9)",
    "explanation": "Official Answer: (D) — All of the above. Euchromatin is extended, transcriptionally active chromatin that appears pale in LM and predominates in active protein-synthesizing cells (such as neurons/nerve cells, which have a large vesicular pale euchromatic nucleus and prominent nucleolus). Heterochromatin is condensed, inactive chromatin clumped at the nuclear periphery (associated with the inner nuclear membrane via lamins). Chromatin is basophilic due to the negatively charged phosphate groups of DNA.",
    "pdfSource": "histology",
    "pdfPage": 9
  },
  {
    "id": "hist-01-q81",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 81,
    "stem": "Fibrillar components of the nuclear membrane includes:",
    "options": [
      {
        "key": "a",
        "text": "Euchromatin + Lamins."
      },
      {
        "key": "b",
        "text": "Lamins."
      },
      {
        "key": "c",
        "text": "Heterochromatin + Nuclear lamina."
      },
      {
        "key": "d",
        "text": "Lamins + nuclear lamina."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 9)",
    "explanation": "Official Answer: (C) — Heterochromatin + Nuclear lamina. Euchromatin is extended, transcriptionally active chromatin that appears pale in LM and predominates in active protein-synthesizing cells (such as neurons/nerve cells, which have a large vesicular pale euchromatic nucleus and prominent nucleolus). Heterochromatin is condensed, inactive chromatin clumped at the nuclear periphery (associated with the inner nuclear membrane via lamins). Chromatin is basophilic due to the negatively charged phosphate groups of DNA.",
    "pdfSource": "histology",
    "pdfPage": 9
  },
  {
    "id": "hist-01-q82",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 82,
    "stem": "All of the following are true as regard the centrioles except:",
    "options": [
      {
        "key": "a",
        "text": "Present in microtubular organizing center."
      },
      {
        "key": "b",
        "text": "Two in non-dividing cells."
      },
      {
        "key": "c",
        "text": "Important for mitotic spindle formation."
      },
      {
        "key": "d",
        "text": "Contain 27 microfilaments."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 9)",
    "explanation": "Official Answer: (D) — Contain 27 microfilaments. The cytoskeleton includes microfilaments (actin, 5–7 nm diameter, forming the core of microvilli), intermediate filaments (8–10 nm: keratin in epithelium, desmin in muscle, vimentin in mesenchymal cells, lamins in the nuclear lamina), and microtubules (24 nm diameter, polymerized from alpha/beta-tubulin heterodimers anchored at the gamma-tubulin-rich MTOC). Centrioles and basal bodies have 9 peripheral triplets + 0 central microtubules (27 microtubules total), whereas the shaft (axoneme) of cilia/flagella has 9 peripheral doublets + 2 central singlets (20 microtubules).",
    "pdfSource": "histology",
    "pdfPage": 9
  },
  {
    "id": "hist-01-q83",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 83,
    "stem": "Enzymes of peroxisomes are formed in:",
    "options": [
      {
        "key": "a",
        "text": "rER."
      },
      {
        "key": "b",
        "text": "Free ribosomes."
      },
      {
        "key": "c",
        "text": "Attached ribosomes."
      },
      {
        "key": "d",
        "text": "Free & attached ribosomes."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 9)",
    "explanation": "Official Answer: (B) — Free ribosomes. Ribosomal RNA (rRNA) is transcribed from the nucleolar organizer (DNA) in the nucleolus and assembled with proteins synthesized in the cytoplasm to form small and large ribosomal subunits, which exit via nuclear pores. Ribosomes attach to rER membranes via ribophorin receptors and confer cytoplasmic basophilia due to their phosphate-rich rRNA. Peroxisomes (microbodies) are spherical membranous organelles containing oxidative enzymes (oxidases that generate H2O2 and catalase that breaks down H2O2 to water and oxygen) as well as beta-oxidation enzymes for long-chain fatty acids. Unlike lysosomal enzymes, peroxisomal enzymes are synthesized on free cytosolic ribosomes.",
    "pdfSource": "histology",
    "pdfPage": 9
  },
  {
    "id": "hist-01-q84",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 84,
    "stem": "Nucleus of the nerve cells:",
    "options": [
      {
        "key": "a",
        "text": "Condensed."
      },
      {
        "key": "b",
        "text": "Euchromatic."
      },
      {
        "key": "c",
        "text": "No visible nucleolus."
      },
      {
        "key": "d",
        "text": "Inactive."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 9)",
    "explanation": "Official Answer: (B) — Euchromatic. Euchromatin is extended, transcriptionally active chromatin that appears pale in LM and predominates in active protein-synthesizing cells (such as neurons/nerve cells, which have a large vesicular pale euchromatic nucleus and prominent nucleolus). Heterochromatin is condensed, inactive chromatin clumped at the nuclear periphery (associated with the inner nuclear membrane via lamins). Chromatin is basophilic due to the negatively charged phosphate groups of DNA.",
    "pdfSource": "histology",
    "pdfPage": 9
  },
  {
    "id": "hist-01-q85",
    "chapterId": "hist-01",
    "chapterNumber": 1,
    "subject": "Histology",
    "questionNumber": 85,
    "stem": "Chromatin:",
    "options": [
      {
        "key": "a",
        "text": "Basophilic as it contains phosphate group."
      },
      {
        "key": "b",
        "text": "Acidophilic as it contains DNA."
      },
      {
        "key": "c",
        "text": "Basophilic as it contains protein."
      },
      {
        "key": "d",
        "text": "Acidophilic as it contains protein."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Cytology & Organelles (PDF p. 9)",
    "explanation": "Official Answer: (A) — Basophilic as it contains phosphate group. Euchromatin is extended, transcriptionally active chromatin that appears pale in LM and predominates in active protein-synthesizing cells (such as neurons/nerve cells, which have a large vesicular pale euchromatic nucleus and prominent nucleolus). Heterochromatin is condensed, inactive chromatin clumped at the nuclear periphery (associated with the inner nuclear membrane via lamins). Chromatin is basophilic due to the negatively charged phosphate groups of DNA.",
    "pdfSource": "histology",
    "pdfPage": 9
  },
  {
    "id": "hist-02-q1",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 1,
    "stem": "Which of the following glands eliminates its complete cells as a secretory product?",
    "options": [
      {
        "key": "a",
        "text": "Merocrine."
      },
      {
        "key": "b",
        "text": "Apocrine."
      },
      {
        "key": "c",
        "text": "Holocrine."
      },
      {
        "key": "d",
        "text": "Endocrine."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 10)",
    "explanation": "Official Answer: (C) — Holocrine. Exocrine glands are classified by duct branching into simple (unbranched duct) and compound (branched duct), and by mechanism of secretion into merocrine (exocytosis without cytoplasm loss, the most common type, e.g., pancreas/salivary), apocrine (apical cytoplasm pinched off, e.g., mammary gland), and holocrine (entire secretory cell disintegrates and is expelled as the secretory product, e.g., sebaceous gland). Contractile myoepithelial (basket) cells lie between the secretory epithelial cells and the basement membrane.",
    "pdfSource": "histology",
    "pdfPage": 10
  },
  {
    "id": "hist-02-q2",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 2,
    "stem": "Which of the following epithelium may have keratin on the surface:",
    "options": [
      {
        "key": "a",
        "text": "Simple squamous epithelium."
      },
      {
        "key": "b",
        "text": "Stratified squamous epithelium."
      },
      {
        "key": "c",
        "text": "Simple columnar epithelium."
      },
      {
        "key": "d",
        "text": "Transitional epithelium."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 10)",
    "explanation": "Official Answer: (B) — Stratified squamous epithelium. Stratified epithelia are specialized for protection against mechanical friction and are named according to the shape of their most superficial cell layer. Stratified squamous epithelium has basal columnar/cuboidal cells, intermediate polygonal cells linked by abundant desmosomes, and superficial flat squamous cells: it is keratinized in the epidermis of skin, and non-keratinized in wet surfaces (oral cavity, esophagus, vagina, anal canal). Sweat gland ducts are lined by stratified cuboidal epithelium (2 layers of cuboidal cells).",
    "pdfSource": "histology",
    "pdfPage": 10
  },
  {
    "id": "hist-02-q3",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 3,
    "stem": "Which of the following epithelia may have a striate border on its surface:",
    "options": [
      {
        "key": "a",
        "text": "Simple squamous epithelium."
      },
      {
        "key": "b",
        "text": "Stratified squamous epithelium."
      },
      {
        "key": "c",
        "text": "Simple columnar epithelium."
      },
      {
        "key": "d",
        "text": "Transitional epithelium."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 10)",
    "explanation": "Official Answer: (C) — Simple columnar epithelium. Simple squamous epithelium consists of a single layer of thin, flat polygonal cells ideal for rapid filtration and gas exchange (lung alveoli, Bowman's capsule, endothelium of blood vessels, and mesothelium lining serous cavities: pleura, pericardium, peritoneum). Simple columnar epithelium lines the stomach (secretory, non-ciliated without goblet cells) and small/large intestines (absorptive with an apical striated/brush border of microvilli and goblet cells).",
    "pdfSource": "histology",
    "pdfPage": 10
  },
  {
    "id": "hist-02-q4",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 4,
    "stem": "Which of the following epithelia is also called the urothelium:",
    "options": [
      {
        "key": "a",
        "text": "Simple squamous epithelium."
      },
      {
        "key": "b",
        "text": "Stratified squamous epithelium."
      },
      {
        "key": "c",
        "text": "Simple columnar epithelium."
      },
      {
        "key": "d",
        "text": "Transitional epithelium."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 10)",
    "explanation": "Official Answer: (D) — Transitional epithelium. Transitional epithelium (urothelium) is a stratified epithelium restricted to the urinary tract (renal calyces, pelvis, ureters, and urinary bladder). It rests on a very thin/non-clear basement membrane, lacks goblet cells and keratin, and features binucleated superficial umbrella (dome-shaped) cells interconnected by tight junctional complexes and thick luminal plaques that protect underlying tissues from hypertonic, cytotoxic urine while stretching from cuboidal/columnar to squamous as the bladder fills.",
    "pdfSource": "histology",
    "pdfPage": 10
  },
  {
    "id": "hist-02-q5",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 5,
    "stem": "The type of secretion in which cells lose part of their cytoplasm is called:",
    "options": [
      {
        "key": "a",
        "text": "Merocrine."
      },
      {
        "key": "b",
        "text": "Apocrine."
      },
      {
        "key": "c",
        "text": "Holocrine."
      },
      {
        "key": "d",
        "text": "Cytocrine."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 10)",
    "explanation": "Official Answer: (B) — Apocrine. Exocrine glands are classified by duct branching into simple (unbranched duct) and compound (branched duct), and by mechanism of secretion into merocrine (exocytosis without cytoplasm loss, the most common type, e.g., pancreas/salivary), apocrine (apical cytoplasm pinched off, e.g., mammary gland), and holocrine (entire secretory cell disintegrates and is expelled as the secretory product, e.g., sebaceous gland). Contractile myoepithelial (basket) cells lie between the secretory epithelial cells and the basement membrane.",
    "pdfSource": "histology",
    "pdfPage": 10
  },
  {
    "id": "hist-02-q6",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 6,
    "stem": "When the cell is expelled as a secretory product, which term applies:",
    "options": [
      {
        "key": "a",
        "text": "Merocrine."
      },
      {
        "key": "b",
        "text": "Apocrine."
      },
      {
        "key": "c",
        "text": "Holocrine."
      },
      {
        "key": "d",
        "text": "Cytocrine."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 10)",
    "explanation": "Official Answer: (C) — Holocrine. Exocrine glands are classified by duct branching into simple (unbranched duct) and compound (branched duct), and by mechanism of secretion into merocrine (exocytosis without cytoplasm loss, the most common type, e.g., pancreas/salivary), apocrine (apical cytoplasm pinched off, e.g., mammary gland), and holocrine (entire secretory cell disintegrates and is expelled as the secretory product, e.g., sebaceous gland). Contractile myoepithelial (basket) cells lie between the secretory epithelial cells and the basement membrane.",
    "pdfSource": "histology",
    "pdfPage": 10
  },
  {
    "id": "hist-02-q7",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 7,
    "stem": "The respiratory epithelium is also known as:",
    "options": [
      {
        "key": "a",
        "text": "Endothelium."
      },
      {
        "key": "b",
        "text": "Urothelium."
      },
      {
        "key": "c",
        "text": "Pseudostratified columnar ciliated with goblet cells."
      },
      {
        "key": "d",
        "text": "Mesotelium."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 10)",
    "explanation": "Official Answer: (C) — Pseudostratified columnar ciliated with goblet cells. In pseudostratified columnar epithelium, all cells rest on the basement membrane (making it a single true layer), but not all cells reach the lumen, placing nuclei at multiple levels. Pseudostratified columnar ciliated epithelium with goblet cells (respiratory epithelium) lines the nasal cavity, trachea, and bronchi, whereas pseudostratified columnar epithelium with stereocilia (long, non-motile branched microvilli) lines the epididymis and vas deferens.",
    "pdfSource": "histology",
    "pdfPage": 10
  },
  {
    "id": "hist-02-q8",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 8,
    "stem": "Which feature is characteristic for zonula Occludens?",
    "options": [
      {
        "key": "a",
        "text": "Fusion of adjacent membranes at certain points."
      },
      {
        "key": "b",
        "text": "Abundant cytokeratin filaments near the junction."
      },
      {
        "key": "c",
        "text": "Surrounds columnar cells in the basal region of their lateral plasma membranes."
      },
      {
        "key": "d",
        "text": "Dense intracellular plaque."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 10)",
    "explanation": "Official Answer: (A) — Fusion of adjacent membranes at certain points. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 10
  },
  {
    "id": "hist-02-q9",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 9,
    "stem": "Stereocilia are",
    "options": [
      {
        "key": "a",
        "text": "Motile cilia."
      },
      {
        "key": "b",
        "text": "Short cilia."
      },
      {
        "key": "c",
        "text": "Short microvilli."
      },
      {
        "key": "d",
        "text": "Long microvilli."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 10)",
    "explanation": "Official Answer: (D) — Long microvilli. In pseudostratified columnar epithelium, all cells rest on the basement membrane (making it a single true layer), but not all cells reach the lumen, placing nuclei at multiple levels. Pseudostratified columnar ciliated epithelium with goblet cells (respiratory epithelium) lines the nasal cavity, trachea, and bronchi, whereas pseudostratified columnar epithelium with stereocilia (long, non-motile branched microvilli) lines the epididymis and vas deferens.",
    "pdfSource": "histology",
    "pdfPage": 10
  },
  {
    "id": "hist-02-q10",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 10,
    "stem": "What is a gland called if it has a branched duct?",
    "options": [
      {
        "key": "a",
        "text": "Simple gland."
      },
      {
        "key": "b",
        "text": "Compound gland."
      },
      {
        "key": "c",
        "text": "Tubular."
      },
      {
        "key": "d",
        "text": "Alveolar."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 10)",
    "explanation": "Official Answer: (B) — Compound gland. Exocrine glands are classified by duct branching into simple (unbranched duct) and compound (branched duct), and by mechanism of secretion into merocrine (exocytosis without cytoplasm loss, the most common type, e.g., pancreas/salivary), apocrine (apical cytoplasm pinched off, e.g., mammary gland), and holocrine (entire secretory cell disintegrates and is expelled as the secretory product, e.g., sebaceous gland). Contractile myoepithelial (basket) cells lie between the secretory epithelial cells and the basement membrane.",
    "pdfSource": "histology",
    "pdfPage": 10
  },
  {
    "id": "hist-02-q11",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 11,
    "stem": "Embryonic ectoderm develops into which of the following major tissue types?",
    "options": [
      {
        "key": "a",
        "text": "Connective and epithelial tissue."
      },
      {
        "key": "b",
        "text": "Connective and muscle tissue."
      },
      {
        "key": "c",
        "text": "Muscle tissue and epithelial tissue."
      },
      {
        "key": "d",
        "text": "Epithelial tissue and nervous tissue."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 10)",
    "explanation": "Official Answer: (D) — Epithelial tissue and nervous tissue. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 10
  },
  {
    "id": "hist-02-q12",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 12,
    "stem": "What type of epithelium forms the epidermis?",
    "options": [
      {
        "key": "a",
        "text": "Stratified squamous epithelium."
      },
      {
        "key": "b",
        "text": "Stratified cuboidal epithelium."
      },
      {
        "key": "c",
        "text": "Stratified columnar epithelium."
      },
      {
        "key": "d",
        "text": "Keratinized stratified squamous epithelium."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 11)",
    "explanation": "Official Answer: (D) — Keratinized stratified squamous epithelium. Stratified epithelia are specialized for protection against mechanical friction and are named according to the shape of their most superficial cell layer. Stratified squamous epithelium has basal columnar/cuboidal cells, intermediate polygonal cells linked by abundant desmosomes, and superficial flat squamous cells: it is keratinized in the epidermis of skin, and non-keratinized in wet surfaces (oral cavity, esophagus, vagina, anal canal). Sweat gland ducts are lined by stratified cuboidal epithelium (2 layers of cuboidal cells).",
    "pdfSource": "histology",
    "pdfPage": 11
  },
  {
    "id": "hist-02-q13",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 13,
    "stem": "When the cell is expelled as a secretory product, which term applies:",
    "options": [
      {
        "key": "a",
        "text": "Merocrine."
      },
      {
        "key": "b",
        "text": "Apocrine."
      },
      {
        "key": "c",
        "text": "Holocrine."
      },
      {
        "key": "d",
        "text": "Cytocrine."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 11)",
    "explanation": "Official Answer: (C) — Holocrine. Exocrine glands are classified by duct branching into simple (unbranched duct) and compound (branched duct), and by mechanism of secretion into merocrine (exocytosis without cytoplasm loss, the most common type, e.g., pancreas/salivary), apocrine (apical cytoplasm pinched off, e.g., mammary gland), and holocrine (entire secretory cell disintegrates and is expelled as the secretory product, e.g., sebaceous gland). Contractile myoepithelial (basket) cells lie between the secretory epithelial cells and the basement membrane.",
    "pdfSource": "histology",
    "pdfPage": 11
  },
  {
    "id": "hist-02-q14",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 14,
    "stem": "In light microscopy, the basement membrane is stained with:",
    "options": [
      {
        "key": "a",
        "text": "Sudan III."
      },
      {
        "key": "b",
        "text": "Hematoxylin."
      },
      {
        "key": "c",
        "text": "Eosin."
      },
      {
        "key": "d",
        "text": "PAS."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 11)",
    "explanation": "Official Answer: (D) — PAS. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 11
  },
  {
    "id": "hist-02-q15",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 15,
    "stem": "The primary purpose of stratification, or layering, in epithelial tissue is for increased ______:",
    "options": [
      {
        "key": "a",
        "text": "Secretion."
      },
      {
        "key": "b",
        "text": "Absorption."
      },
      {
        "key": "c",
        "text": "Protection."
      },
      {
        "key": "d",
        "text": "Thickening of the basement membrane."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 11)",
    "explanation": "Official Answer: (C) — Protection. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 11
  },
  {
    "id": "hist-02-q16",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 16,
    "stem": "What cell surface modification is made of microtubules?",
    "options": [
      {
        "key": "a",
        "text": "Microvilli."
      },
      {
        "key": "b",
        "text": "Stereocilia."
      },
      {
        "key": "c",
        "text": "Cilia."
      },
      {
        "key": "d",
        "text": "Keratinization."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 11)",
    "explanation": "Official Answer: (C) — Cilia. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 11
  },
  {
    "id": "hist-02-q17",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 17,
    "stem": "The classical description of a junctional complex includes the following except:",
    "options": [
      {
        "key": "a",
        "text": "Fascia occludens."
      },
      {
        "key": "b",
        "text": "Zonula occludens."
      },
      {
        "key": "c",
        "text": "Zonula adherens."
      },
      {
        "key": "d",
        "text": "Macula adherens (desmosome)."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 11)",
    "explanation": "Official Answer: (A) — Fascia occludens. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 11
  },
  {
    "id": "hist-02-q18",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 18,
    "stem": "In epithelia, a junctional complex",
    "options": [
      {
        "key": "a",
        "text": "Is the same as desmosome."
      },
      {
        "key": "b",
        "text": "Consists of two adjacent sets of internal laminae."
      },
      {
        "key": "c",
        "text": "Generally consists of three regions: zonula occludens, zonula adherens, and macula adherens."
      },
      {
        "key": "d",
        "text": "Usually contains a hemidesmosome."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 11)",
    "explanation": "Official Answer: (C) — Generally consists of three regions: zonula occludens, zonula adherens, and macula adherens. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 11
  },
  {
    "id": "hist-02-q19",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 19,
    "stem": "Gap junctions",
    "options": [
      {
        "key": "a",
        "text": "Permit the passage of large proteins from cell to cell."
      },
      {
        "key": "b",
        "text": "Form part of the classical junctional complex."
      },
      {
        "key": "c",
        "text": "Exist only between epithelial cells."
      },
      {
        "key": "d",
        "text": "Are areas of transmission of impulses."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 11)",
    "explanation": "Official Answer: (D) — Are areas of transmission of impulses. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 11
  },
  {
    "id": "hist-02-q20",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 20,
    "stem": "The following can be found on the apical surface of intestinal simple columnar epithelium",
    "options": [
      {
        "key": "a",
        "text": "Villi."
      },
      {
        "key": "b",
        "text": "Hemidesmosome."
      },
      {
        "key": "c",
        "text": "Desmosome."
      },
      {
        "key": "d",
        "text": "Microvilli."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 11)",
    "explanation": "Official Answer: (D) — Microvilli. Simple squamous epithelium consists of a single layer of thin, flat polygonal cells ideal for rapid filtration and gas exchange (lung alveoli, Bowman's capsule, endothelium of blood vessels, and mesothelium lining serous cavities: pleura, pericardium, peritoneum). Simple columnar epithelium lines the stomach (secretory, non-ciliated without goblet cells) and small/large intestines (absorptive with an apical striated/brush border of microvilli and goblet cells).",
    "pdfSource": "histology",
    "pdfPage": 11
  },
  {
    "id": "hist-02-q21",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 21,
    "stem": "What type of epithelium lines most of the gastrointestinal tract?",
    "options": [
      {
        "key": "a",
        "text": "Simple squamous epithelium."
      },
      {
        "key": "b",
        "text": "Simple cuboidal epithelium."
      },
      {
        "key": "c",
        "text": "Simple columnar epithelium."
      },
      {
        "key": "d",
        "text": "Simple columnar ciliated."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 11)",
    "explanation": "Official Answer: (C) — Simple columnar epithelium. Simple squamous epithelium consists of a single layer of thin, flat polygonal cells ideal for rapid filtration and gas exchange (lung alveoli, Bowman's capsule, endothelium of blood vessels, and mesothelium lining serous cavities: pleura, pericardium, peritoneum). Simple columnar epithelium lines the stomach (secretory, non-ciliated without goblet cells) and small/large intestines (absorptive with an apical striated/brush border of microvilli and goblet cells).",
    "pdfSource": "histology",
    "pdfPage": 11
  },
  {
    "id": "hist-02-q22",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 22,
    "stem": "What type of epithelium is composed of cells which all touch the basement membrane and is only one cell layer thick?",
    "options": [
      {
        "key": "a",
        "text": "Stratified squamous epithelium."
      },
      {
        "key": "b",
        "text": "Transitional epithelium."
      },
      {
        "key": "c",
        "text": "Stratified cuboidal epithelium."
      },
      {
        "key": "d",
        "text": "Pseudostratified epithelium."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 12)",
    "explanation": "Official Answer: (D) — Pseudostratified epithelium. In pseudostratified columnar epithelium, all cells rest on the basement membrane (making it a single true layer), but not all cells reach the lumen, placing nuclei at multiple levels. Pseudostratified columnar ciliated epithelium with goblet cells (respiratory epithelium) lines the nasal cavity, trachea, and bronchi, whereas pseudostratified columnar epithelium with stereocilia (long, non-motile branched microvilli) lines the epididymis and vas deferens. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 12
  },
  {
    "id": "hist-02-q23",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 23,
    "stem": "A type of epithelium with limited distribution in the body is",
    "options": [
      {
        "key": "a",
        "text": "Stratified cubical epithelium."
      },
      {
        "key": "b",
        "text": "Simple columnar epithelium."
      },
      {
        "key": "c",
        "text": "Transitional epithelium."
      },
      {
        "key": "d",
        "text": "Simple squamous epithelium."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 12)",
    "explanation": "Official Answer: (A) — Stratified cubical epithelium. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 12
  },
  {
    "id": "hist-02-q24",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 24,
    "stem": "The stomach is lined by:",
    "options": [
      {
        "key": "a",
        "text": "Simple cubical epithelium."
      },
      {
        "key": "b",
        "text": "Pseudostratified columnar ciliated epithelium with goblet cells."
      },
      {
        "key": "c",
        "text": "Simple columnar epithelium."
      },
      {
        "key": "d",
        "text": "Stratified columnar epithelium."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 12)",
    "explanation": "Official Answer: (C) — Simple columnar epithelium. Simple squamous epithelium consists of a single layer of thin, flat polygonal cells ideal for rapid filtration and gas exchange (lung alveoli, Bowman's capsule, endothelium of blood vessels, and mesothelium lining serous cavities: pleura, pericardium, peritoneum). Simple columnar epithelium lines the stomach (secretory, non-ciliated without goblet cells) and small/large intestines (absorptive with an apical striated/brush border of microvilli and goblet cells).",
    "pdfSource": "histology",
    "pdfPage": 12
  },
  {
    "id": "hist-02-q25",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 25,
    "stem": "Pseudostratified columnar non ciliated epithelium lines:",
    "options": [
      {
        "key": "a",
        "text": "Skin."
      },
      {
        "key": "b",
        "text": "Trachea."
      },
      {
        "key": "c",
        "text": "Ureter."
      },
      {
        "key": "d",
        "text": "Vas deferens."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 12)",
    "explanation": "Official Answer: (D) — Vas deferens. In pseudostratified columnar epithelium, all cells rest on the basement membrane (making it a single true layer), but not all cells reach the lumen, placing nuclei at multiple levels. Pseudostratified columnar ciliated epithelium with goblet cells (respiratory epithelium) lines the nasal cavity, trachea, and bronchi, whereas pseudostratified columnar epithelium with stereocilia (long, non-motile branched microvilli) lines the epididymis and vas deferens.",
    "pdfSource": "histology",
    "pdfPage": 12
  },
  {
    "id": "hist-02-q26",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 26,
    "stem": "Ducts of sweat glands are lined by:",
    "options": [
      {
        "key": "a",
        "text": "Simple squamous epithelium."
      },
      {
        "key": "b",
        "text": "Stratified cubical epithelium."
      },
      {
        "key": "c",
        "text": "Simple columnar epithelium."
      },
      {
        "key": "d",
        "text": "Simple cubical epithelium."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 12)",
    "explanation": "Official Answer: (B) — Stratified cubical epithelium. Exocrine glands are classified by duct branching into simple (unbranched duct) and compound (branched duct), and by mechanism of secretion into merocrine (exocytosis without cytoplasm loss, the most common type, e.g., pancreas/salivary), apocrine (apical cytoplasm pinched off, e.g., mammary gland), and holocrine (entire secretory cell disintegrates and is expelled as the secretory product, e.g., sebaceous gland). Contractile myoepithelial (basket) cells lie between the secretory epithelial cells and the basement membrane. Stratified epithelia are specialized for protection against mechanical friction and are named according to the shape of their most superficial cell layer. Stratified squamous epithelium has basal columnar/cuboidal cells, intermediate polygonal cells linked by abundant desmosomes, and superficial flat squamous cells: it is keratinized in the epidermis of skin, and non-keratinized in wet surfaces (oral cavity, esophagus, vagina, anal canal). Sweat gland ducts are lined by stratified cuboidal epithelium (2 layers of cuboidal cells).",
    "pdfSource": "histology",
    "pdfPage": 12
  },
  {
    "id": "hist-02-q27",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 27,
    "stem": "Regarding transitional epithelium, the following statement is correct:",
    "options": [
      {
        "key": "a",
        "text": "Formed of 5-30 layers of cells."
      },
      {
        "key": "b",
        "text": "Cells rest on thick basement membrane."
      },
      {
        "key": "c",
        "text": "Superficial cells are connected by junctional complex."
      },
      {
        "key": "d",
        "text": "Superficial cells are covered by cilia."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 12)",
    "explanation": "Official Answer: (C) — Superficial cells are connected by junctional complex. Transitional epithelium (urothelium) is a stratified epithelium restricted to the urinary tract (renal calyces, pelvis, ureters, and urinary bladder). It rests on a very thin/non-clear basement membrane, lacks goblet cells and keratin, and features binucleated superficial umbrella (dome-shaped) cells interconnected by tight junctional complexes and thick luminal plaques that protect underlying tissues from hypertonic, cytotoxic urine while stretching from cuboidal/columnar to squamous as the bladder fills. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 12
  },
  {
    "id": "hist-02-q28",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 28,
    "stem": "The epithelial tissue is characterized by:",
    "options": [
      {
        "key": "a",
        "text": "Formed of widely separated cells."
      },
      {
        "key": "b",
        "text": "Avascular."
      },
      {
        "key": "c",
        "text": "Great amount of intercellular matrix."
      },
      {
        "key": "d",
        "text": "Arise only from mesoderm."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 12)",
    "explanation": "Official Answer: (B) — Avascular. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 12
  },
  {
    "id": "hist-02-q29",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 29,
    "stem": "Regarding myo-epithelium, one of the following statements is correct:",
    "options": [
      {
        "key": "a",
        "text": "Present in thyroid gland."
      },
      {
        "key": "b",
        "text": "The cells act as a receptor."
      },
      {
        "key": "c",
        "text": "Present between the secretory cells and the duct lumen."
      },
      {
        "key": "d",
        "text": "The cells can contract."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 12)",
    "explanation": "Official Answer: (D) — The cells can contract. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 12
  },
  {
    "id": "hist-02-q30",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 30,
    "stem": "Regarding the cilia, choose the correct statement:",
    "options": [
      {
        "key": "a",
        "text": "The core is rich in actin filaments."
      },
      {
        "key": "b",
        "text": "The axoneme is formed of 20 microtubules."
      },
      {
        "key": "c",
        "text": "Its main function is increasing the surface area of cells."
      },
      {
        "key": "d",
        "text": "The basal body is formed of 9 doublets of microtubules."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 12)",
    "explanation": "Official Answer: (B) — The axoneme is formed of 20 microtubules. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 12
  },
  {
    "id": "hist-02-q31",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 31,
    "stem": "Choose the correct statement (junctions):",
    "options": [
      {
        "key": "a",
        "text": "Desmosomes are maximum at areas of minimal friction."
      },
      {
        "key": "b",
        "text": "Tight junction restricts the movement of substance between cells."
      },
      {
        "key": "c",
        "text": "Zonula adherens allow the passage of ions between the cells."
      },
      {
        "key": "d",
        "text": "The adjacent cell membranes in desmosomes are tightly connected."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 13)",
    "explanation": "Official Answer: (B) — Tight junction restricts the movement of substance between cells. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 13
  },
  {
    "id": "hist-02-q32",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 32,
    "stem": "Regarding nexus (gap junction), choose the correct statement:",
    "options": [
      {
        "key": "a",
        "text": "It is found in cardiac muscle."
      },
      {
        "key": "b",
        "text": "It prevents the passage of substances between cells."
      },
      {
        "key": "c",
        "text": "The intercellular space is wide."
      },
      {
        "key": "d",
        "text": "It holds the cells together and prevent their separation."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 13)",
    "explanation": "Official Answer: (A) — It is found in cardiac muscle. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 13
  },
  {
    "id": "hist-02-q33",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 33,
    "stem": "Regarding the basement membrane, choose the correct statement:",
    "options": [
      {
        "key": "a",
        "text": "Basal lamina has no collagen."
      },
      {
        "key": "b",
        "text": "Reticular lamina is formed of reticular fibers and ground substance."
      },
      {
        "key": "c",
        "text": "It is best seen by Janus green."
      },
      {
        "key": "d",
        "text": "The anchoring fibers are represented by collagen type I."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 13)",
    "explanation": "Official Answer: (B) — Reticular lamina is formed of reticular fibers and ground substance. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 13
  },
  {
    "id": "hist-02-q34",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 34,
    "stem": "Collagen in the basal lamina:",
    "options": [
      {
        "key": "a",
        "text": "Type I fibers."
      },
      {
        "key": "b",
        "text": "Type III fibers."
      },
      {
        "key": "c",
        "text": "Type IV fibers."
      },
      {
        "key": "d",
        "text": "Type IV granules."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 13)",
    "explanation": "Official Answer: (D) — Type IV granules. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 13
  },
  {
    "id": "hist-02-q35",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 35,
    "stem": "Only one statement about the stratified squamous epithelium is correct. Cells of the layer:",
    "options": [
      {
        "key": "a",
        "text": "Farthest from the basement membrane, squamous."
      },
      {
        "key": "b",
        "text": "Farthest from the basement membrane, are polygonal."
      },
      {
        "key": "c",
        "text": "Closest to the basement membrane, are squamous."
      },
      {
        "key": "d",
        "text": "Closest to the basement membrane are polygonal."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 13)",
    "explanation": "Official Answer: (A) — Farthest from the basement membrane, squamous. Stratified epithelia are specialized for protection against mechanical friction and are named according to the shape of their most superficial cell layer. Stratified squamous epithelium has basal columnar/cuboidal cells, intermediate polygonal cells linked by abundant desmosomes, and superficial flat squamous cells: it is keratinized in the epidermis of skin, and non-keratinized in wet surfaces (oral cavity, esophagus, vagina, anal canal). Sweat gland ducts are lined by stratified cuboidal epithelium (2 layers of cuboidal cells). A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 13
  },
  {
    "id": "hist-02-q36",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 36,
    "stem": "The most common type of secretion of exocrine cells is:",
    "options": [
      {
        "key": "a",
        "text": "All possible types of secretion are roughly equally frequent."
      },
      {
        "key": "b",
        "text": "Merocrine secretion."
      },
      {
        "key": "c",
        "text": "Holocrine secretion."
      },
      {
        "key": "d",
        "text": "Apocrine secretion."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 13)",
    "explanation": "Official Answer: (B) — Merocrine secretion. Exocrine glands are classified by duct branching into simple (unbranched duct) and compound (branched duct), and by mechanism of secretion into merocrine (exocytosis without cytoplasm loss, the most common type, e.g., pancreas/salivary), apocrine (apical cytoplasm pinched off, e.g., mammary gland), and holocrine (entire secretory cell disintegrates and is expelled as the secretory product, e.g., sebaceous gland). Contractile myoepithelial (basket) cells lie between the secretory epithelial cells and the basement membrane.",
    "pdfSource": "histology",
    "pdfPage": 13
  },
  {
    "id": "hist-02-q37",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 37,
    "stem": "Where are usually myoepithelial cells?",
    "options": [
      {
        "key": "a",
        "text": "In secretory part of glands between secretory cells & the basement membrane."
      },
      {
        "key": "b",
        "text": "In secretory part of glands as the layer which is closest to the lumen."
      },
      {
        "key": "c",
        "text": "In secretory part of glands present between secretory cells."
      },
      {
        "key": "d",
        "text": "In secretory part of glands out of the basement membrane."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 13)",
    "explanation": "Official Answer: (A) — In secretory part of glands between secretory cells & the basement membrane. Exocrine glands are classified by duct branching into simple (unbranched duct) and compound (branched duct), and by mechanism of secretion into merocrine (exocytosis without cytoplasm loss, the most common type, e.g., pancreas/salivary), apocrine (apical cytoplasm pinched off, e.g., mammary gland), and holocrine (entire secretory cell disintegrates and is expelled as the secretory product, e.g., sebaceous gland). Contractile myoepithelial (basket) cells lie between the secretory epithelial cells and the basement membrane. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 13
  },
  {
    "id": "hist-02-q38",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 38,
    "stem": "Which of the following statements is the best description of zonula Occludens? Cell adhesion involved mainly in:",
    "options": [
      {
        "key": "a",
        "text": "A barrier to avoid free diffusion along epithelial cells."
      },
      {
        "key": "b",
        "text": "Exchange of small molecules and ions between cells."
      },
      {
        "key": "c",
        "text": "Anchoring the cell to the basement membrane."
      },
      {
        "key": "d",
        "text": "Mechanical stability and resistance."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 13)",
    "explanation": "Official Answer: (A) — A barrier to avoid free diffusion along epithelial cells. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 13
  },
  {
    "id": "hist-02-q39",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 39,
    "stem": "Cilia:",
    "options": [
      {
        "key": "a",
        "text": "Are branched forms of microvilli."
      },
      {
        "key": "b",
        "text": "Are motile structures on the surface of some epithelial cells."
      },
      {
        "key": "c",
        "text": "Are inserted into basement membrane."
      },
      {
        "key": "d",
        "text": "Have 9+2 microtubule arrangement."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 14)",
    "explanation": "Official Answer: (B) — Are motile structures on the surface of some epithelial cells. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 14
  },
  {
    "id": "hist-02-q40",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 40,
    "stem": "Mesothelium is:",
    "options": [
      {
        "key": "a",
        "text": "Simple squamous epithelium that lines serous cavities."
      },
      {
        "key": "b",
        "text": "Simple squamous epithelium that lines the lumen of the cardiovascular system."
      },
      {
        "key": "c",
        "text": "Found in kidney tubules."
      },
      {
        "key": "d",
        "text": "B and C can be correct."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 14)",
    "explanation": "Official Answer: (A) — Simple squamous epithelium that lines serous cavities. Simple squamous epithelium consists of a single layer of thin, flat polygonal cells ideal for rapid filtration and gas exchange (lung alveoli, Bowman's capsule, endothelium of blood vessels, and mesothelium lining serous cavities: pleura, pericardium, peritoneum). Simple columnar epithelium lines the stomach (secretory, non-ciliated without goblet cells) and small/large intestines (absorptive with an apical striated/brush border of microvilli and goblet cells).",
    "pdfSource": "histology",
    "pdfPage": 14
  },
  {
    "id": "hist-02-q41",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 41,
    "stem": "The cells which specialized to protect underlying tissues from the hypertonic and potentially cytotoxic effects of urine are:",
    "options": [
      {
        "key": "a",
        "text": "Keratinized cells."
      },
      {
        "key": "b",
        "text": "Non-keratinized cells."
      },
      {
        "key": "c",
        "text": "Dome cells."
      },
      {
        "key": "d",
        "text": "None of the above."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 14)",
    "explanation": "Official Answer: (C) — Dome cells. Transitional epithelium (urothelium) is a stratified epithelium restricted to the urinary tract (renal calyces, pelvis, ureters, and urinary bladder). It rests on a very thin/non-clear basement membrane, lacks goblet cells and keratin, and features binucleated superficial umbrella (dome-shaped) cells interconnected by tight junctional complexes and thick luminal plaques that protect underlying tissues from hypertonic, cytotoxic urine while stretching from cuboidal/columnar to squamous as the bladder fills.",
    "pdfSource": "histology",
    "pdfPage": 14
  },
  {
    "id": "hist-02-q42",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 42,
    "stem": "Metaplasia is:",
    "options": [
      {
        "key": "a",
        "text": "Abnormal change in the type of epithelium."
      },
      {
        "key": "b",
        "text": "Abnormal growth of the cells."
      },
      {
        "key": "c",
        "text": "The same as dysplasia."
      },
      {
        "key": "d",
        "text": "B and C are correct."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 14)",
    "explanation": "Official Answer: (A) — Abnormal change in the type of epithelium. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 14
  },
  {
    "id": "hist-02-q43",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 43,
    "stem": "Why is there transitional epithelial tissue in the bladder?",
    "options": [
      {
        "key": "a",
        "text": "Because this tissue promotes the flow of liquids."
      },
      {
        "key": "b",
        "text": "Because this tissue can swell and shrink depending on the fullness of the bladder."
      },
      {
        "key": "c",
        "text": "Because this tissue aids in urine absorption."
      },
      {
        "key": "d",
        "text": "Because this tissue does not absorb liquids."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 14)",
    "explanation": "Official Answer: (B) — Because this tissue can swell and shrink depending on the fullness of the bladder. Transitional epithelium (urothelium) is a stratified epithelium restricted to the urinary tract (renal calyces, pelvis, ureters, and urinary bladder). It rests on a very thin/non-clear basement membrane, lacks goblet cells and keratin, and features binucleated superficial umbrella (dome-shaped) cells interconnected by tight junctional complexes and thick luminal plaques that protect underlying tissues from hypertonic, cytotoxic urine while stretching from cuboidal/columnar to squamous as the bladder fills.",
    "pdfSource": "histology",
    "pdfPage": 14
  },
  {
    "id": "hist-02-q44",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 44,
    "stem": "All, thin epithelial cells that have the appearance of two or more layers, but with all cells touching the basement membrane is",
    "options": [
      {
        "key": "a",
        "text": "Simple squamous epithelium."
      },
      {
        "key": "b",
        "text": "Simple cuboidal epithelium."
      },
      {
        "key": "c",
        "text": "Simple columnar epithelium."
      },
      {
        "key": "d",
        "text": "Pseudostratified columnar epithelium."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 14)",
    "explanation": "Official Answer: (D) — Pseudostratified columnar epithelium. In pseudostratified columnar epithelium, all cells rest on the basement membrane (making it a single true layer), but not all cells reach the lumen, placing nuclei at multiple levels. Pseudostratified columnar ciliated epithelium with goblet cells (respiratory epithelium) lines the nasal cavity, trachea, and bronchi, whereas pseudostratified columnar epithelium with stereocilia (long, non-motile branched microvilli) lines the epididymis and vas deferens. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 14
  },
  {
    "id": "hist-02-q45",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 45,
    "stem": "Epithelial cells that can stretch from a cuboidal or columnar shape to a squamous shape are called",
    "options": [
      {
        "key": "a",
        "text": "Simple squamous epithelium."
      },
      {
        "key": "b",
        "text": "Simple cuboidal epithelium."
      },
      {
        "key": "c",
        "text": "Pseudostratified columnar epithelium."
      },
      {
        "key": "d",
        "text": "Transitional epithelium."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 14)",
    "explanation": "Official Answer: (D) — Transitional epithelium. Transitional epithelium (urothelium) is a stratified epithelium restricted to the urinary tract (renal calyces, pelvis, ureters, and urinary bladder). It rests on a very thin/non-clear basement membrane, lacks goblet cells and keratin, and features binucleated superficial umbrella (dome-shaped) cells interconnected by tight junctional complexes and thick luminal plaques that protect underlying tissues from hypertonic, cytotoxic urine while stretching from cuboidal/columnar to squamous as the bladder fills.",
    "pdfSource": "histology",
    "pdfPage": 14
  },
  {
    "id": "hist-02-q46",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 46,
    "stem": "In which of these locations would pseudostratified columnar ciliated epithelium intermixed with goblet cells be found?",
    "options": [
      {
        "key": "a",
        "text": "Surface of the skin."
      },
      {
        "key": "b",
        "text": "Lining of nasal cavity and trachea."
      },
      {
        "key": "c",
        "text": "Lining of serous membranes."
      },
      {
        "key": "d",
        "text": "Lining the small intestine."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 14)",
    "explanation": "Official Answer: (B) — Lining of nasal cavity and trachea. In pseudostratified columnar epithelium, all cells rest on the basement membrane (making it a single true layer), but not all cells reach the lumen, placing nuclei at multiple levels. Pseudostratified columnar ciliated epithelium with goblet cells (respiratory epithelium) lines the nasal cavity, trachea, and bronchi, whereas pseudostratified columnar epithelium with stereocilia (long, non-motile branched microvilli) lines the epididymis and vas deferens.",
    "pdfSource": "histology",
    "pdfPage": 14
  },
  {
    "id": "hist-02-q47",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 47,
    "stem": "The various types of epithelium are classified by the",
    "options": [
      {
        "key": "a",
        "text": "Size and shape of cells."
      },
      {
        "key": "b",
        "text": "Shape of cells and number of cell layers."
      },
      {
        "key": "c",
        "text": "Number of cell layers and size of the cells."
      },
      {
        "key": "d",
        "text": "Size and location of cells."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 14)",
    "explanation": "Official Answer: (B) — Shape of cells and number of cell layers. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 14
  },
  {
    "id": "hist-02-q48",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 48,
    "stem": "Epithelial tissue is distinguished from connective tissue, muscular, or nervous tissue by its",
    "options": [
      {
        "key": "a",
        "text": "Large extracellular matrix."
      },
      {
        "key": "b",
        "text": "Contractility."
      },
      {
        "key": "c",
        "text": "Ability to carry action potentials."
      },
      {
        "key": "d",
        "text": "Basement membrane."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 15)",
    "explanation": "Official Answer: (D) — Basement membrane. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 15
  },
  {
    "id": "hist-02-q49",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 49,
    "stem": "Epithelial tissue that can resist friction would have many",
    "options": [
      {
        "key": "a",
        "text": "Desmosomes."
      },
      {
        "key": "b",
        "text": "Gap junctions."
      },
      {
        "key": "c",
        "text": "Tight junctions."
      },
      {
        "key": "d",
        "text": "Basement junctions."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 15)",
    "explanation": "Official Answer: (A) — Desmosomes. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 15
  },
  {
    "id": "hist-02-q50",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 50,
    "stem": "Glands whose ducts have many branches are called",
    "options": [
      {
        "key": "a",
        "text": "Simple."
      },
      {
        "key": "b",
        "text": "Compound."
      },
      {
        "key": "c",
        "text": "Branched."
      },
      {
        "key": "d",
        "text": "Alveolar."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 15)",
    "explanation": "Official Answer: (B) — Compound. Exocrine glands are classified by duct branching into simple (unbranched duct) and compound (branched duct), and by mechanism of secretion into merocrine (exocytosis without cytoplasm loss, the most common type, e.g., pancreas/salivary), apocrine (apical cytoplasm pinched off, e.g., mammary gland), and holocrine (entire secretory cell disintegrates and is expelled as the secretory product, e.g., sebaceous gland). Contractile myoepithelial (basket) cells lie between the secretory epithelial cells and the basement membrane.",
    "pdfSource": "histology",
    "pdfPage": 15
  },
  {
    "id": "hist-02-q51",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 51,
    "stem": "In a ______ gland, entire cells break down to form the secretion.",
    "options": [
      {
        "key": "a",
        "text": "Exocrine."
      },
      {
        "key": "b",
        "text": "Merocrine."
      },
      {
        "key": "c",
        "text": "Holocrine."
      },
      {
        "key": "d",
        "text": "Autocrine."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 15)",
    "explanation": "Official Answer: (C) — Holocrine. Exocrine glands are classified by duct branching into simple (unbranched duct) and compound (branched duct), and by mechanism of secretion into merocrine (exocytosis without cytoplasm loss, the most common type, e.g., pancreas/salivary), apocrine (apical cytoplasm pinched off, e.g., mammary gland), and holocrine (entire secretory cell disintegrates and is expelled as the secretory product, e.g., sebaceous gland). Contractile myoepithelial (basket) cells lie between the secretory epithelial cells and the basement membrane.",
    "pdfSource": "histology",
    "pdfPage": 15
  },
  {
    "id": "hist-02-q52",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 52,
    "stem": "According to their function, there are two major types of epithelial tissue, these are",
    "options": [
      {
        "key": "a",
        "text": "Epithelial tissue and cartilage."
      },
      {
        "key": "b",
        "text": "Holocrine and apocrine glands."
      },
      {
        "key": "c",
        "text": "Transitional and pseudostratified epithelium."
      },
      {
        "key": "d",
        "text": "Covering and secretory epithelium."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 15)",
    "explanation": "Official Answer: (D) — Covering and secretory epithelium. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 15
  },
  {
    "id": "hist-02-q53",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 53,
    "stem": "The secretions of endocrine glands are released directly",
    "options": [
      {
        "key": "a",
        "text": "Onto the skin surface."
      },
      {
        "key": "b",
        "text": "Into the bloodstream."
      },
      {
        "key": "c",
        "text": "Into a gland duct."
      },
      {
        "key": "d",
        "text": "Into the brain tissue."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 15)",
    "explanation": "Official Answer: (B) — Into the bloodstream. Exocrine glands are classified by duct branching into simple (unbranched duct) and compound (branched duct), and by mechanism of secretion into merocrine (exocytosis without cytoplasm loss, the most common type, e.g., pancreas/salivary), apocrine (apical cytoplasm pinched off, e.g., mammary gland), and holocrine (entire secretory cell disintegrates and is expelled as the secretory product, e.g., sebaceous gland). Contractile myoepithelial (basket) cells lie between the secretory epithelial cells and the basement membrane.",
    "pdfSource": "histology",
    "pdfPage": 15
  },
  {
    "id": "hist-02-q54",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 54,
    "stem": "Which type of epithelium is best suited for rapid filtration?",
    "options": [
      {
        "key": "a",
        "text": "Simple squamous."
      },
      {
        "key": "b",
        "text": "Stratified squamous."
      },
      {
        "key": "c",
        "text": "Pseudostratified."
      },
      {
        "key": "d",
        "text": "Stratified cuboidal."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 15)",
    "explanation": "Official Answer: (A) — Simple squamous. Simple squamous epithelium consists of a single layer of thin, flat polygonal cells ideal for rapid filtration and gas exchange (lung alveoli, Bowman's capsule, endothelium of blood vessels, and mesothelium lining serous cavities: pleura, pericardium, peritoneum). Simple columnar epithelium lines the stomach (secretory, non-ciliated without goblet cells) and small/large intestines (absorptive with an apical striated/brush border of microvilli and goblet cells).",
    "pdfSource": "histology",
    "pdfPage": 15
  },
  {
    "id": "hist-02-q55",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 55,
    "stem": "Which structure forms the brush border?",
    "options": [
      {
        "key": "a",
        "text": "Secretory granules."
      },
      {
        "key": "b",
        "text": "Basal body."
      },
      {
        "key": "c",
        "text": "Microvilli."
      },
      {
        "key": "d",
        "text": "Cilia."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 15)",
    "explanation": "Official Answer: (C) — Microvilli. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 15
  },
  {
    "id": "hist-02-q56",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 56,
    "stem": "An epithelial tissue having thin flat and closely packed cells that are arranged edge to edge are found in:",
    "options": [
      {
        "key": "a",
        "text": "The inner lining of blood vessels."
      },
      {
        "key": "b",
        "text": "The inner lining of the stomach."
      },
      {
        "key": "c",
        "text": "The inner lining of the fallopian tube."
      },
      {
        "key": "d",
        "text": "The inner surface of urinary bladder."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 15)",
    "explanation": "Official Answer: (A) — The inner lining of blood vessels. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 15
  },
  {
    "id": "hist-02-q57",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 57,
    "stem": "Tissue having very less or no intercellular matrix is",
    "options": [
      {
        "key": "a",
        "text": "Epithelial."
      },
      {
        "key": "b",
        "text": "Connective."
      },
      {
        "key": "c",
        "text": "Cardiac."
      },
      {
        "key": "d",
        "text": "Muscular."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 15)",
    "explanation": "Official Answer: (A) — Epithelial. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 15
  },
  {
    "id": "hist-02-q58",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 58,
    "stem": "The inner lining of the vagina, tip of urethra and esophagus is made up of",
    "options": [
      {
        "key": "a",
        "text": "Columnar epithelium."
      },
      {
        "key": "b",
        "text": "Stratified squamous epithelium."
      },
      {
        "key": "c",
        "text": "Squamous epithelium."
      },
      {
        "key": "d",
        "text": "Ciliated epithelium."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 15)",
    "explanation": "Official Answer: (B) — Stratified squamous epithelium. Stratified epithelia are specialized for protection against mechanical friction and are named according to the shape of their most superficial cell layer. Stratified squamous epithelium has basal columnar/cuboidal cells, intermediate polygonal cells linked by abundant desmosomes, and superficial flat squamous cells: it is keratinized in the epidermis of skin, and non-keratinized in wet surfaces (oral cavity, esophagus, vagina, anal canal). Sweat gland ducts are lined by stratified cuboidal epithelium (2 layers of cuboidal cells).",
    "pdfSource": "histology",
    "pdfPage": 15
  },
  {
    "id": "hist-02-q59",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 59,
    "stem": "The basement membrane, one of the following is false:",
    "options": [
      {
        "key": "a",
        "text": "Stains positively with (PAS)."
      },
      {
        "key": "b",
        "text": "Is composed of type IV collagen."
      },
      {
        "key": "c",
        "text": "Has basal lamina."
      },
      {
        "key": "d",
        "text": "Is produced by the connective tissue alone."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 16)",
    "explanation": "Official Answer: (D) — Is produced by the connective tissue alone. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 16
  },
  {
    "id": "hist-02-q60",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 60,
    "stem": "Transitional epithelium, one of the following is false:",
    "options": [
      {
        "key": "a",
        "text": "Lines the urinary bladder."
      },
      {
        "key": "b",
        "text": "Contains goblet cells."
      },
      {
        "key": "c",
        "text": "Is classified as a stratified epithelium."
      },
      {
        "key": "d",
        "text": "Has a non-clear basement membrane."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 16)",
    "explanation": "Official Answer: (B) — Contains goblet cells. Transitional epithelium (urothelium) is a stratified epithelium restricted to the urinary tract (renal calyces, pelvis, ureters, and urinary bladder). It rests on a very thin/non-clear basement membrane, lacks goblet cells and keratin, and features binucleated superficial umbrella (dome-shaped) cells interconnected by tight junctional complexes and thick luminal plaques that protect underlying tissues from hypertonic, cytotoxic urine while stretching from cuboidal/columnar to squamous as the bladder fills.",
    "pdfSource": "histology",
    "pdfPage": 16
  },
  {
    "id": "hist-02-q61",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 61,
    "stem": "Each of the following statements concerning the stratified squamous nonkeratinized epithelium is true, EXCEPT:",
    "options": [
      {
        "key": "a",
        "text": "Contains multiple cell layers."
      },
      {
        "key": "b",
        "text": "Contains the basal layer with columnar cells."
      },
      {
        "key": "c",
        "text": "Contains the superficial layer of flat cells."
      },
      {
        "key": "d",
        "text": "Lines the oral cavity, the esophagus, the rectum, and the vagina."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 16)",
    "explanation": "Official Answer: (D) — Lines the oral cavity, the esophagus, the rectum, and the vagina. Stratified epithelia are specialized for protection against mechanical friction and are named according to the shape of their most superficial cell layer. Stratified squamous epithelium has basal columnar/cuboidal cells, intermediate polygonal cells linked by abundant desmosomes, and superficial flat squamous cells: it is keratinized in the epidermis of skin, and non-keratinized in wet surfaces (oral cavity, esophagus, vagina, anal canal). Sweat gland ducts are lined by stratified cuboidal epithelium (2 layers of cuboidal cells).",
    "pdfSource": "histology",
    "pdfPage": 16
  },
  {
    "id": "hist-02-q62",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 62,
    "stem": "Each of the following statements concerning the transitional epithelium is true, EXCEPT:",
    "options": [
      {
        "key": "a",
        "text": "Is keratinized."
      },
      {
        "key": "b",
        "text": "Consists of the basal, intermediate, and superficial layers."
      },
      {
        "key": "c",
        "text": "Changes the number of its layers, depending on the degree of stretching."
      },
      {
        "key": "d",
        "text": "Its superficial cells are dome shaped."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 16)",
    "explanation": "Official Answer: (A) — Is keratinized. Transitional epithelium (urothelium) is a stratified epithelium restricted to the urinary tract (renal calyces, pelvis, ureters, and urinary bladder). It rests on a very thin/non-clear basement membrane, lacks goblet cells and keratin, and features binucleated superficial umbrella (dome-shaped) cells interconnected by tight junctional complexes and thick luminal plaques that protect underlying tissues from hypertonic, cytotoxic urine while stretching from cuboidal/columnar to squamous as the bladder fills. Stratified epithelia are specialized for protection against mechanical friction and are named according to the shape of their most superficial cell layer. Stratified squamous epithelium has basal columnar/cuboidal cells, intermediate polygonal cells linked by abundant desmosomes, and superficial flat squamous cells: it is keratinized in the epidermis of skin, and non-keratinized in wet surfaces (oral cavity, esophagus, vagina, anal canal). Sweat gland ducts are lined by stratified cuboidal epithelium (2 layers of cuboidal cells).",
    "pdfSource": "histology",
    "pdfPage": 16
  },
  {
    "id": "hist-02-q63",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 63,
    "stem": "Which type of epithelium are cells which are main site of gas exchange?",
    "options": [
      {
        "key": "a",
        "text": "Pseudostratified columnar epithelium."
      },
      {
        "key": "b",
        "text": "Simple cuboidal epithelium."
      },
      {
        "key": "c",
        "text": "Simple squamous epithelium."
      },
      {
        "key": "d",
        "text": "Transitional epithelium."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 16)",
    "explanation": "Official Answer: (C) — Simple squamous epithelium. Simple squamous epithelium consists of a single layer of thin, flat polygonal cells ideal for rapid filtration and gas exchange (lung alveoli, Bowman's capsule, endothelium of blood vessels, and mesothelium lining serous cavities: pleura, pericardium, peritoneum). Simple columnar epithelium lines the stomach (secretory, non-ciliated without goblet cells) and small/large intestines (absorptive with an apical striated/brush border of microvilli and goblet cells).",
    "pdfSource": "histology",
    "pdfPage": 16
  },
  {
    "id": "hist-02-q64",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 64,
    "stem": "Which organ contains stratified squamous epithelium with keratinization?",
    "options": [
      {
        "key": "a",
        "text": "Oral cavity."
      },
      {
        "key": "b",
        "text": "Esophagus."
      },
      {
        "key": "c",
        "text": "Trachea."
      },
      {
        "key": "d",
        "text": "Skin."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 16)",
    "explanation": "Official Answer: (D) — Skin. Stratified epithelia are specialized for protection against mechanical friction and are named according to the shape of their most superficial cell layer. Stratified squamous epithelium has basal columnar/cuboidal cells, intermediate polygonal cells linked by abundant desmosomes, and superficial flat squamous cells: it is keratinized in the epidermis of skin, and non-keratinized in wet surfaces (oral cavity, esophagus, vagina, anal canal). Sweat gland ducts are lined by stratified cuboidal epithelium (2 layers of cuboidal cells).",
    "pdfSource": "histology",
    "pdfPage": 16
  },
  {
    "id": "hist-02-q65",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 65,
    "stem": "Which type of collagen is the main part of basal lamina?",
    "options": [
      {
        "key": "a",
        "text": "Type I collagen."
      },
      {
        "key": "b",
        "text": "Type II collagen."
      },
      {
        "key": "c",
        "text": "Type III collagen."
      },
      {
        "key": "d",
        "text": "Type IV collagen."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 16)",
    "explanation": "Official Answer: (D) — Type IV collagen. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 16
  },
  {
    "id": "hist-02-q66",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 66,
    "stem": "Which type of epithelium is present epidermis?",
    "options": [
      {
        "key": "a",
        "text": "Stratified squamous epithelium without keratinization."
      },
      {
        "key": "b",
        "text": "Stratified squamous epithelium with keratinization."
      },
      {
        "key": "c",
        "text": "Secretory type of epithelium."
      },
      {
        "key": "d",
        "text": "Absorptive type of epithelium."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 16)",
    "explanation": "Official Answer: (B) — Stratified squamous epithelium with keratinization. Stratified epithelia are specialized for protection against mechanical friction and are named according to the shape of their most superficial cell layer. Stratified squamous epithelium has basal columnar/cuboidal cells, intermediate polygonal cells linked by abundant desmosomes, and superficial flat squamous cells: it is keratinized in the epidermis of skin, and non-keratinized in wet surfaces (oral cavity, esophagus, vagina, anal canal). Sweat gland ducts are lined by stratified cuboidal epithelium (2 layers of cuboidal cells).",
    "pdfSource": "histology",
    "pdfPage": 16
  },
  {
    "id": "hist-02-q67",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 67,
    "stem": "Epithelium of the bronchi is",
    "options": [
      {
        "key": "a",
        "text": "Cuboidal."
      },
      {
        "key": "b",
        "text": "Simple cuboidal."
      },
      {
        "key": "c",
        "text": "Simple squamous."
      },
      {
        "key": "d",
        "text": "Pseudo stratified columnar ciliated columnar."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 17)",
    "explanation": "Official Answer: (D) — Pseudo stratified columnar ciliated columnar. In pseudostratified columnar epithelium, all cells rest on the basement membrane (making it a single true layer), but not all cells reach the lumen, placing nuclei at multiple levels. Pseudostratified columnar ciliated epithelium with goblet cells (respiratory epithelium) lines the nasal cavity, trachea, and bronchi, whereas pseudostratified columnar epithelium with stereocilia (long, non-motile branched microvilli) lines the epididymis and vas deferens.",
    "pdfSource": "histology",
    "pdfPage": 17
  },
  {
    "id": "hist-02-q68",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 68,
    "stem": "How is a pseudostratified epithelium different from a truly stratified tissue?",
    "options": [
      {
        "key": "a",
        "text": "The nuclei are at the same level in pseudostratified epithelia."
      },
      {
        "key": "b",
        "text": "All cells reach apex."
      },
      {
        "key": "c",
        "text": "There are multiple cell layers in pseudostratified epithelia."
      },
      {
        "key": "d",
        "text": "All the cells in a pseudostratified epithelium interact with the basement membrane."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 17)",
    "explanation": "Official Answer: (B) — All cells reach apex. In pseudostratified columnar epithelium, all cells rest on the basement membrane (making it a single true layer), but not all cells reach the lumen, placing nuclei at multiple levels. Pseudostratified columnar ciliated epithelium with goblet cells (respiratory epithelium) lines the nasal cavity, trachea, and bronchi, whereas pseudostratified columnar epithelium with stereocilia (long, non-motile branched microvilli) lines the epididymis and vas deferens.",
    "pdfSource": "histology",
    "pdfPage": 17
  },
  {
    "id": "hist-02-q69",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 69,
    "stem": "The microvilli containing cells in functional aspect are:",
    "options": [
      {
        "key": "a",
        "text": "Covering."
      },
      {
        "key": "b",
        "text": "Stem."
      },
      {
        "key": "c",
        "text": "Secretory."
      },
      {
        "key": "d",
        "text": "Absorption."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 17)",
    "explanation": "Official Answer: (D) — Absorption. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 17
  },
  {
    "id": "hist-02-q70",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 70,
    "stem": "Pseudostratified columnar epithelium is evident in:",
    "options": [
      {
        "key": "a",
        "text": "Ureter."
      },
      {
        "key": "b",
        "text": "Vas deference."
      },
      {
        "key": "c",
        "text": "Small intestine."
      },
      {
        "key": "d",
        "text": "Esophagus."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 17)",
    "explanation": "Official Answer: (B) — Vas deference. In pseudostratified columnar epithelium, all cells rest on the basement membrane (making it a single true layer), but not all cells reach the lumen, placing nuclei at multiple levels. Pseudostratified columnar ciliated epithelium with goblet cells (respiratory epithelium) lines the nasal cavity, trachea, and bronchi, whereas pseudostratified columnar epithelium with stereocilia (long, non-motile branched microvilli) lines the epididymis and vas deferens.",
    "pdfSource": "histology",
    "pdfPage": 17
  },
  {
    "id": "hist-02-q71",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 71,
    "stem": "The epithelial cells connect to the basement membrane through:",
    "options": [
      {
        "key": "a",
        "text": "Gap junction."
      },
      {
        "key": "b",
        "text": "Desmosomes."
      },
      {
        "key": "c",
        "text": "Hemi-desmosomes."
      },
      {
        "key": "d",
        "text": "Zonula occludens."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 17)",
    "explanation": "Official Answer: (C) — Hemi-desmosomes. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 17
  },
  {
    "id": "hist-02-q72",
    "chapterId": "hist-02",
    "chapterNumber": 2,
    "subject": "Histology",
    "questionNumber": 72,
    "stem": "Which of the following specializations are described in the stratified epithelia:",
    "options": [
      {
        "key": "a",
        "text": "Microvilli."
      },
      {
        "key": "b",
        "text": "Cilia."
      },
      {
        "key": "c",
        "text": "Desmosomes."
      },
      {
        "key": "d",
        "text": "Gap junction."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Epithelial Tissue (PDF p. 17)",
    "explanation": "Official Answer: (C) — Desmosomes. A classical epithelial junctional complex consists of three structures from apical to basal: zonula occludens (tight junction where outer leaflets of adjacent membranes fuse to seal the paracellular space against free diffusion), zonula adherens, and macula adherens (desmosome, providing strong mechanical resistance via intermediate keratin filaments). Hemidesmosomes anchor basal epithelial cells to the basement membrane (which stains with PAS and silver, and consists of a type IV collagen basal lamina plus a reticular lamina). Gap junctions (nexus) allow direct passage of ions and electrical impulses between cells (e.g., cardiac and smooth muscle).",
    "pdfSource": "histology",
    "pdfPage": 17
  },
  {
    "id": "hist-03-q1",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 1,
    "stem": "Which cell is a connective tissue macrophage?",
    "options": [
      {
        "key": "a",
        "text": "Kupffer cells."
      },
      {
        "key": "b",
        "text": "Histiocyte."
      },
      {
        "key": "c",
        "text": "Dust cell."
      },
      {
        "key": "d",
        "text": "Langerhans cell."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 18)",
    "explanation": "Official Answer: (B) — Histiocyte. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 18
  },
  {
    "id": "hist-03-q2",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 2,
    "stem": "Which of the following can be classified as “specialized connective tissue”?",
    "options": [
      {
        "key": "a",
        "text": "Mesenchyme."
      },
      {
        "key": "b",
        "text": "Mucoid connective tissue."
      },
      {
        "key": "c",
        "text": "Dense connective tissue."
      },
      {
        "key": "d",
        "text": "Blood."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 18)",
    "explanation": "Official Answer: (D) — Blood. Connective tissue proper includes loose areolar C.T. (lies beneath epithelia and contains all C.T. cell and fiber types), mucoid C.T. (Wharton's jelly of the umbilical cord and vitreous humor of the eye), dense regular white fibrous C.T. (tendons and ligaments with parallel type I collagen bundles and rows of fibrocytes/tenocytes), dense irregular C.T. (reticular layer of the dermis and organ capsules), yellow elastic C.T. (large arteries like the aorta), and reticular C.T. (reticular fibers + reticular cells forming lymphoid/myeloid stroma). Cartilage, bone, and blood are classified as specialized connective tissues.",
    "pdfSource": "histology",
    "pdfPage": 18
  },
  {
    "id": "hist-03-q3",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 3,
    "stem": "Which of the following is NOT a fiber found in connective tissue?",
    "options": [
      {
        "key": "a",
        "text": "Collagen fiber."
      },
      {
        "key": "b",
        "text": "Elastic fiber."
      },
      {
        "key": "c",
        "text": "Reticular fiber."
      },
      {
        "key": "d",
        "text": "Purkinje fiber."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 18)",
    "explanation": "Official Answer: (D) — Purkinje fiber. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 18
  },
  {
    "id": "hist-03-q4",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 4,
    "stem": "What type of tissue makes up the dermis of the skin?",
    "options": [
      {
        "key": "a",
        "text": "Mucous connective tissue."
      },
      {
        "key": "b",
        "text": "Reticular connective tissue."
      },
      {
        "key": "c",
        "text": "Dense regular connective tissue."
      },
      {
        "key": "d",
        "text": "Dense irregular connective tissue."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 18)",
    "explanation": "Official Answer: (D) — Dense irregular connective tissue. Connective tissue proper includes loose areolar C.T. (lies beneath epithelia and contains all C.T. cell and fiber types), mucoid C.T. (Wharton's jelly of the umbilical cord and vitreous humor of the eye), dense regular white fibrous C.T. (tendons and ligaments with parallel type I collagen bundles and rows of fibrocytes/tenocytes), dense irregular C.T. (reticular layer of the dermis and organ capsules), yellow elastic C.T. (large arteries like the aorta), and reticular C.T. (reticular fibers + reticular cells forming lymphoid/myeloid stroma). Cartilage, bone, and blood are classified as specialized connective tissues.",
    "pdfSource": "histology",
    "pdfPage": 18
  },
  {
    "id": "hist-03-q5",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 5,
    "stem": "What type of adipose tissue tends to increase as humans age?",
    "options": [
      {
        "key": "a",
        "text": "Brown adipose tissue."
      },
      {
        "key": "b",
        "text": "White adipose tissue."
      },
      {
        "key": "c",
        "text": "Unilocular adipose tissue."
      },
      {
        "key": "d",
        "text": "Both b and c."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 18)",
    "explanation": "Official Answer: (D) — Both b and c. Adipose tissue is stained orange/red by Sudan III. Unilocular (white) adipocytes contain a single large lipid droplet that pushes the flattened nucleus to the periphery (signet-ring appearance) and increase in number/size with age. Multilocular (brown) adipocytes contain multiple small lipid droplets, a central spherical nucleus, and abundant mitochondria rich in cytochrome oxidase (which, along with rich blood vessels, gives brown fat its color) and thermogenin (UCP-1), generating heat by non-shivering thermogenesis in newborns.",
    "pdfSource": "histology",
    "pdfPage": 18
  },
  {
    "id": "hist-03-q6",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 6,
    "stem": "Which of the following would be best suited to differentiate collagen fibers from other fibers?",
    "options": [
      {
        "key": "a",
        "text": "Mallory trichrome stain."
      },
      {
        "key": "b",
        "text": "Hematoxylin and eosin stain."
      },
      {
        "key": "c",
        "text": "Sudan stain."
      },
      {
        "key": "d",
        "text": "Silver stain."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 18)",
    "explanation": "Official Answer: (A) — Mallory trichrome stain. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 18
  },
  {
    "id": "hist-03-q7",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 7,
    "stem": "The type of connective tissue present in tendon is called:",
    "options": [
      {
        "key": "a",
        "text": "White adipose."
      },
      {
        "key": "b",
        "text": "Brown adipose."
      },
      {
        "key": "c",
        "text": "White fibrous."
      },
      {
        "key": "d",
        "text": "Mucoid."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Connective Tissue (PDF p. 18)",
    "explanation": "Official Answer: (C) — White fibrous. Connective tissue proper includes loose areolar C.T. (lies beneath epithelia and contains all C.T. cell and fiber types), mucoid C.T. (Wharton's jelly of the umbilical cord and vitreous humor of the eye), dense regular white fibrous C.T. (tendons and ligaments with parallel type I collagen bundles and rows of fibrocytes/tenocytes), dense irregular C.T. (reticular layer of the dermis and organ capsules), yellow elastic C.T. (large arteries like the aorta), and reticular C.T. (reticular fibers + reticular cells forming lymphoid/myeloid stroma). Cartilage, bone, and blood are classified as specialized connective tissues.",
    "pdfSource": "histology",
    "pdfPage": 18
  },
  {
    "id": "hist-03-q8",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 8,
    "stem": "Which one of these cells is not a cell type routinely found in loose connective tissue?",
    "options": [
      {
        "key": "a",
        "text": "Fibroblast."
      },
      {
        "key": "b",
        "text": "Microglia."
      },
      {
        "key": "c",
        "text": "Histiocyte."
      },
      {
        "key": "d",
        "text": "Plasma cell."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 18)",
    "explanation": "Official Answer: (B) — Microglia. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 18
  },
  {
    "id": "hist-03-q9",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 9,
    "stem": "Which of the following can be classified as “specialized connective tissue”?",
    "options": [
      {
        "key": "a",
        "text": "Cartilage."
      },
      {
        "key": "b",
        "text": "Loose connective tissue."
      },
      {
        "key": "c",
        "text": "Mesenchyme."
      },
      {
        "key": "d",
        "text": "Dense connective tissue."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 18)",
    "explanation": "Official Answer: (A) — Cartilage. Connective tissue proper includes loose areolar C.T. (lies beneath epithelia and contains all C.T. cell and fiber types), mucoid C.T. (Wharton's jelly of the umbilical cord and vitreous humor of the eye), dense regular white fibrous C.T. (tendons and ligaments with parallel type I collagen bundles and rows of fibrocytes/tenocytes), dense irregular C.T. (reticular layer of the dermis and organ capsules), yellow elastic C.T. (large arteries like the aorta), and reticular C.T. (reticular fibers + reticular cells forming lymphoid/myeloid stroma). Cartilage, bone, and blood are classified as specialized connective tissues.",
    "pdfSource": "histology",
    "pdfPage": 18
  },
  {
    "id": "hist-03-q10",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 10,
    "stem": "Which of the following can be classified as “connective tissue proper”?",
    "options": [
      {
        "key": "a",
        "text": "Cartilage."
      },
      {
        "key": "b",
        "text": "Dense irregular connective tissue."
      },
      {
        "key": "c",
        "text": "Bone."
      },
      {
        "key": "d",
        "text": "Blood."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 18)",
    "explanation": "Official Answer: (B) — Dense irregular connective tissue. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 18
  },
  {
    "id": "hist-03-q11",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 11,
    "stem": "What type of tissue is Wharton’s jelly?",
    "options": [
      {
        "key": "a",
        "text": "Mucoid connective tissue."
      },
      {
        "key": "b",
        "text": "Mesenchyme."
      },
      {
        "key": "c",
        "text": "Loose irregular connective tissue."
      },
      {
        "key": "d",
        "text": "Dense irregular connective tissue."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 18)",
    "explanation": "Official Answer: (A) — Mucoid connective tissue. Connective tissue proper includes loose areolar C.T. (lies beneath epithelia and contains all C.T. cell and fiber types), mucoid C.T. (Wharton's jelly of the umbilical cord and vitreous humor of the eye), dense regular white fibrous C.T. (tendons and ligaments with parallel type I collagen bundles and rows of fibrocytes/tenocytes), dense irregular C.T. (reticular layer of the dermis and organ capsules), yellow elastic C.T. (large arteries like the aorta), and reticular C.T. (reticular fibers + reticular cells forming lymphoid/myeloid stroma). Cartilage, bone, and blood are classified as specialized connective tissues.",
    "pdfSource": "histology",
    "pdfPage": 18
  },
  {
    "id": "hist-03-q12",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 12,
    "stem": "What type of tissue is a tendon composed of?",
    "options": [
      {
        "key": "a",
        "text": "Mucous connective tissue."
      },
      {
        "key": "b",
        "text": "Dense regular connective tissue."
      },
      {
        "key": "c",
        "text": "Loose irregular connective tissue."
      },
      {
        "key": "d",
        "text": "Dense irregular connective tissue."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 19)",
    "explanation": "Official Answer: (B) — Dense regular connective tissue. Connective tissue proper includes loose areolar C.T. (lies beneath epithelia and contains all C.T. cell and fiber types), mucoid C.T. (Wharton's jelly of the umbilical cord and vitreous humor of the eye), dense regular white fibrous C.T. (tendons and ligaments with parallel type I collagen bundles and rows of fibrocytes/tenocytes), dense irregular C.T. (reticular layer of the dermis and organ capsules), yellow elastic C.T. (large arteries like the aorta), and reticular C.T. (reticular fibers + reticular cells forming lymphoid/myeloid stroma). Cartilage, bone, and blood are classified as specialized connective tissues.",
    "pdfSource": "histology",
    "pdfPage": 19
  },
  {
    "id": "hist-03-q13",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 13,
    "stem": "What does connective tissue develop from?",
    "options": [
      {
        "key": "a",
        "text": "Mesothelium."
      },
      {
        "key": "b",
        "text": "Mesenchyme."
      },
      {
        "key": "c",
        "text": "Mesangial cells."
      },
      {
        "key": "d",
        "text": "Mesentery."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 19)",
    "explanation": "Official Answer: (B) — Mesenchyme. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 19
  },
  {
    "id": "hist-03-q14",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 14,
    "stem": "What color do elastic fibers stain with Van Gieson stain?",
    "options": [
      {
        "key": "a",
        "text": "Red/Orange."
      },
      {
        "key": "b",
        "text": "Pink/red."
      },
      {
        "key": "c",
        "text": "Purple/Red."
      },
      {
        "key": "d",
        "text": "Yellow."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 19)",
    "explanation": "Official Answer: (D) — Yellow. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 19
  },
  {
    "id": "hist-03-q15",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 15,
    "stem": "Which of the following is NOT primarily composed of connective tissue?",
    "options": [
      {
        "key": "a",
        "text": "Brain."
      },
      {
        "key": "b",
        "text": "Organ capsule."
      },
      {
        "key": "c",
        "text": "Ligament."
      },
      {
        "key": "d",
        "text": "Areolar tissue."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 19)",
    "explanation": "Official Answer: (A) — Brain. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 19
  },
  {
    "id": "hist-03-q16",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 16,
    "stem": "Which connective tissue cell type produces the ground substance in connective tissue?",
    "options": [
      {
        "key": "a",
        "text": "Fibroblast."
      },
      {
        "key": "b",
        "text": "Mast cell."
      },
      {
        "key": "c",
        "text": "Histiocyte."
      },
      {
        "key": "d",
        "text": "Plasma cell."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 19)",
    "explanation": "Official Answer: (A) — Fibroblast. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 19
  },
  {
    "id": "hist-03-q17",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 17,
    "stem": "Which connective tissue cell is derived from B lymphocytes?",
    "options": [
      {
        "key": "a",
        "text": "Fibroblast."
      },
      {
        "key": "b",
        "text": "Mast cell."
      },
      {
        "key": "c",
        "text": "Histiocyte."
      },
      {
        "key": "d",
        "text": "Plasma cell."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 19)",
    "explanation": "Official Answer: (D) — Plasma cell. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 19
  },
  {
    "id": "hist-03-q18",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 18,
    "stem": "Embryonic ectoderm develops into which of the following major tissue types?",
    "options": [
      {
        "key": "a",
        "text": "Connective and epithelial tissue."
      },
      {
        "key": "b",
        "text": "Connective and muscle tissue."
      },
      {
        "key": "c",
        "text": "Muscle tissue and epithelial tissue."
      },
      {
        "key": "d",
        "text": "Epithelial tissue and nervous tissue."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 19)",
    "explanation": "Official Answer: (D) — Epithelial tissue and nervous tissue. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 19
  },
  {
    "id": "hist-03-q19",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 19,
    "stem": "Which of the following cells has metachromatic granules:",
    "options": [
      {
        "key": "a",
        "text": "Mast cells & Lymphocytes."
      },
      {
        "key": "b",
        "text": "Mast cells & basophils."
      },
      {
        "key": "c",
        "text": "Mast cells & Plasma cells."
      },
      {
        "key": "d",
        "text": "Mast cells."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 19)",
    "explanation": "Official Answer: (B) — Mast cells & basophils. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 19
  },
  {
    "id": "hist-03-q20",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 20,
    "stem": "The histiocyte stem cells:",
    "options": [
      {
        "key": "a",
        "text": "Plasmablast."
      },
      {
        "key": "b",
        "text": "Monocyte."
      },
      {
        "key": "c",
        "text": "Lymphocyte."
      },
      {
        "key": "d",
        "text": "Basophile cells."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 19)",
    "explanation": "Official Answer: (B) — Monocyte. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 19
  },
  {
    "id": "hist-03-q21",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 21,
    "stem": "The most abundant type of collagen in the human body is:",
    "options": [
      {
        "key": "a",
        "text": "Type I."
      },
      {
        "key": "b",
        "text": "Type II."
      },
      {
        "key": "c",
        "text": "Type III."
      },
      {
        "key": "d",
        "text": "Type IV."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 19)",
    "explanation": "Official Answer: (A) — Type I. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 19
  },
  {
    "id": "hist-03-q22",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 22,
    "stem": "Which of the following is not associated with connective tissue?",
    "options": [
      {
        "key": "a",
        "text": "Tightly packed cells."
      },
      {
        "key": "b",
        "text": "Extracellular fibers."
      },
      {
        "key": "c",
        "text": "Blood vessels."
      },
      {
        "key": "d",
        "text": "Ground substance."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 19)",
    "explanation": "Official Answer: (A) — Tightly packed cells. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 19
  },
  {
    "id": "hist-03-q23",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 23,
    "stem": "Which of the following would be best suited to visualize lipid?",
    "options": [
      {
        "key": "a",
        "text": "Orcein stain."
      },
      {
        "key": "b",
        "text": "Hematoxylin and eosin stain."
      },
      {
        "key": "c",
        "text": "Sudan III stain."
      },
      {
        "key": "d",
        "text": "Silver stain."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Connective Tissue (PDF p. 19)",
    "explanation": "Official Answer: (C) — Sudan III stain. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain. Adipose tissue is stained orange/red by Sudan III. Unilocular (white) adipocytes contain a single large lipid droplet that pushes the flattened nucleus to the periphery (signet-ring appearance) and increase in number/size with age. Multilocular (brown) adipocytes contain multiple small lipid droplets, a central spherical nucleus, and abundant mitochondria rich in cytochrome oxidase (which, along with rich blood vessels, gives brown fat its color) and thermogenin (UCP-1), generating heat by non-shivering thermogenesis in newborns.",
    "pdfSource": "histology",
    "pdfPage": 19
  },
  {
    "id": "hist-03-q24",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 24,
    "stem": "Which is the most abundant fiber in connective tissue?",
    "options": [
      {
        "key": "a",
        "text": "Collagen fiber."
      },
      {
        "key": "b",
        "text": "Elastic fiber."
      },
      {
        "key": "c",
        "text": "Reticular fiber."
      },
      {
        "key": "d",
        "text": "Purkinje fiber."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 20)",
    "explanation": "Official Answer: (A) — Collagen fiber. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 20
  },
  {
    "id": "hist-03-q25",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 25,
    "stem": "Which connective tissue cell type produces collagen?",
    "options": [
      {
        "key": "a",
        "text": "Fibroblast."
      },
      {
        "key": "b",
        "text": "Connective tissue macrophage."
      },
      {
        "key": "c",
        "text": "Histiocyte."
      },
      {
        "key": "d",
        "text": "Plasma cell."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 20)",
    "explanation": "Official Answer: (A) — Fibroblast. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis). Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 20
  },
  {
    "id": "hist-03-q26",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 26,
    "stem": "Which connective tissue cell type secretes histamine?",
    "options": [
      {
        "key": "a",
        "text": "Fibroblast."
      },
      {
        "key": "b",
        "text": "Fibrocyte."
      },
      {
        "key": "c",
        "text": "Mast cell."
      },
      {
        "key": "d",
        "text": "Plasma cell."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Connective Tissue (PDF p. 20)",
    "explanation": "Official Answer: (C) — Mast cell. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 20
  },
  {
    "id": "hist-03-q27",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 27,
    "stem": "Which of the following would be best suited to visualize reticular fibers?",
    "options": [
      {
        "key": "a",
        "text": "Mallory trichrome stain."
      },
      {
        "key": "b",
        "text": "Hematoxylin and eosin stain."
      },
      {
        "key": "c",
        "text": "Sudan III stain."
      },
      {
        "key": "d",
        "text": "Silver stain."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 20)",
    "explanation": "Official Answer: (D) — Silver stain. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 20
  },
  {
    "id": "hist-03-q28",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 28,
    "stem": "Which of the following functions is not characteristic of connective tissue:",
    "options": [
      {
        "key": "a",
        "text": "Support for epithelia."
      },
      {
        "key": "b",
        "text": "Seat of immune reactions."
      },
      {
        "key": "c",
        "text": "Diffusion of nutrient."
      },
      {
        "key": "d",
        "text": "Contraction."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 20)",
    "explanation": "Official Answer: (D) — Contraction. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 20
  },
  {
    "id": "hist-03-q29",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 29,
    "stem": "Which of the following cells has the mission of producing heat:",
    "options": [
      {
        "key": "a",
        "text": "Plasma cells."
      },
      {
        "key": "b",
        "text": "White adipocytes."
      },
      {
        "key": "c",
        "text": "Brown adipocytes"
      },
      {
        "key": "d",
        "text": "Mast cells."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Connective Tissue (PDF p. 20)",
    "explanation": "Official Answer: (C) — Brown adipocytes Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis). Adipose tissue is stained orange/red by Sudan III. Unilocular (white) adipocytes contain a single large lipid droplet that pushes the flattened nucleus to the periphery (signet-ring appearance) and increase in number/size with age. Multilocular (brown) adipocytes contain multiple small lipid droplets, a central spherical nucleus, and abundant mitochondria rich in cytochrome oxidase (which, along with rich blood vessels, gives brown fat its color) and thermogenin (UCP-1), generating heat by non-shivering thermogenesis in newborns.",
    "pdfSource": "histology",
    "pdfPage": 20
  },
  {
    "id": "hist-03-q30",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 30,
    "stem": "Which of the following cells of the connective tissue is richest in rER:",
    "options": [
      {
        "key": "a",
        "text": "Fibrocytes."
      },
      {
        "key": "b",
        "text": "Monocytes."
      },
      {
        "key": "c",
        "text": "Plasma cells."
      },
      {
        "key": "d",
        "text": "Adipocytes."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Connective Tissue (PDF p. 20)",
    "explanation": "Official Answer: (C) — Plasma cells. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 20
  },
  {
    "id": "hist-03-q31",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 31,
    "stem": "The Type of C.T. contains all types of C.T. cells & fibers is called:",
    "options": [
      {
        "key": "a",
        "text": "Loose areolar C.T."
      },
      {
        "key": "b",
        "text": "Adipose C.T."
      },
      {
        "key": "c",
        "text": "White fibrous C.T."
      },
      {
        "key": "d",
        "text": "Mucoid C.T."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 20)",
    "explanation": "Official Answer: (A) — Loose areolar C.T. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis). Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain. Connective tissue proper includes loose areolar C.T. (lies beneath epithelia and contains all C.T. cell and fiber types), mucoid C.T. (Wharton's jelly of the umbilical cord and vitreous humor of the eye), dense regular white fibrous C.T. (tendons and ligaments with parallel type I collagen bundles and rows of fibrocytes/tenocytes), dense irregular C.T. (reticular layer of the dermis and organ capsules), yellow elastic C.T. (large arteries like the aorta), and reticular C.T. (reticular fibers + reticular cells forming lymphoid/myeloid stroma). Cartilage, bone, and blood are classified as specialized connective tissues.",
    "pdfSource": "histology",
    "pdfPage": 20
  },
  {
    "id": "hist-03-q32",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 32,
    "stem": "The following is a character of connective tissue:",
    "options": [
      {
        "key": "a",
        "text": "Formed of crowded cells."
      },
      {
        "key": "b",
        "text": "Mesodermal in origin."
      },
      {
        "key": "c",
        "text": "Non-vascular."
      },
      {
        "key": "d",
        "text": "Tightly joined cells."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 20)",
    "explanation": "Official Answer: (B) — Mesodermal in origin. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 20
  },
  {
    "id": "hist-03-q33",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 33,
    "stem": "The following C.T. cells are a protein secreting cells:",
    "options": [
      {
        "key": "a",
        "text": "Fat and macrophage cells."
      },
      {
        "key": "b",
        "text": "Fat and fibroblast cell."
      },
      {
        "key": "c",
        "text": "Macrophage and plasma cells."
      },
      {
        "key": "d",
        "text": "Fibroblast and plasma cells."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 20)",
    "explanation": "Official Answer: (D) — Fibroblast and plasma cells. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 20
  },
  {
    "id": "hist-03-q34",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 34,
    "stem": "The following is a character of multilocular adipocyte:",
    "options": [
      {
        "key": "a",
        "text": "Has membrane-bound granule filling the cytoplasm."
      },
      {
        "key": "b",
        "text": "Has flattened peripheral nucleus."
      },
      {
        "key": "c",
        "text": "Function is heat generation."
      },
      {
        "key": "d",
        "text": "Most abundant in white adipose C.T."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Connective Tissue (PDF p. 20)",
    "explanation": "Official Answer: (C) — Function is heat generation. Adipose tissue is stained orange/red by Sudan III. Unilocular (white) adipocytes contain a single large lipid droplet that pushes the flattened nucleus to the periphery (signet-ring appearance) and increase in number/size with age. Multilocular (brown) adipocytes contain multiple small lipid droplets, a central spherical nucleus, and abundant mitochondria rich in cytochrome oxidase (which, along with rich blood vessels, gives brown fat its color) and thermogenin (UCP-1), generating heat by non-shivering thermogenesis in newborns.",
    "pdfSource": "histology",
    "pdfPage": 20
  },
  {
    "id": "hist-03-q35",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 35,
    "stem": "After injury of adult C.T., the following cells differentiate for C.T. repair:",
    "options": [
      {
        "key": "a",
        "text": "Mast cells & Fibroblasts."
      },
      {
        "key": "b",
        "text": "Pericytes & Fibroblasts."
      },
      {
        "key": "c",
        "text": "Reticular cells & Histiocytes."
      },
      {
        "key": "d",
        "text": "Reticular cells & plasma cells."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 21)",
    "explanation": "Official Answer: (B) — Pericytes & Fibroblasts. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 21
  },
  {
    "id": "hist-03-q36",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 36,
    "stem": "The type III collagen fibers are secreted by the following cells:",
    "options": [
      {
        "key": "a",
        "text": "Fibroblasts, macrophage cells."
      },
      {
        "key": "b",
        "text": "Fibroblasts & reticular cells."
      },
      {
        "key": "c",
        "text": "Fibroblasts & mast cells."
      },
      {
        "key": "d",
        "text": "Fibroblasts & plasma cells."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 21)",
    "explanation": "Official Answer: (B) — Fibroblasts & reticular cells. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis). Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 21
  },
  {
    "id": "hist-03-q37",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 37,
    "stem": "A young child was suffering from bleeding gums and non-healing wounds. This disease may be due to the defective synthesis of:",
    "options": [
      {
        "key": "a",
        "text": "Extracellular matrix."
      },
      {
        "key": "b",
        "text": "Collagen fibers."
      },
      {
        "key": "c",
        "text": "Reticular fibers."
      },
      {
        "key": "d",
        "text": "Elastic fibers."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 21)",
    "explanation": "Official Answer: (B) — Collagen fibers. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 21
  },
  {
    "id": "hist-03-q38",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 38,
    "stem": "Elastic fibers are characterized by being:",
    "options": [
      {
        "key": "a",
        "text": "Arranged into bundles."
      },
      {
        "key": "b",
        "text": "Stained brown with orcein stain."
      },
      {
        "key": "c",
        "text": "Not demonstrated with H&E."
      },
      {
        "key": "d",
        "text": "Show transverse striations."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 21)",
    "explanation": "Official Answer: (B) — Stained brown with orcein stain. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain. Adipose tissue is stained orange/red by Sudan III. Unilocular (white) adipocytes contain a single large lipid droplet that pushes the flattened nucleus to the periphery (signet-ring appearance) and increase in number/size with age. Multilocular (brown) adipocytes contain multiple small lipid droplets, a central spherical nucleus, and abundant mitochondria rich in cytochrome oxidase (which, along with rich blood vessels, gives brown fat its color) and thermogenin (UCP-1), generating heat by non-shivering thermogenesis in newborns.",
    "pdfSource": "histology",
    "pdfPage": 21
  },
  {
    "id": "hist-03-q39",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 39,
    "stem": "After receiving Penicillin injection, a patient suffered from allergic reaction which is probably due to secretion of:",
    "options": [
      {
        "key": "a",
        "text": "Growth factors by fibroblasts."
      },
      {
        "key": "b",
        "text": "Lipid by adipocytes."
      },
      {
        "key": "c",
        "text": "Antibodies by plasma cells."
      },
      {
        "key": "d",
        "text": "Histamine by mast cells."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 21)",
    "explanation": "Official Answer: (D) — Histamine by mast cells. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 21
  },
  {
    "id": "hist-03-q40",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 40,
    "stem": "What type of tissue is a ligament composed of?",
    "options": [
      {
        "key": "a",
        "text": "Mucous connective tissue."
      },
      {
        "key": "b",
        "text": "Loose irregular connective tissue."
      },
      {
        "key": "c",
        "text": "Dense irregular connective tissue."
      },
      {
        "key": "d",
        "text": "Dense regular connective tissue."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Connective Tissue (PDF p. 21)",
    "explanation": "Official Answer: (C) — Dense irregular connective tissue. Connective tissue proper includes loose areolar C.T. (lies beneath epithelia and contains all C.T. cell and fiber types), mucoid C.T. (Wharton's jelly of the umbilical cord and vitreous humor of the eye), dense regular white fibrous C.T. (tendons and ligaments with parallel type I collagen bundles and rows of fibrocytes/tenocytes), dense irregular C.T. (reticular layer of the dermis and organ capsules), yellow elastic C.T. (large arteries like the aorta), and reticular C.T. (reticular fibers + reticular cells forming lymphoid/myeloid stroma). Cartilage, bone, and blood are classified as specialized connective tissues.",
    "pdfSource": "histology",
    "pdfPage": 21
  },
  {
    "id": "hist-03-q41",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 41,
    "stem": "What type of adipose tissue tends to decrease as humans age?",
    "options": [
      {
        "key": "a",
        "text": "Both white & brown adipose tissue."
      },
      {
        "key": "b",
        "text": "White adipose tissue."
      },
      {
        "key": "c",
        "text": "Unilocular adipose tissue."
      },
      {
        "key": "d",
        "text": "Multilocular adipose tissue."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 21)",
    "explanation": "Official Answer: (D) — Multilocular adipose tissue. Adipose tissue is stained orange/red by Sudan III. Unilocular (white) adipocytes contain a single large lipid droplet that pushes the flattened nucleus to the periphery (signet-ring appearance) and increase in number/size with age. Multilocular (brown) adipocytes contain multiple small lipid droplets, a central spherical nucleus, and abundant mitochondria rich in cytochrome oxidase (which, along with rich blood vessels, gives brown fat its color) and thermogenin (UCP-1), generating heat by non-shivering thermogenesis in newborns.",
    "pdfSource": "histology",
    "pdfPage": 21
  },
  {
    "id": "hist-03-q42",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 42,
    "stem": "What type of tissue makes up the reticular layer of dermis of the skin?",
    "options": [
      {
        "key": "a",
        "text": "Dense regular connective tissue."
      },
      {
        "key": "b",
        "text": "Reticular connective tissue."
      },
      {
        "key": "c",
        "text": "Loose irregular connective tissue."
      },
      {
        "key": "d",
        "text": "Dense irregular connective tissue."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 21)",
    "explanation": "Official Answer: (D) — Dense irregular connective tissue. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain. Connective tissue proper includes loose areolar C.T. (lies beneath epithelia and contains all C.T. cell and fiber types), mucoid C.T. (Wharton's jelly of the umbilical cord and vitreous humor of the eye), dense regular white fibrous C.T. (tendons and ligaments with parallel type I collagen bundles and rows of fibrocytes/tenocytes), dense irregular C.T. (reticular layer of the dermis and organ capsules), yellow elastic C.T. (large arteries like the aorta), and reticular C.T. (reticular fibers + reticular cells forming lymphoid/myeloid stroma). Cartilage, bone, and blood are classified as specialized connective tissues.",
    "pdfSource": "histology",
    "pdfPage": 21
  },
  {
    "id": "hist-03-q43",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 43,
    "stem": "Multilocular fat cells are characterized by:",
    "options": [
      {
        "key": "a",
        "text": "They have signet ring appearance."
      },
      {
        "key": "b",
        "text": "They are heat insulator."
      },
      {
        "key": "c",
        "text": "Affected by starvation."
      },
      {
        "key": "d",
        "text": "Abundant mitochondria."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 21)",
    "explanation": "Official Answer: (D) — Abundant mitochondria. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis). Adipose tissue is stained orange/red by Sudan III. Unilocular (white) adipocytes contain a single large lipid droplet that pushes the flattened nucleus to the periphery (signet-ring appearance) and increase in number/size with age. Multilocular (brown) adipocytes contain multiple small lipid droplets, a central spherical nucleus, and abundant mitochondria rich in cytochrome oxidase (which, along with rich blood vessels, gives brown fat its color) and thermogenin (UCP-1), generating heat by non-shivering thermogenesis in newborns.",
    "pdfSource": "histology",
    "pdfPage": 21
  },
  {
    "id": "hist-03-q44",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 44,
    "stem": "A section in the tendon shows all the following features except:",
    "options": [
      {
        "key": "a",
        "text": "Minimal intercellular substance."
      },
      {
        "key": "b",
        "text": "Many macrophages and mast cells."
      },
      {
        "key": "c",
        "text": "Parallel collagen bundles."
      },
      {
        "key": "d",
        "text": "Regular white fibrous connective tissue."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 21)",
    "explanation": "Official Answer: (B) — Many macrophages and mast cells. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis). Connective tissue proper includes loose areolar C.T. (lies beneath epithelia and contains all C.T. cell and fiber types), mucoid C.T. (Wharton's jelly of the umbilical cord and vitreous humor of the eye), dense regular white fibrous C.T. (tendons and ligaments with parallel type I collagen bundles and rows of fibrocytes/tenocytes), dense irregular C.T. (reticular layer of the dermis and organ capsules), yellow elastic C.T. (large arteries like the aorta), and reticular C.T. (reticular fibers + reticular cells forming lymphoid/myeloid stroma). Cartilage, bone, and blood are classified as specialized connective tissues.",
    "pdfSource": "histology",
    "pdfPage": 21
  },
  {
    "id": "hist-03-q45",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 45,
    "stem": "All of the following about pericytes are correct except:",
    "options": [
      {
        "key": "a",
        "text": "Can differentiate into macrophages."
      },
      {
        "key": "b",
        "text": "Regulate blood flow through the capillaries."
      },
      {
        "key": "c",
        "text": "Are located along capillaries."
      },
      {
        "key": "d",
        "text": "Can differentiate to endothelial cells and smooth muscle cells."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 22)",
    "explanation": "Official Answer: (A) — Can differentiate into macrophages. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 22
  },
  {
    "id": "hist-03-q46",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 46,
    "stem": "One of the following is true about fibroblasts:",
    "options": [
      {
        "key": "a",
        "text": "Can differentiate to endothelial cells and smooth muscle cells."
      },
      {
        "key": "b",
        "text": "Secrete collagen and elastic fibers."
      },
      {
        "key": "c",
        "text": "Large cubical cells."
      },
      {
        "key": "d",
        "text": "Responsible for storage of fat."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 22)",
    "explanation": "Official Answer: (B) — Secrete collagen and elastic fibers. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis). Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 22
  },
  {
    "id": "hist-03-q47",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 47,
    "stem": "Vitreous humor of the eye is formed of:",
    "options": [
      {
        "key": "a",
        "text": "Yellow elastic C.T."
      },
      {
        "key": "b",
        "text": "Reticular C.T."
      },
      {
        "key": "c",
        "text": "Mucoid C.T."
      },
      {
        "key": "d",
        "text": "Irregular white fibrous C.T."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Connective Tissue (PDF p. 22)",
    "explanation": "Official Answer: (C) — Mucoid C.T. Connective tissue proper includes loose areolar C.T. (lies beneath epithelia and contains all C.T. cell and fiber types), mucoid C.T. (Wharton's jelly of the umbilical cord and vitreous humor of the eye), dense regular white fibrous C.T. (tendons and ligaments with parallel type I collagen bundles and rows of fibrocytes/tenocytes), dense irregular C.T. (reticular layer of the dermis and organ capsules), yellow elastic C.T. (large arteries like the aorta), and reticular C.T. (reticular fibers + reticular cells forming lymphoid/myeloid stroma). Cartilage, bone, and blood are classified as specialized connective tissues.",
    "pdfSource": "histology",
    "pdfPage": 22
  },
  {
    "id": "hist-03-q48",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 48,
    "stem": "Vital stain is used to detect the following cell:",
    "options": [
      {
        "key": "a",
        "text": "Plasma cell."
      },
      {
        "key": "b",
        "text": "Reticular cell."
      },
      {
        "key": "c",
        "text": "Macrophage cell."
      },
      {
        "key": "d",
        "text": "Mast cells."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Connective Tissue (PDF p. 22)",
    "explanation": "Official Answer: (C) — Macrophage cell. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis). Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 22
  },
  {
    "id": "hist-03-q49",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 49,
    "stem": "Regarding dense irregular connective tissue:",
    "options": [
      {
        "key": "a",
        "text": "It is highly vascular."
      },
      {
        "key": "b",
        "text": "It is highly cellular."
      },
      {
        "key": "c",
        "text": "Its main fiber type is collagen."
      },
      {
        "key": "d",
        "text": "It has a large amount of ground substance."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Connective Tissue (PDF p. 22)",
    "explanation": "Official Answer: (C) — Its main fiber type is collagen. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 22
  },
  {
    "id": "hist-03-q50",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 50,
    "stem": "Regarding loose areolar connective tissue:",
    "options": [
      {
        "key": "a",
        "text": "It is found below epithelium."
      },
      {
        "key": "b",
        "text": "Condensed with fibers."
      },
      {
        "key": "c",
        "text": "It is avascular."
      },
      {
        "key": "d",
        "text": "It has little ground substance."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 22)",
    "explanation": "Official Answer: (A) — It is found below epithelium. Connective tissue proper includes loose areolar C.T. (lies beneath epithelia and contains all C.T. cell and fiber types), mucoid C.T. (Wharton's jelly of the umbilical cord and vitreous humor of the eye), dense regular white fibrous C.T. (tendons and ligaments with parallel type I collagen bundles and rows of fibrocytes/tenocytes), dense irregular C.T. (reticular layer of the dermis and organ capsules), yellow elastic C.T. (large arteries like the aorta), and reticular C.T. (reticular fibers + reticular cells forming lymphoid/myeloid stroma). Cartilage, bone, and blood are classified as specialized connective tissues.",
    "pdfSource": "histology",
    "pdfPage": 22
  },
  {
    "id": "hist-03-q51",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 51,
    "stem": "Regarding fibroblasts all of the following are true except:",
    "options": [
      {
        "key": "a",
        "text": "Are rare cells in connective tissue."
      },
      {
        "key": "b",
        "text": "Produce collagen fibers."
      },
      {
        "key": "c",
        "text": "Are the main cell type in dense connective tissue."
      },
      {
        "key": "d",
        "text": "Cannot undergo cell division."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 22)",
    "explanation": "Official Answer: (A) — Are rare cells in connective tissue. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 22
  },
  {
    "id": "hist-03-q52",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 52,
    "stem": "Epithelial and connective tissue differ from each other in which of the following characteristics?",
    "options": [
      {
        "key": "a",
        "text": "Epithelial tissue contains fibers but connective tissue does not."
      },
      {
        "key": "b",
        "text": "Connective tissue is avascular but epithelial tissue is well-vascularized."
      },
      {
        "key": "c",
        "text": "Cells in epithelial tissue are closely packed, whereas in connective tissue they are not."
      },
      {
        "key": "d",
        "text": "Connective tissue includes tissue that makes up glands, but epithelial tissue does not occur in glands."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Connective Tissue (PDF p. 22)",
    "explanation": "Official Answer: (C) — Cells in epithelial tissue are closely packed, whereas in connective tissue they are not. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 22
  },
  {
    "id": "hist-03-q53",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 53,
    "stem": "Brown adipose connective tissue is brown due to:",
    "options": [
      {
        "key": "a",
        "text": "Cytochrome oxidase only."
      },
      {
        "key": "b",
        "text": "Cytochrome oxidase and blood vessels."
      },
      {
        "key": "c",
        "text": "Carotenoids."
      },
      {
        "key": "d",
        "text": "Thermogenin."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 22)",
    "explanation": "Official Answer: (B) — Cytochrome oxidase and blood vessels. Adipose tissue is stained orange/red by Sudan III. Unilocular (white) adipocytes contain a single large lipid droplet that pushes the flattened nucleus to the periphery (signet-ring appearance) and increase in number/size with age. Multilocular (brown) adipocytes contain multiple small lipid droplets, a central spherical nucleus, and abundant mitochondria rich in cytochrome oxidase (which, along with rich blood vessels, gives brown fat its color) and thermogenin (UCP-1), generating heat by non-shivering thermogenesis in newborns.",
    "pdfSource": "histology",
    "pdfPage": 22
  },
  {
    "id": "hist-03-q54",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 54,
    "stem": "Mitochondria of brown fat cell:",
    "options": [
      {
        "key": "a",
        "text": "Contains thermogenin protein."
      },
      {
        "key": "b",
        "text": "Contain cytochrome."
      },
      {
        "key": "c",
        "text": "Affected by hormones."
      },
      {
        "key": "d",
        "text": "All of the above."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 23)",
    "explanation": "Official Answer: (D) — All of the above. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis). Adipose tissue is stained orange/red by Sudan III. Unilocular (white) adipocytes contain a single large lipid droplet that pushes the flattened nucleus to the periphery (signet-ring appearance) and increase in number/size with age. Multilocular (brown) adipocytes contain multiple small lipid droplets, a central spherical nucleus, and abundant mitochondria rich in cytochrome oxidase (which, along with rich blood vessels, gives brown fat its color) and thermogenin (UCP-1), generating heat by non-shivering thermogenesis in newborns.",
    "pdfSource": "histology",
    "pdfPage": 23
  },
  {
    "id": "hist-03-q55",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 55,
    "stem": "Plasma cells is characterized by:",
    "options": [
      {
        "key": "a",
        "text": "Cartwheel nucleus + negative Golgi image."
      },
      {
        "key": "b",
        "text": "Alternating euchromatin & heterochromatin in nucleus."
      },
      {
        "key": "c",
        "text": "Deep basophilic cytoplasm."
      },
      {
        "key": "d",
        "text": "All of the above."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 23)",
    "explanation": "Official Answer: (D) — All of the above. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis).",
    "pdfSource": "histology",
    "pdfPage": 23
  },
  {
    "id": "hist-03-q56",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 56,
    "stem": "Choose the correct statement:",
    "options": [
      {
        "key": "a",
        "text": "White fat cells are affected by drugs & hormones."
      },
      {
        "key": "b",
        "text": "Brown fat cells are affected by drugs & hormones."
      },
      {
        "key": "c",
        "text": "Both white & brown fat cells are affected by drugs & hormones."
      },
      {
        "key": "d",
        "text": "None of the above."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 23)",
    "explanation": "Official Answer: (D) — None of the above. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 23
  },
  {
    "id": "hist-03-q57",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 57,
    "stem": "Antigen presenting cells are:",
    "options": [
      {
        "key": "a",
        "text": "Macrophages + reticular cells."
      },
      {
        "key": "b",
        "text": "Macrophages + plasma cells."
      },
      {
        "key": "c",
        "text": "Macrophages + mast cells."
      },
      {
        "key": "d",
        "text": "Macrophages + fibroblasts."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 23)",
    "explanation": "Official Answer: (A) — Macrophages + reticular cells. Connective tissue develops from embryonic mesoderm (mesenchyme). Fibroblasts are the most abundant fixed C.T. cells and synthesize collagen, elastic, and reticular fibers as well as ground substance. Pericytes surround capillaries, regulate blood flow, and act as pluripotential mesenchymal stem cells that differentiate into fibroblasts, endothelial cells, and smooth muscle cells during C.T. repair. Macrophages (histiocytes in C.T., derived from blood monocytes) are phagocytic antigen-presenting cells demonstrated by vital stains (e.g., trypan blue). Plasma cells (derived from B-lymphocytes) are rich in rER (deep basophilic cytoplasm with a pale perinuclear negative Golgi image and clockface/cartwheel nucleus) and secrete antibodies. Mast cells (and blood basophils) contain metachromatic granules rich in heparin and histamine (triggering allergic reactions/anaphylaxis). Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 23
  },
  {
    "id": "hist-03-q58",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 58,
    "stem": "Yellow elastic connective tissue could be present in:",
    "options": [
      {
        "key": "a",
        "text": "Large veins."
      },
      {
        "key": "b",
        "text": "Large arteries."
      },
      {
        "key": "c",
        "text": "Small veins."
      },
      {
        "key": "d",
        "text": "All of the above."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Connective Tissue (PDF p. 23)",
    "explanation": "Official Answer: (B) — Large arteries. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 23
  },
  {
    "id": "hist-03-q59",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 59,
    "stem": "H&E could be used to stain:",
    "options": [
      {
        "key": "a",
        "text": "Collagen fibers + elastic fibers."
      },
      {
        "key": "b",
        "text": "Elastic fibers + reticular fibers."
      },
      {
        "key": "c",
        "text": "Collagen fibers + reticular fibers."
      },
      {
        "key": "d",
        "text": "All of the above."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 23)",
    "explanation": "Official Answer: (A) — Collagen fibers + elastic fibers. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 23
  },
  {
    "id": "hist-03-q60",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 60,
    "stem": "Type IV collagen is in the form of:",
    "options": [
      {
        "key": "a",
        "text": "Granules."
      },
      {
        "key": "b",
        "text": "Fibrils."
      },
      {
        "key": "c",
        "text": "Fibers."
      },
      {
        "key": "d",
        "text": "Bundles."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 23)",
    "explanation": "Official Answer: (A) — Granules. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 23
  },
  {
    "id": "hist-03-q61",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 61,
    "stem": "The strongest type of collagen is:",
    "options": [
      {
        "key": "a",
        "text": "Type I."
      },
      {
        "key": "b",
        "text": "Type II."
      },
      {
        "key": "c",
        "text": "Type III."
      },
      {
        "key": "d",
        "text": "Type IV."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Connective Tissue (PDF p. 23)",
    "explanation": "Official Answer: (A) — Type I. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 23
  },
  {
    "id": "hist-03-q62",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 62,
    "stem": "Regarding reticular fibers:",
    "options": [
      {
        "key": "a",
        "text": "Type III collagen."
      },
      {
        "key": "b",
        "text": "Stained with Ag."
      },
      {
        "key": "c",
        "text": "Stained with PAS."
      },
      {
        "key": "d",
        "text": "All of the above."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 23)",
    "explanation": "Official Answer: (D) — All of the above. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 23
  },
  {
    "id": "hist-03-q63",
    "chapterId": "hist-03",
    "chapterNumber": 3,
    "subject": "Histology",
    "questionNumber": 63,
    "stem": "Reticular connective tissue consists of reticular fibers and:",
    "options": [
      {
        "key": "a",
        "text": "Mast cells."
      },
      {
        "key": "b",
        "text": "Plasma cells."
      },
      {
        "key": "c",
        "text": "Fibroblasts."
      },
      {
        "key": "d",
        "text": "None of the above."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Connective Tissue (PDF p. 23)",
    "explanation": "Official Answer: (D) — None of the above. Collagen is the most abundant fiber in C.T., with Type I collagen being the strongest and most abundant type in the body (bone, tendon, dermis). Vitamin C deficiency impairs prolyl/lysyl hydroxylation of collagen, causing scurvy (bleeding gums and poor wound healing). Type III collagen forms argyrophilic reticular fibers (secreted by reticular cells and fibroblasts, stained black by silver/Ag stain and magenta by PAS). Type IV collagen forms non-fibrillar granules/sheets in the basal lamina. Collagen fibers stain blue with Mallory trichrome, whereas elastic fibers stain brown with Orcein and yellow with Van Gieson stain.",
    "pdfSource": "histology",
    "pdfPage": 23
  },
  {
    "id": "hist-04-q1",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 1,
    "stem": "Which feature is true for specific granules?",
    "options": [
      {
        "key": "a",
        "text": "Found in lymphocytes."
      },
      {
        "key": "b",
        "text": "Found in monocytes."
      },
      {
        "key": "c",
        "text": "May contain collagenase, histaminase, or histamine."
      },
      {
        "key": "d",
        "text": "Function as lysosomes."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 24)",
    "explanation": "Official Answer: (C) — May contain collagenase, histaminase, or histamine. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 24
  },
  {
    "id": "hist-04-q2",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 2,
    "stem": "Functions of eosinophils include all except:",
    "options": [
      {
        "key": "a",
        "text": "Destroy histamine by histaminase enzyme."
      },
      {
        "key": "b",
        "text": "Engulf antigen - antibody complex."
      },
      {
        "key": "c",
        "text": "Kill parasites."
      },
      {
        "key": "d",
        "text": "Produce trephone substance."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 24)",
    "explanation": "Official Answer: (D) — Produce trephone substance. Eosinophils (1–4% of WBCs) have a bilobed nucleus and large acidophilic specific granules containing an electron-dense crystalline core (internum) rich in Major Basic Protein (which induces pores in and kills helminthic parasites) surrounded by a less dense externum containing histaminase and arylsulfatase (which degrade histamine and leukotrienes, limiting allergic reactions). Eosinophils also phagocytose antigen-antibody complexes and increase in allergic diseases (bronchial asthma) and parasitic infestations (e.g., bilharziasis). Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 24
  },
  {
    "id": "hist-04-q3",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 3,
    "stem": "T lymphocytes:",
    "options": [
      {
        "key": "a",
        "text": "Have kidney-shaped nucleus."
      },
      {
        "key": "b",
        "text": "Highly phagocytic."
      },
      {
        "key": "c",
        "text": "Responsible for cellular immunity."
      },
      {
        "key": "d",
        "text": "Responsible for humoral immunity."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 24)",
    "explanation": "Official Answer: (C) — Responsible for cellular immunity. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 24
  },
  {
    "id": "hist-04-q4",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 4,
    "stem": "What feature is true for the central region of human platelets?",
    "options": [
      {
        "key": "a",
        "text": "Contains bundles of microtubules."
      },
      {
        "key": "b",
        "text": "Contains the platelet granules."
      },
      {
        "key": "c",
        "text": "Termed hyalomere."
      },
      {
        "key": "d",
        "text": "Contains the platelet nucleus."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 24)",
    "explanation": "Official Answer: (B) — Contains the platelet granules. Blood films are routinely stained with neutral Romanowsky stains such as Leishman's or Giemsa stain. Platelets (thrombocytes, 200,000–400,000/mm3, 2–4 micrometers in diameter) are non-nucleated cytoplasmic fragments shed from platelet ribbons of giant bone marrow megakaryocytes (the largest cell in bone marrow) via invaginations of the plasma membrane called demarcation channels. Each platelet has a peripheral pale hyalomere (containing marginal microtubule bundles and actin/myosin) and a central granulomere containing alpha granules (clotting factors, PDGF), delta/dense granules (ATP, ADP, Ca2+, serotonin), and lambda granules (lysosomes). As hematopoietic activity declines with age, active red bone marrow is replaced by yellow marrow rich in fat cells.",
    "pdfSource": "histology",
    "pdfPage": 24
  },
  {
    "id": "hist-04-q5",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 5,
    "stem": "Which of the following proteins associated with the erythrocyte plasma membrane is responsible for maintaining the cell's biconcave disk shape?",
    "options": [
      {
        "key": "a",
        "text": "Keratin."
      },
      {
        "key": "b",
        "text": "Desmin."
      },
      {
        "key": "c",
        "text": "Lamins."
      },
      {
        "key": "d",
        "text": "Spectrin."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 24)",
    "explanation": "Official Answer: (D) — Spectrin. Erythrocytes (RBCs) are non-nucleated biconcave discs (7.5 micrometers in diameter) whose flexible lipoprotein membrane and underlying spectrin cytoskeleton allow them to deform through narrow capillaries. Because the center is thinner than the periphery, the middle 1/3 appears as a 'central pallor'. Hemoglobin is a basic (acidophilic) protein distributed throughout the RBC; a point mutation in beta-globin DNA causes sickle cell anemia, and chronic hypoxia/lung disease causes secondary polycythemia. Reticulocytes (immature RBCs with residual rRNA reticulum) are demonstrated by supravital staining (brilliant cresyl blue). In slow circulation, RBCs stack reversibly like coins (rouleaux phenomenon).",
    "pdfSource": "histology",
    "pdfPage": 24
  },
  {
    "id": "hist-04-q6",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 6,
    "stem": "One of the following is a cause of neutrophilia:",
    "options": [
      {
        "key": "a",
        "text": "Typhoid fever."
      },
      {
        "key": "b",
        "text": "Chronic infection."
      },
      {
        "key": "c",
        "text": "Parasitic disease."
      },
      {
        "key": "d",
        "text": "Acute pyogenic infection."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 24)",
    "explanation": "Official Answer: (D) — Acute pyogenic infection. Neutrophils (polymorphonuclear leukocytes or microphages) are the most abundant leukocytes (60–70%) and form the body's first line of defense against acute pyogenic bacterial infections (and have the shortest leukocyte life span). In females, the inactive X chromosome appears as a drumstick appendage (Barr body) attached to the lobulated neutrophil nucleus. Neutrophil specific granules contain collagenase, lactoferrin, and phagocytin (alkaline phosphatase), whereas azurophilic (primary) granules are lysosomes containing myeloperoxidase.",
    "pdfSource": "histology",
    "pdfPage": 24
  },
  {
    "id": "hist-04-q7",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 7,
    "stem": "Adaptations of RBCs to function include:",
    "options": [
      {
        "key": "a",
        "text": "Flexible cell membrane to squeeze in capillaries."
      },
      {
        "key": "b",
        "text": "Lipoprotein cell membrane to squeeze in capillaries."
      },
      {
        "key": "c",
        "text": "Rounded edges to help gaseous exchange."
      },
      {
        "key": "d",
        "text": "Biconcave surface to pass in branched vessels."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 24)",
    "explanation": "Official Answer: (A) — Flexible cell membrane to squeeze in capillaries. Erythrocytes (RBCs) are non-nucleated biconcave discs (7.5 micrometers in diameter) whose flexible lipoprotein membrane and underlying spectrin cytoskeleton allow them to deform through narrow capillaries. Because the center is thinner than the periphery, the middle 1/3 appears as a 'central pallor'. Hemoglobin is a basic (acidophilic) protein distributed throughout the RBC; a point mutation in beta-globin DNA causes sickle cell anemia, and chronic hypoxia/lung disease causes secondary polycythemia. Reticulocytes (immature RBCs with residual rRNA reticulum) are demonstrated by supravital staining (brilliant cresyl blue). In slow circulation, RBCs stack reversibly like coins (rouleaux phenomenon).",
    "pdfSource": "histology",
    "pdfPage": 24
  },
  {
    "id": "hist-04-q8",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 8,
    "stem": "Which leukocyte is considered as microphage?",
    "options": [
      {
        "key": "a",
        "text": "Lymphocytes."
      },
      {
        "key": "b",
        "text": "Basophils."
      },
      {
        "key": "c",
        "text": "Neutrophils."
      },
      {
        "key": "d",
        "text": "Monocytes."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 24)",
    "explanation": "Official Answer: (C) — Neutrophils. Neutrophils (polymorphonuclear leukocytes or microphages) are the most abundant leukocytes (60–70%) and form the body's first line of defense against acute pyogenic bacterial infections (and have the shortest leukocyte life span). In females, the inactive X chromosome appears as a drumstick appendage (Barr body) attached to the lobulated neutrophil nucleus. Neutrophil specific granules contain collagenase, lactoferrin, and phagocytin (alkaline phosphatase), whereas azurophilic (primary) granules are lysosomes containing myeloperoxidase.",
    "pdfSource": "histology",
    "pdfPage": 24
  },
  {
    "id": "hist-04-q9",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 9,
    "stem": "Which leukocyte is increased in allergic and parasitic infestation?",
    "options": [
      {
        "key": "a",
        "text": "Eosinophils."
      },
      {
        "key": "b",
        "text": "Basophils."
      },
      {
        "key": "c",
        "text": "Neutrophil."
      },
      {
        "key": "d",
        "text": "a and b."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 24)",
    "explanation": "Official Answer: (D) — a and b. Eosinophils (1–4% of WBCs) have a bilobed nucleus and large acidophilic specific granules containing an electron-dense crystalline core (internum) rich in Major Basic Protein (which induces pores in and kills helminthic parasites) surrounded by a less dense externum containing histaminase and arylsulfatase (which degrade histamine and leukotrienes, limiting allergic reactions). Eosinophils also phagocytose antigen-antibody complexes and increase in allergic diseases (bronchial asthma) and parasitic infestations (e.g., bilharziasis).",
    "pdfSource": "histology",
    "pdfPage": 24
  },
  {
    "id": "hist-04-q10",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 10,
    "stem": "Which leukocyte is the second most abundant in a peripheral smear of blood?",
    "options": [
      {
        "key": "a",
        "text": "Lymphocytes."
      },
      {
        "key": "b",
        "text": "Basophils."
      },
      {
        "key": "c",
        "text": "Neutrophils."
      },
      {
        "key": "d",
        "text": "Monocytes."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 24)",
    "explanation": "Official Answer: (A) — Lymphocytes. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 24
  },
  {
    "id": "hist-04-q11",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 11,
    "stem": "Which of the following is true for platelets?",
    "options": [
      {
        "key": "a",
        "text": "2-4 million/mm3."
      },
      {
        "key": "b",
        "text": "2-4 days life span."
      },
      {
        "key": "c",
        "text": "2-4 µm."
      },
      {
        "key": "d",
        "text": "2 types of granules."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 25)",
    "explanation": "Official Answer: (C) — 2-4 µm. Blood films are routinely stained with neutral Romanowsky stains such as Leishman's or Giemsa stain. Platelets (thrombocytes, 200,000–400,000/mm3, 2–4 micrometers in diameter) are non-nucleated cytoplasmic fragments shed from platelet ribbons of giant bone marrow megakaryocytes (the largest cell in bone marrow) via invaginations of the plasma membrane called demarcation channels. Each platelet has a peripheral pale hyalomere (containing marginal microtubule bundles and actin/myosin) and a central granulomere containing alpha granules (clotting factors, PDGF), delta/dense granules (ATP, ADP, Ca2+, serotonin), and lambda granules (lysosomes). As hematopoietic activity declines with age, active red bone marrow is replaced by yellow marrow rich in fat cells.",
    "pdfSource": "histology",
    "pdfPage": 25
  },
  {
    "id": "hist-04-q12",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 12,
    "stem": "Which statement typifies sickle cell anemia?",
    "options": [
      {
        "key": "a",
        "text": "Spherical cell."
      },
      {
        "key": "b",
        "text": "Crenated RBC's."
      },
      {
        "key": "c",
        "text": "Abnormal RBC's nucleus."
      },
      {
        "key": "d",
        "text": "Mutated DNA encoding Hb."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 25)",
    "explanation": "Official Answer: (D) — Mutated DNA encoding Hb. Erythrocytes (RBCs) are non-nucleated biconcave discs (7.5 micrometers in diameter) whose flexible lipoprotein membrane and underlying spectrin cytoskeleton allow them to deform through narrow capillaries. Because the center is thinner than the periphery, the middle 1/3 appears as a 'central pallor'. Hemoglobin is a basic (acidophilic) protein distributed throughout the RBC; a point mutation in beta-globin DNA causes sickle cell anemia, and chronic hypoxia/lung disease causes secondary polycythemia. Reticulocytes (immature RBCs with residual rRNA reticulum) are demonstrated by supravital staining (brilliant cresyl blue). In slow circulation, RBCs stack reversibly like coins (rouleaux phenomenon).",
    "pdfSource": "histology",
    "pdfPage": 25
  },
  {
    "id": "hist-04-q13",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 13,
    "stem": "Which of the following is described as having a \"central pallor\"?",
    "options": [
      {
        "key": "a",
        "text": "Erythrocytes."
      },
      {
        "key": "b",
        "text": "Monocytes."
      },
      {
        "key": "c",
        "text": "Eosinophils."
      },
      {
        "key": "d",
        "text": "Platelets."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 25)",
    "explanation": "Official Answer: (A) — Erythrocytes. Erythrocytes (RBCs) are non-nucleated biconcave discs (7.5 micrometers in diameter) whose flexible lipoprotein membrane and underlying spectrin cytoskeleton allow them to deform through narrow capillaries. Because the center is thinner than the periphery, the middle 1/3 appears as a 'central pallor'. Hemoglobin is a basic (acidophilic) protein distributed throughout the RBC; a point mutation in beta-globin DNA causes sickle cell anemia, and chronic hypoxia/lung disease causes secondary polycythemia. Reticulocytes (immature RBCs with residual rRNA reticulum) are demonstrated by supravital staining (brilliant cresyl blue). In slow circulation, RBCs stack reversibly like coins (rouleaux phenomenon).",
    "pdfSource": "histology",
    "pdfPage": 25
  },
  {
    "id": "hist-04-q14",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 14,
    "stem": "Which is the smallest leukocyte?",
    "options": [
      {
        "key": "a",
        "text": "Neutrophil."
      },
      {
        "key": "b",
        "text": "Lymphocytes."
      },
      {
        "key": "c",
        "text": "Monocytes."
      },
      {
        "key": "d",
        "text": "Eosinophil."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 25)",
    "explanation": "Official Answer: (B) — Lymphocytes. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 25
  },
  {
    "id": "hist-04-q15",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 15,
    "stem": "Which of the following is NOT a term used for a neutrophil?",
    "options": [
      {
        "key": "a",
        "text": "Polymorphonuclear leukocyte."
      },
      {
        "key": "b",
        "text": "First line of defense."
      },
      {
        "key": "c",
        "text": "Microphage."
      },
      {
        "key": "d",
        "text": "Macrophage."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 25)",
    "explanation": "Official Answer: (D) — Macrophage. Neutrophils (polymorphonuclear leukocytes or microphages) are the most abundant leukocytes (60–70%) and form the body's first line of defense against acute pyogenic bacterial infections (and have the shortest leukocyte life span). In females, the inactive X chromosome appears as a drumstick appendage (Barr body) attached to the lobulated neutrophil nucleus. Neutrophil specific granules contain collagenase, lactoferrin, and phagocytin (alkaline phosphatase), whereas azurophilic (primary) granules are lysosomes containing myeloperoxidase.",
    "pdfSource": "histology",
    "pdfPage": 25
  },
  {
    "id": "hist-04-q16",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 16,
    "stem": "Which of the following is a granulocyte?",
    "options": [
      {
        "key": "a",
        "text": "Thrombocyte."
      },
      {
        "key": "b",
        "text": "Monocyte."
      },
      {
        "key": "c",
        "text": "Lymphocyte."
      },
      {
        "key": "d",
        "text": "Polymorphonuclear leukocyte."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 25)",
    "explanation": "Official Answer: (D) — Polymorphonuclear leukocyte. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 25
  },
  {
    "id": "hist-04-q17",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 17,
    "stem": "Which cell can divide",
    "options": [
      {
        "key": "a",
        "text": "Erythrocytes."
      },
      {
        "key": "b",
        "text": "Thrombocyte."
      },
      {
        "key": "c",
        "text": "Lymphocyte."
      },
      {
        "key": "d",
        "text": "Monocyte."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 25)",
    "explanation": "Official Answer: (C) — Lymphocyte. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 25
  },
  {
    "id": "hist-04-q18",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 18,
    "stem": "Anaphylactic shock occurs due to degranulation of:",
    "options": [
      {
        "key": "a",
        "text": "Mast cells & Eosinophils."
      },
      {
        "key": "b",
        "text": "Eosinophils & Basophils."
      },
      {
        "key": "c",
        "text": "Mast cells & Basophils."
      },
      {
        "key": "d",
        "text": "Mast cells & plasma cells."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 25)",
    "explanation": "Official Answer: (C) — Mast cells & Basophils. Basophils are the least common leukocytes (0.5–1%), characterized by an S-shaped/kidney-shaped nucleus masked by large basophilic metachromatic specific granules containing histamine, heparin, and eosinophil chemotactic factor. Like mast cells, basophils express surface IgE receptors (though neither is phagocytic), and cross-linking of IgE triggers massive degranulation and anaphylactic shock.",
    "pdfSource": "histology",
    "pdfPage": 25
  },
  {
    "id": "hist-04-q19",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 19,
    "stem": "A patient suffers from chronic urinary tract infection on top of urinary bilharziasis, which of the following cells could increase in his blood film:",
    "options": [
      {
        "key": "a",
        "text": "Neutrophils and eosinophils."
      },
      {
        "key": "b",
        "text": "Lymphocytes and neutrophils."
      },
      {
        "key": "c",
        "text": "Lymphocytes, monocytes, eosinophils & basophils."
      },
      {
        "key": "d",
        "text": "Lymphocytes and monocytes only."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 25)",
    "explanation": "Official Answer: (C) — Lymphocytes, monocytes, eosinophils & basophils. Eosinophils (1–4% of WBCs) have a bilobed nucleus and large acidophilic specific granules containing an electron-dense crystalline core (internum) rich in Major Basic Protein (which induces pores in and kills helminthic parasites) surrounded by a less dense externum containing histaminase and arylsulfatase (which degrade histamine and leukotrienes, limiting allergic reactions). Eosinophils also phagocytose antigen-antibody complexes and increase in allergic diseases (bronchial asthma) and parasitic infestations (e.g., bilharziasis). Basophils are the least common leukocytes (0.5–1%), characterized by an S-shaped/kidney-shaped nucleus masked by large basophilic metachromatic specific granules containing histamine, heparin, and eosinophil chemotactic factor. Like mast cells, basophils express surface IgE receptors (though neither is phagocytic), and cross-linking of IgE triggers massive degranulation and anaphylactic shock. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 25
  },
  {
    "id": "hist-04-q20",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 20,
    "stem": "Which bone marrow component increases markedly as hematopoietic activity decreases?",
    "options": [
      {
        "key": "a",
        "text": "Fat cells."
      },
      {
        "key": "b",
        "text": "Erythrocyte."
      },
      {
        "key": "c",
        "text": "Hematopoietic cords."
      },
      {
        "key": "d",
        "text": "Stem cells."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 25)",
    "explanation": "Official Answer: (A) — Fat cells. Blood films are routinely stained with neutral Romanowsky stains such as Leishman's or Giemsa stain. Platelets (thrombocytes, 200,000–400,000/mm3, 2–4 micrometers in diameter) are non-nucleated cytoplasmic fragments shed from platelet ribbons of giant bone marrow megakaryocytes (the largest cell in bone marrow) via invaginations of the plasma membrane called demarcation channels. Each platelet has a peripheral pale hyalomere (containing marginal microtubule bundles and actin/myosin) and a central granulomere containing alpha granules (clotting factors, PDGF), delta/dense granules (ATP, ADP, Ca2+, serotonin), and lambda granules (lysosomes). As hematopoietic activity declines with age, active red bone marrow is replaced by yellow marrow rich in fat cells.",
    "pdfSource": "histology",
    "pdfPage": 25
  },
  {
    "id": "hist-04-q21",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 21,
    "stem": "Basophils contains receptors for:",
    "options": [
      {
        "key": "a",
        "text": "Ig E."
      },
      {
        "key": "b",
        "text": "Ig M."
      },
      {
        "key": "c",
        "text": "Ig D."
      },
      {
        "key": "d",
        "text": "Ig A."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 25)",
    "explanation": "Official Answer: (A) — Ig E. Basophils are the least common leukocytes (0.5–1%), characterized by an S-shaped/kidney-shaped nucleus masked by large basophilic metachromatic specific granules containing histamine, heparin, and eosinophil chemotactic factor. Like mast cells, basophils express surface IgE receptors (though neither is phagocytic), and cross-linking of IgE triggers massive degranulation and anaphylactic shock.",
    "pdfSource": "histology",
    "pdfPage": 25
  },
  {
    "id": "hist-04-q22",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 22,
    "stem": "Lymphocytosis develops in:",
    "options": [
      {
        "key": "a",
        "text": "Acute pyogenic infections."
      },
      {
        "key": "b",
        "text": "Chronic infections."
      },
      {
        "key": "c",
        "text": "Parasitic infections."
      },
      {
        "key": "d",
        "text": "Acute abscess formation."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 26)",
    "explanation": "Official Answer: (B) — Chronic infections. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 26
  },
  {
    "id": "hist-04-q23",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 23,
    "stem": "Rouleaux appearance:",
    "options": [
      {
        "key": "a",
        "text": "Occurs in normal circulation."
      },
      {
        "key": "b",
        "text": "Reversible phenomena."
      },
      {
        "key": "c",
        "text": "Causes damage of RBCs."
      },
      {
        "key": "d",
        "text": "Decrease the erythrocyte sedimentation rate."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 26)",
    "explanation": "Official Answer: (B) — Reversible phenomena. Erythrocytes (RBCs) are non-nucleated biconcave discs (7.5 micrometers in diameter) whose flexible lipoprotein membrane and underlying spectrin cytoskeleton allow them to deform through narrow capillaries. Because the center is thinner than the periphery, the middle 1/3 appears as a 'central pallor'. Hemoglobin is a basic (acidophilic) protein distributed throughout the RBC; a point mutation in beta-globin DNA causes sickle cell anemia, and chronic hypoxia/lung disease causes secondary polycythemia. Reticulocytes (immature RBCs with residual rRNA reticulum) are demonstrated by supravital staining (brilliant cresyl blue). In slow circulation, RBCs stack reversibly like coins (rouleaux phenomenon).",
    "pdfSource": "histology",
    "pdfPage": 26
  },
  {
    "id": "hist-04-q24",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 24,
    "stem": "The most common type of leucocytes is:",
    "options": [
      {
        "key": "a",
        "text": "Neutrophils."
      },
      {
        "key": "b",
        "text": "Basophils."
      },
      {
        "key": "c",
        "text": "Lymphocytes."
      },
      {
        "key": "d",
        "text": "Monocytes."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 26)",
    "explanation": "Official Answer: (A) — Neutrophils. Neutrophils (polymorphonuclear leukocytes or microphages) are the most abundant leukocytes (60–70%) and form the body's first line of defense against acute pyogenic bacterial infections (and have the shortest leukocyte life span). In females, the inactive X chromosome appears as a drumstick appendage (Barr body) attached to the lobulated neutrophil nucleus. Neutrophil specific granules contain collagenase, lactoferrin, and phagocytin (alkaline phosphatase), whereas azurophilic (primary) granules are lysosomes containing myeloperoxidase.",
    "pdfSource": "histology",
    "pdfPage": 26
  },
  {
    "id": "hist-04-q25",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 25,
    "stem": "The largest leucocytes is:",
    "options": [
      {
        "key": "a",
        "text": "Monocyte."
      },
      {
        "key": "b",
        "text": "Large lymphocyte."
      },
      {
        "key": "c",
        "text": "Neutrophil."
      },
      {
        "key": "d",
        "text": "Natural killer."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 26)",
    "explanation": "Official Answer: (A) — Monocyte. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 26
  },
  {
    "id": "hist-04-q26",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 26,
    "stem": "The first line of defense mechanism is:",
    "options": [
      {
        "key": "a",
        "text": "Neutrophils."
      },
      {
        "key": "b",
        "text": "Basophils."
      },
      {
        "key": "c",
        "text": "Lymphocytes."
      },
      {
        "key": "d",
        "text": "Monocytes."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 26)",
    "explanation": "Official Answer: (A) — Neutrophils. Neutrophils (polymorphonuclear leukocytes or microphages) are the most abundant leukocytes (60–70%) and form the body's first line of defense against acute pyogenic bacterial infections (and have the shortest leukocyte life span). In females, the inactive X chromosome appears as a drumstick appendage (Barr body) attached to the lobulated neutrophil nucleus. Neutrophil specific granules contain collagenase, lactoferrin, and phagocytin (alkaline phosphatase), whereas azurophilic (primary) granules are lysosomes containing myeloperoxidase.",
    "pdfSource": "histology",
    "pdfPage": 26
  },
  {
    "id": "hist-04-q27",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 27,
    "stem": "The second line of defense mechanism is:",
    "options": [
      {
        "key": "a",
        "text": "Neutrophils."
      },
      {
        "key": "b",
        "text": "Basophils."
      },
      {
        "key": "c",
        "text": "Lymphocytes."
      },
      {
        "key": "d",
        "text": "Monocytes."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 26)",
    "explanation": "Official Answer: (C) — Lymphocytes. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 26
  },
  {
    "id": "hist-04-q28",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 28,
    "stem": "Cells increased in acute pyogenic infection:",
    "options": [
      {
        "key": "a",
        "text": "Neutrophils."
      },
      {
        "key": "b",
        "text": "Basophils."
      },
      {
        "key": "c",
        "text": "Lymphocytes."
      },
      {
        "key": "d",
        "text": "Monocytes."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 26)",
    "explanation": "Official Answer: (A) — Neutrophils. Neutrophils (polymorphonuclear leukocytes or microphages) are the most abundant leukocytes (60–70%) and form the body's first line of defense against acute pyogenic bacterial infections (and have the shortest leukocyte life span). In females, the inactive X chromosome appears as a drumstick appendage (Barr body) attached to the lobulated neutrophil nucleus. Neutrophil specific granules contain collagenase, lactoferrin, and phagocytin (alkaline phosphatase), whereas azurophilic (primary) granules are lysosomes containing myeloperoxidase.",
    "pdfSource": "histology",
    "pdfPage": 26
  },
  {
    "id": "hist-04-q29",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 29,
    "stem": "Cells increased in chronic infection:",
    "options": [
      {
        "key": "a",
        "text": "Neutrophils."
      },
      {
        "key": "b",
        "text": "Monocytes."
      },
      {
        "key": "c",
        "text": "Lymphocytes."
      },
      {
        "key": "d",
        "text": "b & c."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 26)",
    "explanation": "Official Answer: (D) — b & c. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 26
  },
  {
    "id": "hist-04-q30",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 30,
    "stem": "Cells increased in allergic diseases:",
    "options": [
      {
        "key": "a",
        "text": "Neutrophils."
      },
      {
        "key": "b",
        "text": "Basophils."
      },
      {
        "key": "c",
        "text": "Eosinophils."
      },
      {
        "key": "d",
        "text": "b & c."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 26)",
    "explanation": "Official Answer: (D) — b & c. Eosinophils (1–4% of WBCs) have a bilobed nucleus and large acidophilic specific granules containing an electron-dense crystalline core (internum) rich in Major Basic Protein (which induces pores in and kills helminthic parasites) surrounded by a less dense externum containing histaminase and arylsulfatase (which degrade histamine and leukotrienes, limiting allergic reactions). Eosinophils also phagocytose antigen-antibody complexes and increase in allergic diseases (bronchial asthma) and parasitic infestations (e.g., bilharziasis).",
    "pdfSource": "histology",
    "pdfPage": 26
  },
  {
    "id": "hist-04-q31",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 31,
    "stem": "Reticulocytes could be demonstrated by:",
    "options": [
      {
        "key": "a",
        "text": "Vital stain."
      },
      {
        "key": "b",
        "text": "Supra vital stain."
      },
      {
        "key": "c",
        "text": "Toluidine blue."
      },
      {
        "key": "d",
        "text": "Metachromatic stain."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 26)",
    "explanation": "Official Answer: (B) — Supra vital stain. Erythrocytes (RBCs) are non-nucleated biconcave discs (7.5 micrometers in diameter) whose flexible lipoprotein membrane and underlying spectrin cytoskeleton allow them to deform through narrow capillaries. Because the center is thinner than the periphery, the middle 1/3 appears as a 'central pallor'. Hemoglobin is a basic (acidophilic) protein distributed throughout the RBC; a point mutation in beta-globin DNA causes sickle cell anemia, and chronic hypoxia/lung disease causes secondary polycythemia. Reticulocytes (immature RBCs with residual rRNA reticulum) are demonstrated by supravital staining (brilliant cresyl blue). In slow circulation, RBCs stack reversibly like coins (rouleaux phenomenon).",
    "pdfSource": "histology",
    "pdfPage": 26
  },
  {
    "id": "hist-04-q32",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 32,
    "stem": "Frosted glass appearance is a character of:",
    "options": [
      {
        "key": "a",
        "text": "Neutrophils."
      },
      {
        "key": "b",
        "text": "Basophils."
      },
      {
        "key": "c",
        "text": "Lymphocytes."
      },
      {
        "key": "d",
        "text": "Monocytes."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 26)",
    "explanation": "Official Answer: (D) — Monocytes. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 26
  },
  {
    "id": "hist-04-q33",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 33,
    "stem": "Barr body could be detected in female:",
    "options": [
      {
        "key": "a",
        "text": "Neutrophils."
      },
      {
        "key": "b",
        "text": "Basophils."
      },
      {
        "key": "c",
        "text": "Lymphocytes."
      },
      {
        "key": "d",
        "text": "Monocytes."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 26)",
    "explanation": "Official Answer: (A) — Neutrophils. Neutrophils (polymorphonuclear leukocytes or microphages) are the most abundant leukocytes (60–70%) and form the body's first line of defense against acute pyogenic bacterial infections (and have the shortest leukocyte life span). In females, the inactive X chromosome appears as a drumstick appendage (Barr body) attached to the lobulated neutrophil nucleus. Neutrophil specific granules contain collagenase, lactoferrin, and phagocytin (alkaline phosphatase), whereas azurophilic (primary) granules are lysosomes containing myeloperoxidase.",
    "pdfSource": "histology",
    "pdfPage": 26
  },
  {
    "id": "hist-04-q34",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 34,
    "stem": "Which leukocyte is the second most abundant in a peripheral smear of blood?",
    "options": [
      {
        "key": "a",
        "text": "Lymphocytes."
      },
      {
        "key": "b",
        "text": "Basophils."
      },
      {
        "key": "c",
        "text": "Neutrophils."
      },
      {
        "key": "d",
        "text": "Monocytes."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 27)",
    "explanation": "Official Answer: (A) — Lymphocytes. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 27
  },
  {
    "id": "hist-04-q35",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 35,
    "stem": "One of the following is true about eosinophils:",
    "options": [
      {
        "key": "a",
        "text": "Secrete eosinophil chemotactic factor."
      },
      {
        "key": "b",
        "text": "Have horse-shoe shaped nuclei."
      },
      {
        "key": "c",
        "text": "Represent about 60-70% of circulating leucocytes."
      },
      {
        "key": "d",
        "text": "Secrete histamine and heparin."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 27)",
    "explanation": "Official Answer: (B) — Have horse-shoe shaped nuclei. Eosinophils (1–4% of WBCs) have a bilobed nucleus and large acidophilic specific granules containing an electron-dense crystalline core (internum) rich in Major Basic Protein (which induces pores in and kills helminthic parasites) surrounded by a less dense externum containing histaminase and arylsulfatase (which degrade histamine and leukotrienes, limiting allergic reactions). Eosinophils also phagocytose antigen-antibody complexes and increase in allergic diseases (bronchial asthma) and parasitic infestations (e.g., bilharziasis).",
    "pdfSource": "histology",
    "pdfPage": 27
  },
  {
    "id": "hist-04-q36",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 36,
    "stem": "As regards B Lymphocytes:",
    "options": [
      {
        "key": "a",
        "text": "Have a long-life span."
      },
      {
        "key": "b",
        "text": "Secrete perforins."
      },
      {
        "key": "c",
        "text": "Responsible for humoral immunity."
      },
      {
        "key": "d",
        "text": "Migrate to thymus gland for differentiation."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 27)",
    "explanation": "Official Answer: (C) — Responsible for humoral immunity. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 27
  },
  {
    "id": "hist-04-q37",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 37,
    "stem": "One is true about RBCs:",
    "options": [
      {
        "key": "a",
        "text": "Contain azurophilic granules."
      },
      {
        "key": "b",
        "text": "The center is thicker than the periphery."
      },
      {
        "key": "c",
        "text": "About 10-12 µm in diameter."
      },
      {
        "key": "d",
        "text": "Increase in number in chronic lung disease."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 27)",
    "explanation": "Official Answer: (D) — Increase in number in chronic lung disease. Erythrocytes (RBCs) are non-nucleated biconcave discs (7.5 micrometers in diameter) whose flexible lipoprotein membrane and underlying spectrin cytoskeleton allow them to deform through narrow capillaries. Because the center is thinner than the periphery, the middle 1/3 appears as a 'central pallor'. Hemoglobin is a basic (acidophilic) protein distributed throughout the RBC; a point mutation in beta-globin DNA causes sickle cell anemia, and chronic hypoxia/lung disease causes secondary polycythemia. Reticulocytes (immature RBCs with residual rRNA reticulum) are demonstrated by supravital staining (brilliant cresyl blue). In slow circulation, RBCs stack reversibly like coins (rouleaux phenomenon).",
    "pdfSource": "histology",
    "pdfPage": 27
  },
  {
    "id": "hist-04-q38",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 38,
    "stem": "Basophils:",
    "options": [
      {
        "key": "a",
        "text": "Are the least common leucocytes."
      },
      {
        "key": "b",
        "text": "Increase in influenza."
      },
      {
        "key": "c",
        "text": "Have kidney-shaped nuclei."
      },
      {
        "key": "d",
        "text": "Contain coarse shiny red granules."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 27)",
    "explanation": "Official Answer: (A) — Are the least common leucocytes. Basophils are the least common leukocytes (0.5–1%), characterized by an S-shaped/kidney-shaped nucleus masked by large basophilic metachromatic specific granules containing histamine, heparin, and eosinophil chemotactic factor. Like mast cells, basophils express surface IgE receptors (though neither is phagocytic), and cross-linking of IgE triggers massive degranulation and anaphylactic shock.",
    "pdfSource": "histology",
    "pdfPage": 27
  },
  {
    "id": "hist-04-q39",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 39,
    "stem": "Granulomere of blood platelets contains:",
    "options": [
      {
        "key": "a",
        "text": "Dense tubular system."
      },
      {
        "key": "b",
        "text": "Alpha granules that contain serotonin."
      },
      {
        "key": "c",
        "text": "Delta granules that contain ATP."
      },
      {
        "key": "d",
        "text": "Lambda granules that contain clotting factor."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 27)",
    "explanation": "Official Answer: (C) — Delta granules that contain ATP. Blood films are routinely stained with neutral Romanowsky stains such as Leishman's or Giemsa stain. Platelets (thrombocytes, 200,000–400,000/mm3, 2–4 micrometers in diameter) are non-nucleated cytoplasmic fragments shed from platelet ribbons of giant bone marrow megakaryocytes (the largest cell in bone marrow) via invaginations of the plasma membrane called demarcation channels. Each platelet has a peripheral pale hyalomere (containing marginal microtubule bundles and actin/myosin) and a central granulomere containing alpha granules (clotting factors, PDGF), delta/dense granules (ATP, ADP, Ca2+, serotonin), and lambda granules (lysosomes). As hematopoietic activity declines with age, active red bone marrow is replaced by yellow marrow rich in fat cells.",
    "pdfSource": "histology",
    "pdfPage": 27
  },
  {
    "id": "hist-04-q40",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 40,
    "stem": "HIV human Immunodeficiency virus that causes AIDs destroys the following type of T lymphocytes:",
    "options": [
      {
        "key": "a",
        "text": "Cytotoxic T-cells."
      },
      {
        "key": "b",
        "text": "Helper T-cells."
      },
      {
        "key": "c",
        "text": "Regulatory (Suppressor) T-cells."
      },
      {
        "key": "d",
        "text": "Memory T-cells."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 27)",
    "explanation": "Official Answer: (B) — Helper T-cells. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 27
  },
  {
    "id": "hist-04-q41",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 41,
    "stem": "Regarding the reticulocyte, the following statement is correct:",
    "options": [
      {
        "key": "a",
        "text": "Acidophilic cytoplasm with basophilic reticulum."
      },
      {
        "key": "b",
        "text": "Its size is 20 µm."
      },
      {
        "key": "c",
        "text": "Their % increases in case of allergy."
      },
      {
        "key": "d",
        "text": "Its percentage is 60-70% of total leucocytic count."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 27)",
    "explanation": "Official Answer: (A) — Acidophilic cytoplasm with basophilic reticulum. Erythrocytes (RBCs) are non-nucleated biconcave discs (7.5 micrometers in diameter) whose flexible lipoprotein membrane and underlying spectrin cytoskeleton allow them to deform through narrow capillaries. Because the center is thinner than the periphery, the middle 1/3 appears as a 'central pallor'. Hemoglobin is a basic (acidophilic) protein distributed throughout the RBC; a point mutation in beta-globin DNA causes sickle cell anemia, and chronic hypoxia/lung disease causes secondary polycythemia. Reticulocytes (immature RBCs with residual rRNA reticulum) are demonstrated by supravital staining (brilliant cresyl blue). In slow circulation, RBCs stack reversibly like coins (rouleaux phenomenon). Basophils are the least common leukocytes (0.5–1%), characterized by an S-shaped/kidney-shaped nucleus masked by large basophilic metachromatic specific granules containing histamine, heparin, and eosinophil chemotactic factor. Like mast cells, basophils express surface IgE receptors (though neither is phagocytic), and cross-linking of IgE triggers massive degranulation and anaphylactic shock.",
    "pdfSource": "histology",
    "pdfPage": 27
  },
  {
    "id": "hist-04-q42",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 42,
    "stem": "The blood film of a patient suffering from bronchial asthma shows:",
    "options": [
      {
        "key": "a",
        "text": "Neutrophilia and eosinophilia."
      },
      {
        "key": "b",
        "text": "Eosinophilia and basophilia."
      },
      {
        "key": "c",
        "text": "Basophilia and monocytosis."
      },
      {
        "key": "d",
        "text": "Eosinophilia and lymphocytosis."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 27)",
    "explanation": "Official Answer: (B) — Eosinophilia and basophilia. Eosinophils (1–4% of WBCs) have a bilobed nucleus and large acidophilic specific granules containing an electron-dense crystalline core (internum) rich in Major Basic Protein (which induces pores in and kills helminthic parasites) surrounded by a less dense externum containing histaminase and arylsulfatase (which degrade histamine and leukotrienes, limiting allergic reactions). Eosinophils also phagocytose antigen-antibody complexes and increase in allergic diseases (bronchial asthma) and parasitic infestations (e.g., bilharziasis). Basophils are the least common leukocytes (0.5–1%), characterized by an S-shaped/kidney-shaped nucleus masked by large basophilic metachromatic specific granules containing histamine, heparin, and eosinophil chemotactic factor. Like mast cells, basophils express surface IgE receptors (though neither is phagocytic), and cross-linking of IgE triggers massive degranulation and anaphylactic shock.",
    "pdfSource": "histology",
    "pdfPage": 27
  },
  {
    "id": "hist-04-q43",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 43,
    "stem": "Natural killer cells express the following surface markers (receptors):",
    "options": [
      {
        "key": "a",
        "text": "CD4."
      },
      {
        "key": "b",
        "text": "IgM."
      },
      {
        "key": "c",
        "text": "CD16."
      },
      {
        "key": "d",
        "text": "CD8."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 28)",
    "explanation": "Official Answer: (C) — CD16. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 28
  },
  {
    "id": "hist-04-q44",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 44,
    "stem": "Platelet ribbon is a part of:",
    "options": [
      {
        "key": "a",
        "text": "Monocyte."
      },
      {
        "key": "b",
        "text": "Megakaryocyte."
      },
      {
        "key": "c",
        "text": "Reticulocyte."
      },
      {
        "key": "d",
        "text": "Lymphocyte."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 28)",
    "explanation": "Official Answer: (B) — Megakaryocyte. Blood films are routinely stained with neutral Romanowsky stains such as Leishman's or Giemsa stain. Platelets (thrombocytes, 200,000–400,000/mm3, 2–4 micrometers in diameter) are non-nucleated cytoplasmic fragments shed from platelet ribbons of giant bone marrow megakaryocytes (the largest cell in bone marrow) via invaginations of the plasma membrane called demarcation channels. Each platelet has a peripheral pale hyalomere (containing marginal microtubule bundles and actin/myosin) and a central granulomere containing alpha granules (clotting factors, PDGF), delta/dense granules (ATP, ADP, Ca2+, serotonin), and lambda granules (lysosomes). As hematopoietic activity declines with age, active red bone marrow is replaced by yellow marrow rich in fat cells.",
    "pdfSource": "histology",
    "pdfPage": 28
  },
  {
    "id": "hist-04-q45",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 45,
    "stem": "The largest cell in bone marrow is:",
    "options": [
      {
        "key": "a",
        "text": "Fat cell."
      },
      {
        "key": "b",
        "text": "Megakaryocyte."
      },
      {
        "key": "c",
        "text": "Reticular cell."
      },
      {
        "key": "d",
        "text": "Fibroblast."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 28)",
    "explanation": "Official Answer: (A) — Fat cell. Blood films are routinely stained with neutral Romanowsky stains such as Leishman's or Giemsa stain. Platelets (thrombocytes, 200,000–400,000/mm3, 2–4 micrometers in diameter) are non-nucleated cytoplasmic fragments shed from platelet ribbons of giant bone marrow megakaryocytes (the largest cell in bone marrow) via invaginations of the plasma membrane called demarcation channels. Each platelet has a peripheral pale hyalomere (containing marginal microtubule bundles and actin/myosin) and a central granulomere containing alpha granules (clotting factors, PDGF), delta/dense granules (ATP, ADP, Ca2+, serotonin), and lambda granules (lysosomes). As hematopoietic activity declines with age, active red bone marrow is replaced by yellow marrow rich in fat cells.",
    "pdfSource": "histology",
    "pdfPage": 28
  },
  {
    "id": "hist-04-q46",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 46,
    "stem": "Lishman's stain is:",
    "options": [
      {
        "key": "a",
        "text": "Vital stain."
      },
      {
        "key": "b",
        "text": "Supra vital stain."
      },
      {
        "key": "c",
        "text": "Neutral stain."
      },
      {
        "key": "d",
        "text": "Acidic stain."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 28)",
    "explanation": "Official Answer: (C) — Neutral stain. Blood films are routinely stained with neutral Romanowsky stains such as Leishman's or Giemsa stain. Platelets (thrombocytes, 200,000–400,000/mm3, 2–4 micrometers in diameter) are non-nucleated cytoplasmic fragments shed from platelet ribbons of giant bone marrow megakaryocytes (the largest cell in bone marrow) via invaginations of the plasma membrane called demarcation channels. Each platelet has a peripheral pale hyalomere (containing marginal microtubule bundles and actin/myosin) and a central granulomere containing alpha granules (clotting factors, PDGF), delta/dense granules (ATP, ADP, Ca2+, serotonin), and lambda granules (lysosomes). As hematopoietic activity declines with age, active red bone marrow is replaced by yellow marrow rich in fat cells.",
    "pdfSource": "histology",
    "pdfPage": 28
  },
  {
    "id": "hist-04-q47",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 47,
    "stem": "Demarcation channels is important in ....... Formation.",
    "options": [
      {
        "key": "a",
        "text": "Platelets."
      },
      {
        "key": "b",
        "text": "Reticulocytes."
      },
      {
        "key": "c",
        "text": "Megakaryocytes."
      },
      {
        "key": "d",
        "text": "Leucocytes."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 28)",
    "explanation": "Official Answer: (A) — Platelets. Blood films are routinely stained with neutral Romanowsky stains such as Leishman's or Giemsa stain. Platelets (thrombocytes, 200,000–400,000/mm3, 2–4 micrometers in diameter) are non-nucleated cytoplasmic fragments shed from platelet ribbons of giant bone marrow megakaryocytes (the largest cell in bone marrow) via invaginations of the plasma membrane called demarcation channels. Each platelet has a peripheral pale hyalomere (containing marginal microtubule bundles and actin/myosin) and a central granulomere containing alpha granules (clotting factors, PDGF), delta/dense granules (ATP, ADP, Ca2+, serotonin), and lambda granules (lysosomes). As hematopoietic activity declines with age, active red bone marrow is replaced by yellow marrow rich in fat cells.",
    "pdfSource": "histology",
    "pdfPage": 28
  },
  {
    "id": "hist-04-q48",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 48,
    "stem": "Trephone substance is secreted by:",
    "options": [
      {
        "key": "a",
        "text": "Neutrophils."
      },
      {
        "key": "b",
        "text": "Basophils."
      },
      {
        "key": "c",
        "text": "Lymphocytes."
      },
      {
        "key": "d",
        "text": "Monocytes."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 28)",
    "explanation": "Official Answer: (A) — Neutrophils. Neutrophils (polymorphonuclear leukocytes or microphages) are the most abundant leukocytes (60–70%) and form the body's first line of defense against acute pyogenic bacterial infections (and have the shortest leukocyte life span). In females, the inactive X chromosome appears as a drumstick appendage (Barr body) attached to the lobulated neutrophil nucleus. Neutrophil specific granules contain collagenase, lactoferrin, and phagocytin (alkaline phosphatase), whereas azurophilic (primary) granules are lysosomes containing myeloperoxidase. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 28
  },
  {
    "id": "hist-04-q49",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 49,
    "stem": "Azurophilic granules:",
    "options": [
      {
        "key": "a",
        "text": "Considered as lysosomes."
      },
      {
        "key": "b",
        "text": "Are specific granules."
      },
      {
        "key": "c",
        "text": "Stained red in color."
      },
      {
        "key": "d",
        "text": "Contain catalase enzymes."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 28)",
    "explanation": "Official Answer: (A) — Considered as lysosomes. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 28
  },
  {
    "id": "hist-04-q50",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 50,
    "stem": "Electron dense Internum is a character of:",
    "options": [
      {
        "key": "a",
        "text": "Eosinophils."
      },
      {
        "key": "b",
        "text": "Neutrophils."
      },
      {
        "key": "c",
        "text": "Basophils."
      },
      {
        "key": "d",
        "text": "Lymphocytes."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 28)",
    "explanation": "Official Answer: (A) — Eosinophils. Eosinophils (1–4% of WBCs) have a bilobed nucleus and large acidophilic specific granules containing an electron-dense crystalline core (internum) rich in Major Basic Protein (which induces pores in and kills helminthic parasites) surrounded by a less dense externum containing histaminase and arylsulfatase (which degrade histamine and leukotrienes, limiting allergic reactions). Eosinophils also phagocytose antigen-antibody complexes and increase in allergic diseases (bronchial asthma) and parasitic infestations (e.g., bilharziasis).",
    "pdfSource": "histology",
    "pdfPage": 28
  },
  {
    "id": "hist-04-q51",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 51,
    "stem": "Hemoglobin is:",
    "options": [
      {
        "key": "a",
        "text": "Basic protein."
      },
      {
        "key": "b",
        "text": "Acidic protein."
      },
      {
        "key": "c",
        "text": "Concentrated in the center of the RBCs."
      },
      {
        "key": "d",
        "text": "Electron lucent."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 28)",
    "explanation": "Official Answer: (A) — Basic protein. Erythrocytes (RBCs) are non-nucleated biconcave discs (7.5 micrometers in diameter) whose flexible lipoprotein membrane and underlying spectrin cytoskeleton allow them to deform through narrow capillaries. Because the center is thinner than the periphery, the middle 1/3 appears as a 'central pallor'. Hemoglobin is a basic (acidophilic) protein distributed throughout the RBC; a point mutation in beta-globin DNA causes sickle cell anemia, and chronic hypoxia/lung disease causes secondary polycythemia. Reticulocytes (immature RBCs with residual rRNA reticulum) are demonstrated by supravital staining (brilliant cresyl blue). In slow circulation, RBCs stack reversibly like coins (rouleaux phenomenon). Eosinophils (1–4% of WBCs) have a bilobed nucleus and large acidophilic specific granules containing an electron-dense crystalline core (internum) rich in Major Basic Protein (which induces pores in and kills helminthic parasites) surrounded by a less dense externum containing histaminase and arylsulfatase (which degrade histamine and leukotrienes, limiting allergic reactions). Eosinophils also phagocytose antigen-antibody complexes and increase in allergic diseases (bronchial asthma) and parasitic infestations (e.g., bilharziasis).",
    "pdfSource": "histology",
    "pdfPage": 28
  },
  {
    "id": "hist-04-q52",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 52,
    "stem": "Both mast cells & basophils share all of the following except:",
    "options": [
      {
        "key": "a",
        "text": "IgE surface receptors."
      },
      {
        "key": "b",
        "text": "Phagocytic activity."
      },
      {
        "key": "c",
        "text": "Metachromatic stained granules."
      },
      {
        "key": "d",
        "text": "Secretion of eosinophil chemotactic factor."
      }
    ],
    "correctOption": "b",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 28)",
    "explanation": "Official Answer: (B) — Phagocytic activity. Basophils are the least common leukocytes (0.5–1%), characterized by an S-shaped/kidney-shaped nucleus masked by large basophilic metachromatic specific granules containing histamine, heparin, and eosinophil chemotactic factor. Like mast cells, basophils express surface IgE receptors (though neither is phagocytic), and cross-linking of IgE triggers massive degranulation and anaphylactic shock.",
    "pdfSource": "histology",
    "pdfPage": 28
  },
  {
    "id": "hist-04-q53",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 53,
    "stem": "One of the following has a longest life span",
    "options": [
      {
        "key": "a",
        "text": "T-lymphocytes."
      },
      {
        "key": "b",
        "text": "Natural killer cells."
      },
      {
        "key": "c",
        "text": "B-lymphocytes."
      },
      {
        "key": "d",
        "text": "Both a & b."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 28)",
    "explanation": "Official Answer: (D) — Both a & b. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 28
  },
  {
    "id": "hist-04-q54",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 54,
    "stem": "One of the following has a shortest life span:",
    "options": [
      {
        "key": "a",
        "text": "Microphage."
      },
      {
        "key": "b",
        "text": "Macrophage."
      },
      {
        "key": "c",
        "text": "T-lymphocytes."
      },
      {
        "key": "d",
        "text": "B-lymphocytes."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 28)",
    "explanation": "Official Answer: (A) — Microphage. Neutrophils (polymorphonuclear leukocytes or microphages) are the most abundant leukocytes (60–70%) and form the body's first line of defense against acute pyogenic bacterial infections (and have the shortest leukocyte life span). In females, the inactive X chromosome appears as a drumstick appendage (Barr body) attached to the lobulated neutrophil nucleus. Neutrophil specific granules contain collagenase, lactoferrin, and phagocytin (alkaline phosphatase), whereas azurophilic (primary) granules are lysosomes containing myeloperoxidase.",
    "pdfSource": "histology",
    "pdfPage": 28
  },
  {
    "id": "hist-04-q55",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 55,
    "stem": "Tuberculosis is characterized by:",
    "options": [
      {
        "key": "a",
        "text": "Lymphocytosis."
      },
      {
        "key": "b",
        "text": "Monocytosis."
      },
      {
        "key": "c",
        "text": "Neutropenia."
      },
      {
        "key": "d",
        "text": "All of the above."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 29)",
    "explanation": "Official Answer: (D) — All of the above. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 29
  },
  {
    "id": "hist-04-q56",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 56,
    "stem": "Specific granules of neutrophils contains all of the following except:",
    "options": [
      {
        "key": "a",
        "text": "Phagocytin."
      },
      {
        "key": "b",
        "text": "Lactoferrins."
      },
      {
        "key": "c",
        "text": "Collagenase."
      },
      {
        "key": "d",
        "text": "Myeloperoxidase."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 29)",
    "explanation": "Official Answer: (D) — Myeloperoxidase. Neutrophils (polymorphonuclear leukocytes or microphages) are the most abundant leukocytes (60–70%) and form the body's first line of defense against acute pyogenic bacterial infections (and have the shortest leukocyte life span). In females, the inactive X chromosome appears as a drumstick appendage (Barr body) attached to the lobulated neutrophil nucleus. Neutrophil specific granules contain collagenase, lactoferrin, and phagocytin (alkaline phosphatase), whereas azurophilic (primary) granules are lysosomes containing myeloperoxidase.",
    "pdfSource": "histology",
    "pdfPage": 29
  },
  {
    "id": "hist-04-q57",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 57,
    "stem": "One of the following is false:",
    "options": [
      {
        "key": "a",
        "text": "Eosinophil is phagocytic to the antigen antibody complex."
      },
      {
        "key": "b",
        "text": "Neutrophil is phagocytic to bacteria."
      },
      {
        "key": "c",
        "text": "Monocyte is phagocytic to bacteria."
      },
      {
        "key": "d",
        "text": "Mast cell is phagocytic to bacteria."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 29)",
    "explanation": "Official Answer: (D) — Mast cell is phagocytic to bacteria. This question tests core medical histology principles from Prof. Dalia El-Marakby's Semester One Histology curriculum.",
    "pdfSource": "histology",
    "pdfPage": 29
  },
  {
    "id": "hist-04-q58",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 58,
    "stem": "Eosinophils granules include all of the following except:",
    "options": [
      {
        "key": "a",
        "text": "Neurotoxins to parasites."
      },
      {
        "key": "b",
        "text": "Histaminase."
      },
      {
        "key": "c",
        "text": "Sulfatase."
      },
      {
        "key": "d",
        "text": "Leukotrienes."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 29)",
    "explanation": "Official Answer: (D) — Leukotrienes. Eosinophils (1–4% of WBCs) have a bilobed nucleus and large acidophilic specific granules containing an electron-dense crystalline core (internum) rich in Major Basic Protein (which induces pores in and kills helminthic parasites) surrounded by a less dense externum containing histaminase and arylsulfatase (which degrade histamine and leukotrienes, limiting allergic reactions). Eosinophils also phagocytose antigen-antibody complexes and increase in allergic diseases (bronchial asthma) and parasitic infestations (e.g., bilharziasis).",
    "pdfSource": "histology",
    "pdfPage": 29
  },
  {
    "id": "hist-04-q59",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 59,
    "stem": "Central pallor in RBCs is the:",
    "options": [
      {
        "key": "a",
        "text": "Middle 1/3."
      },
      {
        "key": "b",
        "text": "Middle 1/2."
      },
      {
        "key": "c",
        "text": "Middle 2/3."
      },
      {
        "key": "d",
        "text": "Middle 1/4."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 29)",
    "explanation": "Official Answer: (A) — Middle 1/3. Erythrocytes (RBCs) are non-nucleated biconcave discs (7.5 micrometers in diameter) whose flexible lipoprotein membrane and underlying spectrin cytoskeleton allow them to deform through narrow capillaries. Because the center is thinner than the periphery, the middle 1/3 appears as a 'central pallor'. Hemoglobin is a basic (acidophilic) protein distributed throughout the RBC; a point mutation in beta-globin DNA causes sickle cell anemia, and chronic hypoxia/lung disease causes secondary polycythemia. Reticulocytes (immature RBCs with residual rRNA reticulum) are demonstrated by supravital staining (brilliant cresyl blue). In slow circulation, RBCs stack reversibly like coins (rouleaux phenomenon).",
    "pdfSource": "histology",
    "pdfPage": 29
  },
  {
    "id": "hist-04-q60",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 60,
    "stem": "Frosted glass appearance of monocytes is due to:",
    "options": [
      {
        "key": "a",
        "text": "Azurophilic granules."
      },
      {
        "key": "b",
        "text": "Specific granules."
      },
      {
        "key": "c",
        "text": "Residual bodies."
      },
      {
        "key": "d",
        "text": "Phagocytosed particles."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 29)",
    "explanation": "Official Answer: (A) — Azurophilic granules. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 29
  },
  {
    "id": "hist-04-q61",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 61,
    "stem": "As regard demarcation channels in megakaryocytes all of the following are true except:",
    "options": [
      {
        "key": "a",
        "text": "They are cell membrane invaginations."
      },
      {
        "key": "b",
        "text": "Will divide the platelet ribbon into platelets."
      },
      {
        "key": "c",
        "text": "Represent cell junctions."
      },
      {
        "key": "d",
        "text": "Present in megakaryocytes pseudopodia."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 29)",
    "explanation": "Official Answer: (C) — Represent cell junctions. Blood films are routinely stained with neutral Romanowsky stains such as Leishman's or Giemsa stain. Platelets (thrombocytes, 200,000–400,000/mm3, 2–4 micrometers in diameter) are non-nucleated cytoplasmic fragments shed from platelet ribbons of giant bone marrow megakaryocytes (the largest cell in bone marrow) via invaginations of the plasma membrane called demarcation channels. Each platelet has a peripheral pale hyalomere (containing marginal microtubule bundles and actin/myosin) and a central granulomere containing alpha granules (clotting factors, PDGF), delta/dense granules (ATP, ADP, Ca2+, serotonin), and lambda granules (lysosomes). As hematopoietic activity declines with age, active red bone marrow is replaced by yellow marrow rich in fat cells.",
    "pdfSource": "histology",
    "pdfPage": 29
  },
  {
    "id": "hist-04-q62",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 62,
    "stem": "Natural killer cells differ from T lymphocytes in:",
    "options": [
      {
        "key": "a",
        "text": "Have CD16 surface marker."
      },
      {
        "key": "b",
        "text": "Being cytotoxic cell."
      },
      {
        "key": "c",
        "text": "Born in bone marrow."
      },
      {
        "key": "d",
        "text": "Differ in mother cell."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 29)",
    "explanation": "Official Answer: (A) — Have CD16 surface marker. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 29
  },
  {
    "id": "hist-04-q63",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 63,
    "stem": "T & B lymphocytes can be differentiated with:",
    "options": [
      {
        "key": "a",
        "text": "LM."
      },
      {
        "key": "b",
        "text": "EM."
      },
      {
        "key": "c",
        "text": "Surface markers."
      },
      {
        "key": "d",
        "text": "Especial stains."
      }
    ],
    "correctOption": "c",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 29)",
    "explanation": "Official Answer: (C) — Surface markers. Lymphocytes (20–25%) are the second most abundant leukocytes and the smallest WBCs, capable of mitosis and having the longest life span (especially T-lymphocytes and memory cells). They increase in chronic infections (such as tuberculosis, alongside monocytes) and secrete trephone substances that promote tissue nutrition and healing. T-lymphocytes mediate cellular immunity (CD4+ helper T-cells—destroyed by HIV—and CD8+ cytotoxic T-cells), B-lymphocytes mediate humoral immunity, and Natural Killer (NK) cells express CD16 markers. Monocytes (3–8%) are the largest leukocytes, form the second line of defense (differentiating into tissue macrophages), and exhibit a 'frosted glass' cytoplasm due to numerous fine azurophilic granules (lysosomes). T and B lymphocytes are morphologically identical by LM/EM and are differentiated by immunohistochemical surface markers.",
    "pdfSource": "histology",
    "pdfPage": 29
  },
  {
    "id": "hist-04-q64",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 64,
    "stem": "Basic protein:",
    "options": [
      {
        "key": "a",
        "text": "Internum of eosinophils."
      },
      {
        "key": "b",
        "text": "Externum of eosinophils."
      },
      {
        "key": "c",
        "text": "Induces pores in parasites."
      },
      {
        "key": "d",
        "text": "a & c."
      }
    ],
    "correctOption": "d",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 29)",
    "explanation": "Official Answer: (D) — a & c. Eosinophils (1–4% of WBCs) have a bilobed nucleus and large acidophilic specific granules containing an electron-dense crystalline core (internum) rich in Major Basic Protein (which induces pores in and kills helminthic parasites) surrounded by a less dense externum containing histaminase and arylsulfatase (which degrade histamine and leukotrienes, limiting allergic reactions). Eosinophils also phagocytose antigen-antibody complexes and increase in allergic diseases (bronchial asthma) and parasitic infestations (e.g., bilharziasis).",
    "pdfSource": "histology",
    "pdfPage": 29
  },
  {
    "id": "hist-04-q65",
    "chapterId": "hist-04",
    "chapterNumber": 4,
    "subject": "Histology",
    "questionNumber": 65,
    "stem": "Lishman stain is:",
    "options": [
      {
        "key": "a",
        "text": "Neutral stain."
      },
      {
        "key": "b",
        "text": "Vital stain."
      },
      {
        "key": "c",
        "text": "Supravital stain."
      },
      {
        "key": "d",
        "text": "Metachromatic stain."
      }
    ],
    "correctOption": "a",
    "sourceTag": "Histology · Blood & Leukocytes (PDF p. 29)",
    "explanation": "Official Answer: (A) — Neutral stain. Blood films are routinely stained with neutral Romanowsky stains such as Leishman's or Giemsa stain. Platelets (thrombocytes, 200,000–400,000/mm3, 2–4 micrometers in diameter) are non-nucleated cytoplasmic fragments shed from platelet ribbons of giant bone marrow megakaryocytes (the largest cell in bone marrow) via invaginations of the plasma membrane called demarcation channels. Each platelet has a peripheral pale hyalomere (containing marginal microtubule bundles and actin/myosin) and a central granulomere containing alpha granules (clotting factors, PDGF), delta/dense granules (ATP, ADP, Ca2+, serotonin), and lambda granules (lysosomes). As hematopoietic activity declines with age, active red bone marrow is replaced by yellow marrow rich in fat cells.",
    "pdfSource": "histology",
    "pdfPage": 29
  }
];

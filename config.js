// config.js 
const EXPERIMENT_CONFIG = {

  restDuration: 10, 
  videoDuration: 3,//180, // test -- 3 exp -- 180
  
  // 存储键名
  storageKey: 'visual_memory_exp_v1',
  

  videos: [
    {
      id: "Foxmouse",
      intactPath: "videos/intact/Foxmouse.mp4",
      disruptedPath: "videos/disrupted/Foxmouse_disrupted.mp4",
      
      // temporal问题按类别分组 (保持不变)
      temporalCategories: [
        {
          name: "Boundary-Boundary",
          questions: [
            { 
              id: "bb1", 
              frameA: "stimuli/temporal/Foxmouse/Boundary-Boundary/Foxmouse_B2_1.png", 
              frameB: "stimuli/temporal/Foxmouse/Boundary-Boundary/Foxmouse_B4_1.png", 
              correct: "A" 
            },
            { 
              id: "bb2", 
              frameA: "stimuli/temporal/Foxmouse/Boundary-Boundary/Foxmouse_B5_2.png", 
              frameB: "stimuli/temporal/Foxmouse/Boundary-Boundary/Foxmouse_B4_2.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Boundary-Within",
          questions: [
            { 
              id: "bw1", 
              frameA: "stimuli/temporal/Foxmouse/Boundary-Within/Foxmouse_W5_1.png", 
              frameB: "stimuli/temporal/Foxmouse/Boundary-Within/Foxmouse_B5_1.png", 
              correct: "A" 
            },
            { 
              id: "bw2", 
              frameA: "stimuli/temporal/Foxmouse/Boundary-Within/Foxmouse_W5_2.png", 
              frameB: "stimuli/temporal/Foxmouse/Boundary-Within/Foxmouse_B2_2.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Within-Within",
          questions: [
            { 
              id: "ww1", 
              frameA: "stimuli/temporal/Foxmouse/Within-Within/Foxmouse_W2_1.png", 
              frameB: "stimuli/temporal/Foxmouse/Within-Within/Foxmouse_W2_2.png", 
              correct: "A" 
            },
            { 
              id: "ww2", 
              frameA: "stimuli/temporal/Foxmouse/Within-Within/Foxmouse_W3_2.png", 
              frameB: "stimuli/temporal/Foxmouse/Within-Within/FoxmouseW3_1.png", 
              correct: "B" 
            }
          ]
        }
      ],
      
      // 2-AFC问题 (保持不变)
      afcQuestions: [
        { 
          id: "RQ_M1_001", 
          question: "여우가 나뭇가지를 처음 물고 난 후, 어떤 부엉이가 먼저 나뭇가지로 돌아왔습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Foxmouse/q1/blue_owl.png" },
            { id: "B", image: "stimuli/afc/Foxmouse/q1/red_owl.png" }
          ], 
          correct: "A" 
        },
        { 
          id: "RQ_M1_002", 
          question: "여우가 나타났을 때, 두 마리의 부엉이는 무엇을 하고 있었습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Foxmouse/q2/staring.png" },
            { id: "B", image: "stimuli/afc/Foxmouse/q2/sleeping.png" }
          ], 
          correct: "B" 
        },
        { 
          id: "RQ_M1_003", 
          question: "부엉이들이 깨어나기 전에, 작은 쥐는 어디에 있었습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Foxmouse/q3/trunk.png" },
            { id: "B", image: "stimuli/afc/Foxmouse/q3/snow_start.png" }
          ], 
          correct: "B" 
        }
      ]
    },
    {
      id: "Dustbunnies",
      intactPath: "videos/intact/Dustbunnies.mp4",
      disruptedPath: "videos/disrupted/Dustbunnies_disrupted.mp4",
      
      // temporal问题按类别分组 (根据TO_M2_001-006更新)
      temporalCategories: [
        {
          name: "Boundary-Boundary",
          questions: [
            { 
              id: "TO_M2_001", 
              frameA: "stimuli/temporal/Dustbunnies/Boundary-Boundary/Dustbunnies_B2_2.png", 
              frameB: "stimuli/temporal/Dustbunnies/Boundary-Boundary/Dustbunnies_B5_1.png", 
              correct: "A" 
            },
            { 
              id: "TO_M2_002", 
              frameA: "stimuli/temporal/Dustbunnies/Boundary-Boundary/Dustbunnies_B7_1.png", 
              frameB: "stimuli/temporal/Dustbunnies/Boundary-Boundary/Dustbunnies_B4_1.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Boundary-Within",
          questions: [
            { 
              id: "TO_M2_003", 
              frameA: "stimuli/temporal/Dustbunnies/Boundary-Within/Dustbunnies_B2_1.png", 
              frameB: "stimuli/temporal/Dustbunnies/Boundary-Within/Dustbunnies_W8_1.png", 
              correct: "A" 
            },
            { 
              id: "TO_M2_004", 
              frameA: "stimuli/temporal/Dustbunnies/Boundary-Within/Dustbunnies_W8_2.png", 
              frameB: "stimuli/temporal/Dustbunnies/Boundary-Within/Dustbunnies_B7_2.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Within-Within",
          questions: [
            { 
              id: "TO_M2_005", 
              frameA: "stimuli/temporal/Dustbunnies/Within-Within/Dustbunnies_W11_1.png", 
              frameB: "stimuli/temporal/Dustbunnies/Within-Within/Dustbunnies_W11_2.png", 
              correct: "A" 
            },
            { 
              id: "TO_M2_006", 
              frameA: "stimuli/temporal/Dustbunnies/Within-Within/Dustbunnies_W7_2.png", 
              frameB: "stimuli/temporal/Dustbunnies/Within-Within/Dustbunnies_W7_1.png", 
              correct: "B" 
            }
          ]
        }
      ],
      
      // 2-AFC问题 (保持不变)
      afcQuestions: [
        { 
          id: "RQ_M2_001", 
          question: "진공청소기가 나타났을 때, 작은 토끼들은 어디에 모였습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Dustbunnies/q1/chair.png" },
            { id: "B", image: "stimuli/afc/Dustbunnies/q1/biscuit.png" }
          ], 
          correct: "B" 
        },
        { 
          id: "RQ_M2_002", 
          question: "비디오에서, 누가 먼저 진공청소기의 플러그에 닿았습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Dustbunnies/q2/bunny1.png" },
            { id: "B", image: "stimuli/afc/Dustbunnies/q2/cleaner.png" }
          ], 
          correct: "A" 
        },
        { 
          id: "RQ_M2_003", 
          question: "어떤 작은 토끼가 진공청소기에서 마지막으로 나왔습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Dustbunnies/q3/bunny1.png" },
            { id: "B", image: "stimuli/afc/Dustbunnies/q3/bunny2.png" }
          ], 
          correct: "A" 
        }
      ]
    },
    {
      id: "Clocky",
      intactPath: "videos/intact/Clocky.mp4",
      disruptedPath: "videos/disrupted/Clocky_disrupted.mp4",
      
      // temporal问题按类别分组 (根据TO_M3_001-006更新)
      temporalCategories: [
        {
          name: "Boundary-Boundary",
          questions: [
            { 
              id: "TO_M3_001", 
              frameA: "stimuli/temporal/Clocky/Boundary-Boundary/Clocky_B1_1.png", 
              frameB: "stimuli/temporal/Clocky/Boundary-Boundary/Clocky_B3_1.png", 
              correct: "A" 
            },
            { 
              id: "TO_M3_002", 
              frameA: "stimuli/temporal/Clocky/Boundary-Boundary/Clocky_B7_2.png", 
              frameB: "stimuli/temporal/Clocky/Boundary-Boundary/Clocky_B3_2.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Boundary-Within",
          questions: [
            { 
              id: "TO_M3_003", 
              frameA: "stimuli/temporal/Clocky/Boundary-Within/Clocky_B8.png", 
              frameB: "stimuli/temporal/Clocky/Boundary-Within/Clocky_W8_1.png", 
              correct: "A" 
            },
            { 
              id: "TO_M3_004", 
              frameA: "stimuli/temporal/Clocky/Boundary-Within/Clocky_W8_2.png", 
              frameB: "stimuli/temporal/Clocky/Boundary-Within/Clocky_B7_1.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Within-Within",
          questions: [
            { 
              id: "TO_M3_005", 
              frameA: "stimuli/temporal/Clocky/Within-Within/Clocky_W4_1.png", 
              frameB: "stimuli/temporal/Clocky/Within-Within/Clocky_W4_2.png", 
              correct: "A" 
            },
            { 
              id: "TO_M3_006", 
              frameA: "stimuli/temporal/Clocky/Within-Within/Clocky_W10_2.png", 
              frameB: "stimuli/temporal/Clocky/Within-Within/Clocky_W10_1.png", 
              correct: "B" 
            }
          ]
        }
      ],
      
      // 2-AFC问题 (保持不变)
      afcQuestions: [
        { 
          id: "RQ_M3_001", 
          question: "두 캐릭터 중 누가 먼저 깨어났습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Clocky/q1/clock2.png" },
            { id: "B", image: "stimuli/afc/Clocky/q1/lamp.png" }
          ], 
          correct: "A" 
        },
        { 
          id: "RQ_M3_002", 
          question: "떨어진 부품은 무엇입니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Clocky/q2/ring.png" },
            { id: "B", image: "stimuli/afc/Clocky/q2/spring.png" }
          ], 
          correct: "B" 
        },
        { 
          id: "RQ_M3_003", 
          question: "부품이 떨어진 후, 처음으로 어디에 떨어졌습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Clocky/q3/table.png" },
            { id: "B", image: "stimuli/afc/Clocky/q3/floor.png" }
          ], 
          correct: "B" 
        }
      ]
    },
    {
      id: "Caterpillar",
      intactPath: "videos/intact/Caterpillar.mp4",
      disruptedPath: "videos/disrupted/Caterpillar_disrupted.mp4",
      
      // temporal问题按类别分组 (根据TO_M4_001-006更新)
      temporalCategories: [
        {
          name: "Boundary-Boundary",
          questions: [
            { 
              id: "TO_M4_001", 
              frameA: "stimuli/temporal/Caterpillar/Boundary-Boundary/Caterpillar_B2_2.png", 
              frameB: "stimuli/temporal/Caterpillar/Boundary-Boundary/Caterpillar_B3_1.png", 
              correct: "A" 
            },
            { 
              id: "TO_M4_002", 
              frameA: "stimuli/temporal/Caterpillar/Boundary-Boundary/Caterpillar_B5_1.png", 
              frameB: "stimuli/temporal/Caterpillar/Boundary-Boundary/Caterpillar_B3_2.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Boundary-Within",
          questions: [
            { 
              id: "TO_M4_003", 
              frameA: "stimuli/temporal/Caterpillar/Boundary-Within/Caterpillar_B2_1.png", 
              frameB: "stimuli/temporal/Caterpillar/Boundary-Within/Caterpillar_W3_1.png", 
              correct: "A" 
            },
            { 
              id: "TO_M4_004", 
              frameA: "stimuli/temporal/Caterpillar/Boundary-Within/Caterpillar_B5_2.png", 
              frameB: "stimuli/temporal/Caterpillar/Boundary-Within/Caterpillar_W3_2.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Within-Within",
          questions: [
            { 
              id: "TO_M4_005", 
              frameA: "stimuli/temporal/Caterpillar/Within-Within/Caterpillar_W4_1.png", 
              frameB: "stimuli/temporal/Caterpillar/Within-Within/Caterpillar_W4_2.png", 
              correct: "A" 
            },
            { 
              id: "TO_M4_006", 
              frameA: "stimuli/temporal/Caterpillar/Within-Within/Caterpillar_4_2.png", 
              frameB: "stimuli/temporal/Caterpillar/Within-Within/Caterpillar_4_1.png", 
              correct: "B" 
            }
          ]
        }
      ],
      
      // 2-AFC问题 (保持不变)
      afcQuestions: [
        { 
          id: "RQ_M4_001", 
          question: "두 마리의 딱정벌레 중, 누가 먼저 애벌레를 도왔습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Caterpillar/q1/bug1.png" },
            { id: "B", image: "stimuli/afc/Caterpillar/q1/bug2.png" }
          ], 
          correct: "B" 
        },
        { 
          id: "RQ_M4_002", 
          question: "두 마리의 딱정벌레가 애벌레를 만났을 때, 애벌레는 무엇을 하고 있었습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Caterpillar/q2/squeezing.png" },
            { id: "B", image: "stimuli/afc/Caterpillar/q2/pulling.png" }
          ], 
          correct: "A" 
        },
        { 
          id: "RQ_M4_003", 
          question: "나비가 날아갈 때, 두 마리의 딱정벌레는 무엇을 하고 있었습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Caterpillar/q3/position2.png" },
            { id: "B", image: "stimuli/afc/Caterpillar/q3/position3.png" }
          ], 
          correct: "B" 
        }
      ]
    }
  ],
  
  // Netlify表单配置
  netlifyForm: {
    name: "memory-task-pilot",
    honeypotField: "bot-field"
  },
  
  // 实验说明
  instructions: {
    consentTitle: "시각 기억 심리학 실험",
    consentText: "실험 참여 전에 다음 내용을 자세히 읽어주세요...",
    videoPhase: "동영상 시청 단계",
    testPhase: "테스트 단계"
  }
};

// 导出配置（如果需要模块化）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXPERIMENT_CONFIG;
}
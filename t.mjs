var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAF0CAIAAABwgtBbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAGvJJREFUeNrs3Q1wlPd9J/Bnhd5BAgmQeRFBGBPjCpvIdkls300COLabOu04iZ1k6s40frn6xuObq9vL3TiTzp0z9qR5a6ZpEidxkptrbm4cN+eba5pJJwFyd7U98Z2R7UAMBiwwLwYBkpCwXhf2/qsHi9UiFkmspJX0+cyOeHaft//+n+X57u95nt1NpLZFADBrFekCAAQhAAhCABCEACAIAUAQAoAgBABBCACCEAAEIQAIQgAQhAAgCAFAEAKAIAQAQQgAghAABCEACEIAEIQAIAgBQBACgCAEAEEIAIIQAAQhAAhCABCEACAIAUAQAoAgBABBCACCEAAEIQBMkGJdQN4NvB0d+9uo/YUoOaOfZncUtay9+tiVS/OytJq3T9Y371gcpWb5i6f2d6IFd0TzP+q/EZMnkdqmE8in409Fh56Z+U/zQE3dS39wS19ZaX4X2/S/X2nctdurqHpR1PDDaM48PYEgZLo59Lno+Asz/Dn2R9FLG2/av+Y9E7T8hcfbPvjcLypn/WtpbhSt/gdZiCBkWun6VbT3P830ejdKvPjJ3++cP3dC11LW17/hfz6/sr1VXbj6Wf+xEIRMH7/dGPXN2Ce3aOCvPxv+ebVk8s7hrR4omr97T9FT353NL6orH3W+kAnnYhnyVg72zeCnt6Sm9/r3hX+vntzVnolSs/zC7o6fC0ImnI9PkB+9u/QB+df2W32AipBponNLobew7MN3JBqWXzTIv/d9GxEEIcxkRZ++68z7b7zoaEEIghAYcx18qiOZHIiHq6oXlJSUTObsgCCEKbZr5yttJ47Fwxtu2VS7cPFkzg7khYtlYFoqj6qu/NJXr9mytSmVanx5+1Xf+37NdTfpFhCEMCssuefetW1vzf93j5Zv2hjull7fVPXAfQ2vvhCiUefAWDk0CtNMqPyWPvN3qfaO3q3Dvg6jaMGCEI0rOzoOPPmFqto1tQ99amhUsq3j8FPfGHFRCx95YO+D92c9HmbvatuTWX2GvyW1S674q/+w/8H7k4MTLPvuX5389tMntvwsjAoB3PlPW+Lh3Lub93zpq8e/+FTmwkEQAmOz4n/81/D39E/++8lvPB0G2l97McRScf2iyptvrPt2U+0Tjx978uv1z34nLhZjITVHDMLqO28NpWQ0PAhDOq781c921NYM/XjI6pf/1+mfPJcOyAfuW/SLbUd//KOQiJUfv6vs+veduPLKEJMhgMtuaLpkEFZdd1OY8kxHR9eTX7AdKRwOjcJ0EjJvzqpVcSY1vPpCuIXhEHthoO7bfxNPs/ChP4kHmhOJ+PZKbU38tnfJPfeufOzzyx96JC7yhgq++MH4fXHXay+Gv2u2bI3Hhmqv9Pqmzp/+MtzC3cobm9J/N6dTNrQkzLvgnj8Mw91bzpWnYVHhNrTweF3hkaxTmKEl4bnEaw/ThAkWbf6I7YuKELiE6nvuuOQ0827dOFTbRRnZtq6tPVGzoHfrtlAsLn7y8R2D6RisbXsrPB4GFjz4md03XB8KweOP/WWI1RBOIfxCDXfqy19rH1xCQxRVbN4Yh3G8nJCCcTSGKUNkzvvEXUUL0out+YtHO5/+QfuP/j4sJ07oUKruX3/zUFiGu11P/6DnwfvD2sMjAy0t4ZHqL3/tzc/+ua2MihC4+FvX2gWX/l9dc26auGQMt+WPfb54sAR8+5N/vGfzpu6fPBeSr+rdmGz/ytdC1RgeDJXfonvuDY8cfuob4W5IppW/+ln/9ua33g2nMBymicP46J99Lvydf8/HKgarwzgpQ0D2bN0Wboma8+0809LyeqJ678L3nsvpj98VlhwWtf/B+0MbwpR9zc1vffiTIW773txvE6MiBHIJhVdIkdzT9L3cXHZDukobqsDilAqBt/DfP7r0mb+7cJnhb+vjX274+F1lV62KH9z3iY/FFeSRDz08dLKwZ8u2EIShmky1d4RlLtm6rWLTxrjKrBk8/xfibfcnPhambHx5e3w6MAyfevqHvVFXb1tXTf2iaPAa1/D3bEdHcrBhdT95rvLjd1118o2wzKMPPWIToyKE6WT5ioY1V6+LbxUVlZMwe9drL4bAyD1N+4/+fij/4ls0eE4uJGjf9uZQnIXaK3P6srWrw9/Km9PfP5ds61i0+SPXbNl69cvb46ouFJRNqVT8wYzOf0p/pWx4vGfwgtXOZ5+Lp+nesq3ntR3nasrNHwnrCgPhbt/elgubFx4Pt/JNG8Nk5VHVwJstoVgMpWoYdWFIgyCEQg/C1Vc3xreKyrmTMHtysLDLMUEozuLkG1HJlauWfek/hlptKP/SGfnUN0Ly1X37b0LEnnzqP6/45T+GhCtZtSrk028SiTMtLW2f+8vqB+6rql3T8e51oad/ORiEP/75UE0Zar4z7e1hOMwe51m427dr3wgt3N4cys2wrrDektoloTHv+cUzcSUa1uVFhSAELuHAk1/oevoHQ3dDrVbW1BQP929v3rN5U1yrdQ9+4GHI0R//KC4EQxYevPX3w9jkybZ3fv1yGDh09x/FCXrgQx8JeRYiavGTjx996JGutj0hd1tuvL3mLx4diuEQimGWY4MfxggThGWGu3H07n/w/pCdoQ3p83/rbw53Q5kYFhvWEs8e3w2pGZYTlh/KyrCE0JizHR2VmzeGu2Fdti+Tzy/Ukx/77o46TxR0Cyt+8J0cvz7R33hDrpmXrOl65puT3+by7a+U/NlnR27RPffWffHx+KMU0eAnBUOlePjJLyQnohlRVSjdpupT8E32UUwwF8vAtBQqvHALEVVx3brkoRMTmlLxpS76HEEIFJx0RF38jCAwGs4RAiAIAUAQAsAs5Bwh5EFr68m+vv54uK6utqysLF8TA4IQ8uPsf3uu6MWXJmjhW7c+f/Dg2/Hwpz71BytWLM3XxIAghPzo+8XPdQJwIecI4dISR/fM6To9+euds3uvzgcVIUy9VBRV3vmvBh5/OKoa+RtBVxw8VNp6Mh6u3vF6+fFjOZY2yolDChY99V2dDxP+TtdXrJEXhf8Va0xTvmKNiebQKACzmkOjTHslDY25Jzi7/7dn0kc3AQQhM1HiH//LJZLy6986873v6yhgRA6NAiAIAUAQAoAgBABBCACzhqtGmfZu+/BHc0/wR0daP62bABUhAAhCABCEACAIAUAQAiAIAUAQAoAgBABBCACCEABmCV+xxrS3fv21uSdYenZXdPSAjgIEITPTl7/yZO4Jir7+rV6/UA9cbBehCwAQhAAgCAFg9nGOkGmvv/EGnTAmZR++I9GwPPc0zqoiCIEZq+jTd515/42XmEgQMnv+R+gCAAQhAMxSDo3CRNkSRa1T919sc5Sssw1AEMIU2jq/9tW55VO19muPHBGEIAiBEezd92ZXeVnuadbqJgQhMFN962+/d8lS9ae6iVnDxTIACEIAEIQAIAgBQBACgCAEAEEIAIIQAAQhAAhCAJhpfMUazDq337H5ulUrLzHRF7+ioxCEwAwNwttvveQv1PcLQmYNh0YBEIQAMFs5NAqzz85dc3QCCEKYtXq++tc6AYY4NAqAIAQAQQgAs5BzhDBRnjjVFp3SDaAiBABBCACCEAAEIQAIQgAQhAAgCAFAEAKAIAQAQQgAghAABCEACEIAEIQAIAgBQBACgCAEAEEIAIIQAAQhAAhCABCEACAIAUAQAsBoFesCGI3Pza+d8jY8carNhgBBCFPj1bnlU9+IU7YD5J9DowAIQgAQhAAgCAFAEAKAIAQAQQgAghAABCEACEIAEIQAIAgBQBACgCAEAEEIAIIQAAQhAAhCABCEACAIAUAQAoAgBABBCAAFplgXMJ0sWTPmWY7u0W2AIGSGpGDXM98c60xVn3xYFgI5ODQKgCAEAEEIAIIQAAQhAAhCABCEACAIAUAQAoAgBABBCACCEAAEIQAIQgAQhAAgCAFAEALAtOIX6mFUfnrkiE4AFSEACEIAEIQAMDM4R8j0cXRP1Qdv0w2AihAABCEACEIAEIQAIAgBQBACgCAEAEEIAIIQAAQhAAhCABCEACAIAUAQAoAgBABBCIAgBABBCACCEAAEIQDMJsW6gEm25J57a/70vsJs2+ubN+UYe82WrYXZ7EN3/2lX256Ljb3yS18tu6GpAJvd93Lzm5/9c/8jEITMOmVXrSrftHE6trxgm11cvyi6eBCGFJymHQ6CkJmsp6ent7u7UP4blJRUVVePcuL2kycLpxtDs0PjZ3aHgyBkZjp75kx/f/90bHlBNftsKjXjOxwmmotlABCEACAIAUAQAoAgBABBCACzgY9PUEC6uzoO7t2ZTPYXF5euvnZDcfGwT8glkwP7fvNSPHbFVY2VVQuyxh7Y1dzb804YXrF6XXXt4qyFH9q381RbaxhYunJNbV19flu+f1fzO10dF1v40KoX1i1fsvK9WWPbWg+9fSD9cfj5Yc7VjVljO9uOH9y3IwyUV8xdubYpq08u09Cq51YtqL9qXdbChzbHiKvu73mnZdcro9kcq9Y2ZY0FQQgj2739n+NdZxAG1t9827Cxzf/cebL1XDycPNb0oY9m7prDbrf1UEs8vPPk1hs+eGdpxdzMKDq4Z8e787Y2bth0YVKOW1j42/vfuNjCTxxuyVx1aPOi5asyc2739ueHxoa/mVkYwmb39v8TQiU9dvCR1es25KvZgws/v+ozyYHMhYeV7vz11qFVh83R+LvDvp7m9ebnuzvbz0VmZ3vTB+/MHBvesrQdO3Ruc/x6a9bGgoLi0CiFIkTCUArG+9bsCd5NwXg33d3ZMay4OXpoeK1zOPNuXJCdX1R7ax5bnnvhJ1uP5LibNXH2otpa4yiKDSV9nsrBwzk6MHRv5qozOz8O0cwNFDZc2HzDlnbsUI6NBYIQRlBeUTm2oxnDv1qsuKQ0827p8KUVF5cOvzuB1UnWwrPaWZbdsJIc7SwaPm95Ro2b93aWVs7L1b3DJy4a3tsXbj71H4IQxqy0Ym5d/fljhksbss+lrVizbmg4TJl12mnlNe8bGq6srsk6UbfiqsahXXOIk8yDk5dvxep1mavOWviK1edXHQaWDT9HGCYOswyNXTp8bHgWQ2PjZ5HHZmeuenDhv5M5NnRv5ubI7PxzTc3YQGHK0uEhveqa8793Ub2wLo8HoiH/b151AYVj9boNNXXLurtOVdeMsOusX90YHu9sb62smn/hBSnhkfW33N7Weri8vPLCnAu79XhsHAD5rVdCU2/44J2tR/aHVS+4oj670qqYm2PV4W7jho0dxw719nbXLWsovaDmW3/zbScOt4SxtXXL837JSe5V594cDWubQp9fbHPEKXuxzQGCEC4q7FJzXNIZdsc5aouQEzmiIuzoL7xiM4/l7IUXfI5y1VmXz4xYuk3U//9LrXriNgcUDodGARCEACAIAUAQAoAgBABBCACzgY9PUNgv0JKSqurqcc/e293d09MzJS0Pzc76cpYxaT95cjp2eFdnZ3JgwOsWQQh5U5RIlJaWjnv2gf7+KYzwy2n5NO3wMLsXLYIQJsT+9TePafqFjzxQ9cB9U97s1n/9b7pf+H9jmqXh1RemvNn925uPfObhMc2y7IffLL2+yQsVQQgTpf21F8c0fXXLrYXQ7JCCY215QwE0+2xHx1ibvaTD70swXblYBgBBCACzlUOjTI3yioqSUVyUcZkXX0zEWmoWLhzNZCXFl/WfK+9rmZwOr6quPptKTfRaQBAyE8wZNB3XMjnXguZ9LZPT4ZfziRGYKonUNp1AHuy7O+o8MbrSJKqquG7dWJc/1ms3JmItNdfdNNYFdr32YnKstWC+11JVu6a4ftGYFpg8dKKrbc/YasEJW0uTfRSCkBkWhDAmgpCJ5mIZAAQhAAhCABCEACAIAUAQAoAgBABBCACCEAAEIQAIQgCYQfz6BJNtfF+HPTny/qXbkyPvX7o9Ocbx1d4gCJkJrnjs39Y+8XiBBmHO38lrePWFwmz2/vU354jw+me/U75pYwE2u3frttc3b/I/AkHILHVmUIE0piiRGP0P6fX39xdON5YUFyeKimZ2h4MgZGbq7ek53dVVII0pLS0d5S/Cp6vGkycLpxtDs0f5E77Tt8Nhwt+Z6QIABCEACEIAEIQAIAgBQBACwCzg4xMUlhOHW3p7uyur5tfW1V84trPteGd7a3l55aLlqy42tri4JIwNf7PG9ve803pk/8XGXqbcC4/HhoG6ZQ2lFXOzxiaTA+FZh7+5x1bX1FXXLs5vsy+58Hhz5B6be3OEsQuuqM97h4MgZGbat+Ol1kMt8fDShvc2rG3KHLt/V/Pb+9+Ih48d2d/4uxuzdsp7fvPSubGH96+/+basnfLOl7bGwwf37Gj60EfzuGtuaz20e/vzF1t4d1fHzl9vDWETht9u2b3+ltsz0y483vyrf4jHhnkbN2zKipydL23r7myPh9dcu2HEyBl3CmYu/Orrb8l687Hz/27rPNkaD69Ys65+dePFNsep9uOr12242OaoPLAna3NAQXFolEIRAmMoBdOZ8e5OdsRHwg46TJ859uDenecX1dkedsTD5j3wRmYAHD3wRh5b/vaBPVk1Vtaq45yLxx4Zvuq4IDv/LPbtyMrvoaDKeo6Xr+PYoeEL/23W5hhKwTikc2yOsOFC1Zs5tuX15szNEZ6IVziCEC5VoAwMXM70yYH+nNXP5H0vWmawXdjOM1ljk7medX/P6dE/x8ts59nhC8+9ObJib4RnnRzwkkYQwthU1y4uzzhmWL2wLnuCjEfClFmHEBfXnz9mWFxcUl07bPb5w+9W19TlseVZC69b1jCsYctXZt6tqVuWoyXZ7aytyzzKWrukPo/Nrq1bnrnwmiuWZ46trF6QOTZrc5RWzK2srsncHJVVC4Z1wvDNEZbmFU7Bco6QAtK4YWPLrldC9RZ2rCuHnyAMrm76Fwd2Nff2vFNcXLriqsassfVXrSsuKT3V1hqPzbrqJD6/FcaGv0tXrsnvVSdZC89adW1d/ZprNxwbvFgmjM06DxdacvX1t8QHV9MXCA0/DxcW1fj+TQf37gx9MrdqQXiOeWx2WPjV1//LwSO3/ReuOqTX0KpH3BxhYw1tjlVr35c1Np5+aGO5WAZBCKPeNTfdctEXa3FJ1hUZWWPDrjxrb54VVznGXn4W5lj4ouWrclzkEjJoxEtkz1VmVQty9MnlV+E53hPkXvUlN0eOsVBQHBoFQBACgCAEAEEIAIIQAAQhAMwGPj5BQZszZ05FZeW4Z+/v6+vv75+SlldUVMwpHv//r9NdXdOxw3u6u8+cOeN1iyCEfO6X586bdzlLmKogLK+sLC0tnY5BeDkdHt55CEIEIUyI3q3bxjR9yaqGOatWTXmz+7c3n+3oGFuCbto45c1OtXf0NTePaZaypqZEje9RQxDChHl986YxTb/ysc/XPvH4lDf7yGcebn/txTHN0pRKTXmzQwqOtcOv2bK1ECIcxsHFMgAIQgCYrRwaZYregs2ZM5prSYpLSgptLaO8BKYokbiclud9LZPT4aOc/TLXAoKQmaBi0HRcS83ChZPQP3lfy+R0eFV1tdc2ghAuoW9vy1gvAS2QtYxjgclDJ6Z8LX0vN4+59wp1FpgIidQ2nUAe7Ls76jyhG8i/JvsoJpiLZQAQhAAgCAFAEAKAIAQAQQgAghAABCEACEIAEIQAIAhhuGQycbo3kezVE0yI9tNRd79uYAL50m3GGX7d/amevijc+pPpX1Qf6NYrTIjjHecGKssSFeVRRVmqslSvIAiZIr3JqOudqKc36h1IZY2ac1M08LweYgJ196W6+9IDRUWJyrLUvIpoXnkY1jEIQiYr/069kzh7NnWxaRLL9BOTtIcKr8PTPVG4Bek4lIgIQiZOZ3fU0RXqv/heKseURR+Iomd1GHlW8nuXmCBOxFAjVlWkFlYliotTOg1BSN4isK0z6k+Oeoa6qPyWqNfRUfInEUVz/jAaTbKFGvFU+qBFav7cSBwyVo4mkC2ZTBw6njjaNpYUjN9V/bE3VuRTxcNRau7YZglxuL81/TYOBCHj1JtM70e6+8bzhjrss8qfkoXkR+WfRIkPjGfGUB2Gt3GyEEHIOLWejHJcETPKLKz4vfRBLRifkqJo7uNRYvNlLSRkoU8fMkqJ1DadwPly8K2jeXphvROd/U2UelOnMpaXzRVR4tr0+ea8WDg/sbDKyUIuzXEsMl8NiSjKz44jlIaJD4zz0BbAZHJolIwgLE5VljmoyQwxv0IfIAgZu2ULU+UluoFpb0lt5EMUCELG9YIoiuoXp7+qA6ap0uKovi6qrtQTjJZzhIyQhcsWpq+4azuVGN/nKGCKXrqJmqqoZm7K160hCMmDytKocnEqxGFH17kvdYRCrgLnz4vmV4pABCETEYcL098109Wb6npn6EtHoVBKwKqK1PyqqNyejMvgc4SMQZyIPX1qRKZSeUlUUR5VzZV/CEKmVHd/1NOX6OmNnEdkEpQWRxVl6Vtlqe/UJs+8oWKc0kdNS1NR1blQ7OuP+gfiH6zXN+RBUVEirvzKStKvtIyTf1IQQUiBhuK54bNn01/VFufiQNJ1p4yh5isticpKEyH5yot9ChBByDR+I5+Zi+l9WTKZ6D+b6ulLJJOpEI29A5f1vd7MDKHaCzVfKPhK5qSKi8+/kVLwIQiZiS+y4lRxNHgcNWM3190f4jDRNxDF6Zg8k3JMdcYeMChLFBWlQqlXlAh/o9KioZN8Mg9ByGzeOaYrgNS88mFFQFw7xgEZ9PSm/6ogp1GFVxLe9BSfC7yioqGrOrNiz9ZEEELO2vF8QFadHxWfegz6QimZSgwOpCMzXVw6DTlZORcGytLXraQHKsrS3Z6RdhcGHghCyJ/41ONQKTlibRGSMuTlYGqeqykHq8z0oddzww7AZtXlGT82UlH+blcP1nPn8q84GulyTVGHIITCrFoySpN3D7rm2nFn/YJ5MhkNnBn2K1Rnz6b6+kf+XaopLEOHirML3iukz8NlPRjXbZldNPxLyEQaCEJmcz1UOvx+6YjBUJhRkRrj48BF+YZaAAQhAAhCABCEACAIAUAQAoAgBABBCACCEAAEIQAIQgAQhAAgCAFAEAKAIAQAQQgAghAABCEACEIAEIQAIAgBQBACgCAEAEEIAIIQAAQhAAhCABCEACAIAUAQAoAgBABBCACCEAAEIQAIQgAQhAAgCAFAEAKAIAQAQQgAghAABCEACEIAGIP/L8AAjoopKkSA8FIAAAAASUVORK5CYII=";

var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAoRJREFUeNrsmktoE0EYgP9UKcRaUkqLEDFNb0V8Ea8Vb3oRH6AX8dCzF1cFURQf4KMXNV489yCeBPWmnqoGb5aiIL1pUgyINWTRuBK0cSdN6oY27obspjvt98Eyme38yezH/vPPLhUBAAAAAAAAzYj4+WVTInftxmjnO76/fOE6pnfvvnanmk6JnPbjmrt8lDfWrrwOYtTmGx6BNknNsi8ZNoFrEgQicGVZH7YJ9V68KZVEvPm2IZdH4H/JTPq7tyKFEYhAQCAC2ca0SMk+PnoYN2wfPQhcipJ3Ph53HTeez8s2Upg1EIGwytZAVRh2ln55GofAJtX1hlkghVkDAYEIpAp754CHpw9VncNSYLgDEYhABFJEOsCmM6ca+l/u3ENgK2y4fK7xxCoRSAojkI30kk2yG8Pmz7Un8PerN57G6fAKa0UEzh48xhoICNQnhRNzc65jCqP75cfM28X+xpHd0p95HlhcbmCAO5AURiB0fBtTyc3KfDZb/bxuz6jnuPl376VimhKJxaRrx3bPcX9eZxbujqEhiSS26CmwfhGK0sQDKT59VP28+fGTf2Oy3xpj7L4zrnDcEMv6JNFoUvofpj3HfT5yuNr2HToqPWMnAhXo2/9zT4lctZsrGmXftdTCnFkDKSIIpAr7zqBx1nWMmb4vZbEW+90SlZhxMrC4r+nb+giMXrrgOsZ6NillxyNZ98jWQOMkAIGkMAIRiEDXNev6reqrpFZfJ6nXVipGta1Q/y31u9pWYedFl2c+LHvechSCen+5vzc73yzOWa1VweFRjkc51kDogMCiZtdeDJvACfuY1kTedG2+4SkitULSZze7dBCY0i9jAAAAACBE/BVgAKD6wpn2htc3AAAAAElFTkSuQmCC";

var en$1 = {
	"g2s.entry.name": "AkaDako",
	"g2s.entry.description": "Connect Grove sensors and actuators."
};
var ja$1 = {
	"g2s.entry.name": "AkaDako",
	"g2s.entry.description": "Groveのセンサー・アクチュエーターを接続する。"
};
var translations$1 = {
	en: en$1,
	ja: ja$1,
	"ja-Hira": {
	"g2s.entry.name": "AkaDako",
	"g2s.entry.description": "Groveのセンサー・アクチュエーターをせつぞくする。"
}
};

/**
 * This is an extension for Xcratch.
 */
/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */

var formatMessage$1 = function formatMessage(messageData) {
  return messageData.defaultMessage;
};

var entry = {
  get name() {
    return formatMessage$1({
      id: 'g2s.entry.name',
      default: 'AkaDako',
      description: 'name of the extension'
    });
  },

  extensionId: 'g2s',
  extensionURL: 'https://tfabworks.github.io/xcx-g2s/dist/g2s.mjs',
  collaborator: 'TFabWorks',
  iconURL: img$2,
  insetIconURL: img$1,

  get description() {
    return formatMessage$1({
      defaultMessage: 'an extension for Xcratch',
      description: 'Description for this extension',
      id: 'g2s.entry.description'
    });
  },

  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: false,
  helpLink: 'https://tfabworks.com/akadako/',
  setFormatMessage: function setFormatMessage(formatter) {
    formatMessage$1 = formatter;
  },
  translationMap: translations$1
};

function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}

var runtime = {exports: {}};

(function (module) {
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof$1(value) === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
})(runtime);

var regenerator = runtime.exports;

/**
 * Types of block
 * @enum {string}
 */
var BlockType = {
  /**
   * Boolean reporter with hexagonal shape
   */
  BOOLEAN: 'Boolean',

  /**
   * A button (not an actual block) for some special action, like making a variable
   */
  BUTTON: 'button',

  /**
   * Command block
   */
  COMMAND: 'command',

  /**
   * Specialized command block which may or may not run a child branch
   * The thread continues with the next block whether or not a child branch ran.
   */
  CONDITIONAL: 'conditional',

  /**
   * Specialized hat block with no implementation function
   * This stack only runs if the corresponding event is emitted by other code.
   */
  EVENT: 'event',

  /**
   * Hat block which conditionally starts a block stack
   */
  HAT: 'hat',

  /**
   * Specialized command block which may or may not run a child branch
   * If a child branch runs, the thread evaluates the loop block again.
   */
  LOOP: 'loop',

  /**
   * General reporter with numeric or string value
   */
  REPORTER: 'reporter'
};
var blockType = BlockType;

/**
 * Block argument types
 * @enum {string}
 */
var ArgumentType = {
  /**
   * Numeric value with angle picker
   */
  ANGLE: 'angle',

  /**
   * Boolean value with hexagonal placeholder
   */
  BOOLEAN: 'Boolean',

  /**
   * Numeric value with color picker
   */
  COLOR: 'color',

  /**
   * Numeric value with text field
   */
  NUMBER: 'number',

  /**
   * String value with text field
   */
  STRING: 'string',

  /**
   * String value with matrix field
   */
  MATRIX: 'matrix',

  /**
   * MIDI note number with note picker (piano) field
   */
  NOTE: 'note',

  /**
   * Inline image on block (as part of the label)
   */
  IMAGE: 'image'
};
var argumentType = ArgumentType;

var Color$1 = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }

  _createClass(Color, null, [{
    key: "RGB_BLACK",
    get:
    /**
     * @typedef {object} RGBObject - An object representing a color in RGB format.
     * @property {number} r - the red component, in the range [0, 255].
     * @property {number} g - the green component, in the range [0, 255].
     * @property {number} b - the blue component, in the range [0, 255].
     */

    /**
     * @typedef {object} HSVObject - An object representing a color in HSV format.
     * @property {number} h - hue, in the range [0-359).
     * @property {number} s - saturation, in the range [0,1].
     * @property {number} v - value, in the range [0,1].
     */

    /** @type {RGBObject} */
    function get() {
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }
    /** @type {RGBObject} */

  }, {
    key: "RGB_WHITE",
    get: function get() {
      return {
        r: 255,
        g: 255,
        b: 255
      };
    }
    /**
     * Convert a Scratch decimal color to a hex string, #RRGGBB.
     * @param {number} decimal RGB color as a decimal.
     * @return {string} RGB color as #RRGGBB hex string.
     */

  }, {
    key: "decimalToHex",
    value: function decimalToHex(decimal) {
      if (decimal < 0) {
        decimal += 0xFFFFFF + 1;
      }

      var hex = Number(decimal).toString(16);
      hex = "#".concat('000000'.substr(0, 6 - hex.length)).concat(hex);
      return hex;
    }
    /**
     * Convert a Scratch decimal color to an RGB color object.
     * @param {number} decimal RGB color as decimal.
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */

  }, {
    key: "decimalToRgb",
    value: function decimalToRgb(decimal) {
      var a = decimal >> 24 & 0xFF;
      var r = decimal >> 16 & 0xFF;
      var g = decimal >> 8 & 0xFF;
      var b = decimal & 0xFF;
      return {
        r: r,
        g: g,
        b: b,
        a: a > 0 ? a : 255
      };
    }
    /**
     * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
     * CC-BY-SA Tim Down:
     * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     * @param {!string} hex Hex representation of the color.
     * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */

  }, {
    key: "hexToRgb",
    value: function hexToRgb(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
    /**
     * Convert an RGB color object to a hex color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!string} Hex representation of the color.
     */

  }, {
    key: "rgbToHex",
    value: function rgbToHex(rgb) {
      return Color.decimalToHex(Color.rgbToDecimal(rgb));
    }
    /**
     * Convert an RGB color object to a Scratch decimal color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!number} Number representing the color.
     */

  }, {
    key: "rgbToDecimal",
    value: function rgbToDecimal(rgb) {
      return (rgb.r << 16) + (rgb.g << 8) + rgb.b;
    }
    /**
    * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
    * @param {!string} hex Hex representation of the color.
    * @return {!number} Number representing the color.
    */

  }, {
    key: "hexToDecimal",
    value: function hexToDecimal(hex) {
      return Color.rgbToDecimal(Color.hexToRgb(hex));
    }
    /**
     * Convert an HSV color to RGB format.
     * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */

  }, {
    key: "hsvToRgb",
    value: function hsvToRgb(hsv) {
      var h = hsv.h % 360;
      if (h < 0) h += 360;
      var s = Math.max(0, Math.min(hsv.s, 1));
      var v = Math.max(0, Math.min(hsv.v, 1));
      var i = Math.floor(h / 60);
      var f = h / 60 - i;
      var p = v * (1 - s);
      var q = v * (1 - s * f);
      var t = v * (1 - s * (1 - f));
      var r;
      var g;
      var b;

      switch (i) {
        default:
        case 0:
          r = v;
          g = t;
          b = p;
          break;

        case 1:
          r = q;
          g = v;
          b = p;
          break;

        case 2:
          r = p;
          g = v;
          b = t;
          break;

        case 3:
          r = p;
          g = q;
          b = v;
          break;

        case 4:
          r = t;
          g = p;
          b = v;
          break;

        case 5:
          r = v;
          g = p;
          b = q;
          break;
      }

      return {
        r: Math.floor(r * 255),
        g: Math.floor(g * 255),
        b: Math.floor(b * 255)
      };
    }
    /**
     * Convert an RGB color to HSV format.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     */

  }, {
    key: "rgbToHsv",
    value: function rgbToHsv(rgb) {
      var r = rgb.r / 255;
      var g = rgb.g / 255;
      var b = rgb.b / 255;
      var x = Math.min(Math.min(r, g), b);
      var v = Math.max(Math.max(r, g), b); // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate

      var h = 0;
      var s = 0;

      if (x !== v) {
        var f = r === x ? g - b : g === x ? b - r : r - g;
        var i = r === x ? 3 : g === x ? 5 : 1;
        h = (i - f / (v - x)) * 60 % 360;
        s = (v - x) / v;
      }

      return {
        h: h,
        s: s,
        v: v
      };
    }
    /**
     * Linear interpolation between rgb0 and rgb1.
     * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
     * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
     * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
     * @return {RGBObject} the interpolated color.
     */

  }, {
    key: "mixRgb",
    value: function mixRgb(rgb0, rgb1, fraction1) {
      if (fraction1 <= 0) return rgb0;
      if (fraction1 >= 1) return rgb1;
      var fraction0 = 1 - fraction1;
      return {
        r: fraction0 * rgb0.r + fraction1 * rgb1.r,
        g: fraction0 * rgb0.g + fraction1 * rgb1.g,
        b: fraction0 * rgb0.b + fraction1 * rgb1.b
      };
    }
  }]);

  return Color;
}();

var color = Color$1;

var Color = color;
/**
 * @fileoverview
 * Utilities for casting and comparing Scratch data-types.
 * Scratch behaves slightly differently from JavaScript in many respects,
 * and these differences should be encapsulated below.
 * For example, in Scratch, add(1, join("hello", world")) -> 1.
 * This is because "hello world" is cast to 0.
 * In JavaScript, 1 + Number("hello" + "world") would give you NaN.
 * Use when coercing a value before computation.
 */

var Cast = /*#__PURE__*/function () {
  function Cast() {
    _classCallCheck(this, Cast);
  }

  _createClass(Cast, null, [{
    key: "toNumber",
    value:
    /**
     * Scratch cast to number.
     * Treats NaN as 0.
     * In Scratch 2.0, this is captured by `interp.numArg.`
     * @param {*} value Value to cast to number.
     * @return {number} The Scratch-casted number value.
     */
    function toNumber(value) {
      // If value is already a number we don't need to coerce it with
      // Number().
      if (typeof value === 'number') {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        if (Number.isNaN(value)) {
          return 0;
        }

        return value;
      }

      var n = Number(value);

      if (Number.isNaN(n)) {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        return 0;
      }

      return n;
    }
    /**
     * Scratch cast to boolean.
     * In Scratch 2.0, this is captured by `interp.boolArg.`
     * Treats some string values differently from JavaScript.
     * @param {*} value Value to cast to boolean.
     * @return {boolean} The Scratch-casted boolean value.
     */

  }, {
    key: "toBoolean",
    value: function toBoolean(value) {
      // Already a boolean?
      if (typeof value === 'boolean') {
        return value;
      }

      if (typeof value === 'string') {
        // These specific strings are treated as false in Scratch.
        if (value === '' || value === '0' || value.toLowerCase() === 'false') {
          return false;
        } // All other strings treated as true.


        return true;
      } // Coerce other values and numbers.


      return Boolean(value);
    }
    /**
     * Scratch cast to string.
     * @param {*} value Value to cast to string.
     * @return {string} The Scratch-casted string value.
     */

  }, {
    key: "toString",
    value: function toString(value) {
      return String(value);
    }
    /**
     * Cast any Scratch argument to an RGB color array to be used for the renderer.
     * @param {*} value Value to convert to RGB color array.
     * @return {Array.<number>} [r,g,b], values between 0-255.
     */

  }, {
    key: "toRgbColorList",
    value: function toRgbColorList(value) {
      var color = Cast.toRgbColorObject(value);
      return [color.r, color.g, color.b];
    }
    /**
     * Cast any Scratch argument to an RGB color object to be used for the renderer.
     * @param {*} value Value to convert to RGB color object.
     * @return {RGBOject} [r,g,b], values between 0-255.
     */

  }, {
    key: "toRgbColorObject",
    value: function toRgbColorObject(value) {
      var color;

      if (typeof value === 'string' && value.substring(0, 1) === '#') {
        color = Color.hexToRgb(value); // If the color wasn't *actually* a hex color, cast to black

        if (!color) color = {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        };
      } else {
        color = Color.decimalToRgb(Cast.toNumber(value));
      }

      return color;
    }
    /**
     * Determine if a Scratch argument is a white space string (or null / empty).
     * @param {*} val value to check.
     * @return {boolean} True if the argument is all white spaces or null / empty.
     */

  }, {
    key: "isWhiteSpace",
    value: function isWhiteSpace(val) {
      return val === null || typeof val === 'string' && val.trim().length === 0;
    }
    /**
     * Compare two values, using Scratch cast, case-insensitive string compare, etc.
     * In Scratch 2.0, this is captured by `interp.compare.`
     * @param {*} v1 First value to compare.
     * @param {*} v2 Second value to compare.
     * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
     */

  }, {
    key: "compare",
    value: function compare(v1, v2) {
      var n1 = Number(v1);
      var n2 = Number(v2);

      if (n1 === 0 && Cast.isWhiteSpace(v1)) {
        n1 = NaN;
      } else if (n2 === 0 && Cast.isWhiteSpace(v2)) {
        n2 = NaN;
      }

      if (isNaN(n1) || isNaN(n2)) {
        // At least one argument can't be converted to a number.
        // Scratch compares strings as case insensitive.
        var s1 = String(v1).toLowerCase();
        var s2 = String(v2).toLowerCase();

        if (s1 < s2) {
          return -1;
        } else if (s1 > s2) {
          return 1;
        }

        return 0;
      } // Handle the special case of Infinity


      if (n1 === Infinity && n2 === Infinity || n1 === -Infinity && n2 === -Infinity) {
        return 0;
      } // Compare as numbers.


      return n1 - n2;
    }
    /**
     * Determine if a Scratch argument number represents a round integer.
     * @param {*} val Value to check.
     * @return {boolean} True if number looks like an integer.
     */

  }, {
    key: "isInt",
    value: function isInt(val) {
      // Values that are already numbers.
      if (typeof val === 'number') {
        if (isNaN(val)) {
          // NaN is considered an integer.
          return true;
        } // True if it's "round" (e.g., 2.0 and 2).


        return val === parseInt(val, 10);
      } else if (typeof val === 'boolean') {
        // `True` and `false` always represent integer after Scratch cast.
        return true;
      } else if (typeof val === 'string') {
        // If it contains a decimal point, don't consider it an int.
        return val.indexOf('.') < 0;
      }

      return false;
    }
  }, {
    key: "LIST_INVALID",
    get: function get() {
      return 'INVALID';
    }
  }, {
    key: "LIST_ALL",
    get: function get() {
      return 'ALL';
    }
    /**
     * Compute a 1-based index into a list, based on a Scratch argument.
     * Two special cases may be returned:
     * LIST_ALL: if the block is referring to all of the items in the list.
     * LIST_INVALID: if the index was invalid in any way.
     * @param {*} index Scratch arg, including 1-based numbers or special cases.
     * @param {number} length Length of the list.
     * @param {boolean} acceptAll Whether it should accept "all" or not.
     * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.
     */

  }, {
    key: "toListIndex",
    value: function toListIndex(index, length, acceptAll) {
      if (typeof index !== 'number') {
        if (index === 'all') {
          return acceptAll ? Cast.LIST_ALL : Cast.LIST_INVALID;
        }

        if (index === 'last') {
          if (length > 0) {
            return length;
          }

          return Cast.LIST_INVALID;
        } else if (index === 'random' || index === 'any') {
          if (length > 0) {
            return 1 + Math.floor(Math.random() * length);
          }

          return Cast.LIST_INVALID;
        }
      }

      index = Math.floor(Cast.toNumber(index));

      if (index < 1 || index > length) {
        return Cast.LIST_INVALID;
      }

      return index;
    }
  }]);

  return Cast;
}();

var cast = Cast;

var en = {
	"g2s.name": "AkaDako",
	"g2s.connectBoard": "connect board",
	"g2s.disconnectBoard": "disconnect board",
	"g2s.isConnected": "board is connected",
	"g2s.boardState.connected": "connected",
	"g2s.boardState.disconnected": "disconnected",
	"g2s.boardStateChanged": "When board is [STATE]",
	"g2s.analogConnector.prefix": "Analog",
	"g2s.analogLevelA1": "level of analog A1",
	"g2s.analogLevelA2": "level of analog A2",
	"g2s.analogLevelB1": "level of analog B1",
	"g2s.analogLevelB2": "level of analog B2",
	"g2s.digitalLevelA1": "level of digital A1",
	"g2s.digitalLevelA2": "level of digital A2",
	"g2s.digitalLevelB1": "level of digital B1",
	"g2s.digitalLevelB2": "level of digital B2",
	"g2s.digitalConnector.prefix": "Digital",
	"g2s.digitalLevelMenu.low": "Low",
	"g2s.digitalLevelMenu.high": "High",
	"g2s.inputBiasSet": "[PIN] bias [BIAS]",
	"g2s.inputBiasMenu.none": "none",
	"g2s.inputBiasMenu.pullUp": "pull up",
	"g2s.digitalIsHigh": "[CONNECTOR] is HIGH",
	"g2s.digitalLevelChanged": "When [CONNECTOR] is [LEVEL]",
	"g2s.digitalLevelSet": "[CONNECTOR] to [LEVEL]",
	"g2s.analogLevelSet": "[CONNECTOR] to PWM [LEVEL]",
	"g2s.servoTurn": "Servo [CONNECTOR] turn [DEGREE]",
	"g2s.i2cWrite": "I2C write on [ADDRESS] register [REGISTER] with [DATA]",
	"g2s.i2cReadOnce": "I2C read [LENGTH] bytes from [ADDRESS] register [REGISTER]",
	"g2s.oneWireReset": "OneWire [CONNECTOR] reset",
	"g2s.oneWireWrite": "OneWire [CONNECTOR] write [DATA]",
	"g2s.oneWireRead": "OneWire [CONNECTOR] read [LENGTH] bytes",
	"g2s.oneWireWriteAndRead": "OneWire [CONNECTOR] write [DATA] then read [LENGTH] bytes",
	"g2s.neoPixelConfigStrip": "Set full color LED length [LENGTH] on [CONNECTOR]",
	"g2s.neoPixelSetColor": "full color LED color [POSITION] R [RED] G [GREEN] B [BLUE]",
	"g2s.neoPixelShow": "full color LED show",
	"g2s.neoPixelClear": "full color LED clear",
	"g2s.measureDistance": "distance (mm)",
	"g2s.getAcceleration": "acceleration [AXIS] (m/s^2)",
	"g2s.accelerationAxisMenu.x": "x",
	"g2s.accelerationAxisMenu.y": "y",
	"g2s.accelerationAxisMenu.z": "z",
	"g2s.accelerationAxisMenu.absolute": "absolute",
	"g2s.numberAtIndex": "number of [ARRAY] at [INDEX]",
	"g2s.spliceNumbers": "[ARRAY] at [INDEX] delete [DELETE] insert [INSERT]",
	"g2s.lengthOfNumbers": "length of numbers [ARRAY]",
	"g2s.readBytesAs": "read bytes [ARRAY] as [TYPE] [ENDIAN]",
	"g2s.int64Operation": "int64 [LEFT] [OP] [RIGHT]",
	"g2s.bitOperation": "bit [LEFT] [OP] [RIGHT]",
	"g2s.bitNot": "bit NOT [VALUE]"
};
var ja = {
	"g2s.name": "AkaDako",
	"g2s.connectBoard": "ボードを接続する",
	"g2s.disconnectBoard": "ボードを切断する",
	"g2s.isConnected": "ボードに接続している",
	"g2s.boardState.connected": "つながった",
	"g2s.boardState.disconnected": "切れた",
	"g2s.boardStateChanged": "ボードが[STATE]とき",
	"g2s.analogConnector.prefix": "アナログ",
	"g2s.analogLevelA1": "アナログA1のレベル",
	"g2s.analogLevelA2": "アナログA2のレベル",
	"g2s.analogLevelB1": "アナログB1のレベル",
	"g2s.analogLevelB2": "アナログB2のレベル",
	"g2s.digitalLevelA1": "デジタルA1のレベル",
	"g2s.digitalLevelA2": "デジタルA2のレベル",
	"g2s.digitalLevelB1": "デジタルB1のレベル",
	"g2s.digitalLevelB2": "デジタルB2のレベル",
	"g2s.digitalConnector.prefix": "デジタル",
	"g2s.digitalLevelMenu.low": "ロー",
	"g2s.digitalLevelMenu.high": "ハイ",
	"g2s.inputBiasSet": "[PIN]を[BIAS]",
	"g2s.inputBiasMenu.none": "プルアップしない",
	"g2s.inputBiasMenu.pullUp": "プルアップする",
	"g2s.digitalIsHigh": "[CONNECTOR]がハイである",
	"g2s.digitalLevelChanged": "[CONNECTOR]が[LEVEL]になったとき",
	"g2s.digitalLevelSet": "[CONNECTOR]を[LEVEL]にする",
	"g2s.analogLevelSet": "[CONNECTOR]をPWM[LEVEL]にする",
	"g2s.servoTurn": "[CONNECTOR]のサーボを[DEGREE]度にする",
	"g2s.i2cWrite": "I2C[ADDRESS]のレジスタ[REGISTER]に[DATA]を書き込む",
	"g2s.i2cReadOnce": "I2C[ADDRESS]のレジスタ[REGISTER]を[LENGTH]バイト読み出す",
	"g2s.oneWireReset": "[CONNECTOR]のOneWireをリセットする",
	"g2s.oneWireWrite": "[CONNECTOR]のOneWireに[DATA]を書き込む",
	"g2s.oneWireRead": "[CONNECTOR]のOneWireから[LENGTH]バイト読み出す",
	"g2s.oneWireWriteAndRead": "[CONNECTOR]のOneWireに[DATA]を書き込んでから[LENGTH]バイト読み出す",
	"g2s.neoPixelConfigStrip": "[CONNECTOR]に長さ[LENGTH]のフルカラーLEDをつなぐ",
	"g2s.neoPixelSetColor": "フルカラーLED[POSITION]の色を赤[RED] 緑[GREEN] 青[BLUE]にする",
	"g2s.neoPixelShow": "フルカラーLEDを光らせる",
	"g2s.neoPixelClear": "フルカラーLEDを消す",
	"g2s.measureDistance": "距離(mm)",
	"g2s.getAcceleration": "加速度[AXIS](m/s^2)",
	"g2s.accelerationAxisMenu.x": "x",
	"g2s.accelerationAxisMenu.y": "y",
	"g2s.accelerationAxisMenu.z": "z",
	"g2s.accelerationAxisMenu.absolute": "絶対値",
	"g2s.numberAtIndex": "数列[ARRAY]の[INDEX]番目",
	"g2s.spliceNumbers": "数列[ARRAY]の[INDEX]番目から[DELETE]個削除して[INSERT]を入れる",
	"g2s.lengthOfNumbers": "数列[ARRAY]の長さ",
	"g2s.readBytesAs": "バイト列[ARRAY]を[TYPE][ENDIAN]として読む",
	"g2s.int64Operation": "int64 [LEFT] [OP] [RIGHT]",
	"g2s.bitOperation": "bit [LEFT] [OP] [RIGHT]",
	"g2s.bitNot": "bit NOT [VALUE]"
};
var translations = {
	en: en,
	ja: ja,
	"ja-Hira": {
	"g2s.name": "AkaDako",
	"g2s.connectBoard": "ボードをせつぞくする",
	"g2s.disconnectBoard": "ボードをせつだんする",
	"g2s.isConnected": "ボードにせつぞくている",
	"g2s.boardState.connected": "つながった",
	"g2s.boardState.disconnected": "きれた",
	"g2s.boardStateChanged": "ボードが[STATE]とき",
	"g2s.analogConnector.prefix": "アナログ",
	"g2s.analogLevelA1": "アナログA1のレベル",
	"g2s.analogLevelA2": "アナログA2のレベル",
	"g2s.analogLevelB1": "アナログB1のレベル",
	"g2s.analogLevelB2": "アナログB2のレベル",
	"g2s.digitalLevelA1": "デジタルA1のレベル",
	"g2s.digitalLevelA2": "デジタルA2のレベル",
	"g2s.digitalLevelB1": "デジタルB1のレベル",
	"g2s.digitalLevelB2": "デジタルB2のレベル",
	"g2s.digitalConnector.prefix": "デジタル",
	"g2s.digitalLevelMenu.low": "ロー",
	"g2s.digitalLevelMenu.high": "ハイ",
	"g2s.inputBiasSet": "[PIN]を[BIAS]",
	"g2s.inputBiasMenu.none": "プルアップしない",
	"g2s.inputBiasMenu.pullUp": "プルアップする",
	"g2s.digitalIsHigh": "[CONNECTOR]がハイである",
	"g2s.digitalLevelChanged": "[CONNECTOR]が[LEVEL]になったとき",
	"g2s.digitalLevelSet": "[CONNECTOR]を[LEVEL]にする",
	"g2s.analogLevelSet": "[CONNECTOR]をPWM[LEVEL]にする",
	"g2s.servoTurn": "[CONNECTOR]のサーボを[DEGREE]どにする",
	"g2s.i2cWrite": "I2C[ADDRESS]のレジスタ[REGISTER]に[DATA]をかきこむ",
	"g2s.i2cReadOnce": "I2C[ADDRESS]のレジスタ[REGISTER]を[LENGTH]バイトよみだす",
	"g2s.oneWireReset": "[CONNECTOR]のOneWireをリセットする",
	"g2s.oneWireWrite": "[CONNECTOR]のOneWireに[DATA]をかきこむ",
	"g2s.oneWireRead": "[CONNECTOR]のOneWireから[LENGTH]バイトよみだす",
	"g2s.oneWireWriteAndRead": "[CONNECTOR]のOneWireに[DATA]をかきこんでから[LENGTH]バイトよみだす",
	"g2s.neoPixelConfigStrip": "[CONNECTOR]に長さ[LENGTH]のフルカラーLEDをつなぐ",
	"g2s.neoPixelSetColor": "フルカラーLED[POSITION]のいろを あか[RED] みどり[GREEN] あお[BLUE]にする",
	"g2s.neoPixelShow": "フルカラーLEDをひからせる",
	"g2s.neoPixelClear": "フルカラーLEDをけす",
	"g2s.measureDistance": "きょり(mm)",
	"g2s.getAcceleration": "かそくど[AXIS](m/s^2)",
	"g2s.accelerationAxisMenu.x": "x",
	"g2s.accelerationAxisMenu.y": "y",
	"g2s.accelerationAxisMenu.z": "z",
	"g2s.accelerationAxisMenu.absolute": "ぜったいち",
	"g2s.numberAtIndex": "すうれつ[ARRAY]の[INDEX]ばんめ",
	"g2s.spliceNumbers": "すうれつ[ARRAY]の[INDEX]ばんめから[DELETE]こさくじょして[INSERT]をいれる",
	"g2s.lengthOfNumbers": "すうれつ[ARRAY]のながさ",
	"g2s.readBytesAs": "バイトれつ[ARRAY]を[TYPE][ENDIAN]としてよむ",
	"g2s.int64Operation": "int64 [LEFT] [OP] [RIGHT]",
	"g2s.bitOperation": "bit [LEFT] [OP] [RIGHT]",
	"g2s.bitNot": "bit NOT [VALUE]"
}
};

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEDmlDQ1BrQ0dDb2xvclNwYWNlR2VuZXJpY1JHQgAAOI2NVV1oHFUUPpu5syskzoPUpqaSDv41lLRsUtGE2uj+ZbNt3CyTbLRBkMns3Z1pJjPj/KRpKT4UQRDBqOCT4P9bwSchaqvtiy2itFCiBIMo+ND6R6HSFwnruTOzu5O4a73L3PnmnO9+595z7t4LkLgsW5beJQIsGq4t5dPis8fmxMQ6dMF90A190C0rjpUqlSYBG+PCv9rt7yDG3tf2t/f/Z+uuUEcBiN2F2Kw4yiLiZQD+FcWyXYAEQfvICddi+AnEO2ycIOISw7UAVxieD/Cyz5mRMohfRSwoqoz+xNuIB+cj9loEB3Pw2448NaitKSLLRck2q5pOI9O9g/t/tkXda8Tbg0+PszB9FN8DuPaXKnKW4YcQn1Xk3HSIry5ps8UQ/2W5aQnxIwBdu7yFcgrxPsRjVXu8HOh0qao30cArp9SZZxDfg3h1wTzKxu5E/LUxX5wKdX5SnAzmDx4A4OIqLbB69yMesE1pKojLjVdoNsfyiPi45hZmAn3uLWdpOtfQOaVmikEs7ovj8hFWpz7EV6mel0L9Xy23FMYlPYZenAx0yDB1/PX6dledmQjikjkXCxqMJS9WtfFCyH9XtSekEF+2dH+P4tzITduTygGfv58a5VCTH5PtXD7EFZiNyUDBhHnsFTBgE0SQIA9pfFtgo6cKGuhooeilaKH41eDs38Ip+f4At1Rq/sjr6NEwQqb/I/DQqsLvaFUjvAx+eWirddAJZnAj1DFJL0mSg/gcIpPkMBkhoyCSJ8lTZIxk0TpKDjXHliJzZPO50dR5ASNSnzeLvIvod0HG/mdkmOC0z8VKnzcQ2M/Yz2vKldduXjp9bleLu0ZWn7vWc+l0JGcaai10yNrUnXLP/8Jf59ewX+c3Wgz+B34Df+vbVrc16zTMVgp9um9bxEfzPU5kPqUtVWxhs6OiWTVW+gIfywB9uXi7CGcGW/zk98k/kmvJ95IfJn/j3uQ+4c5zn3Kfcd+AyF3gLnJfcl9xH3OfR2rUee80a+6vo7EK5mmXUdyfQlrYLTwoZIU9wsPCZEtP6BWGhAlhL3p2N6sTjRdduwbHsG9kq32sgBepc+xurLPW4T9URpYGJ3ym4+8zA05u44QjST8ZIoVtu3qE7fWmdn5LPdqvgcZz8Ww8BWJ8X3w0PhQ/wnCDGd+LvlHs8dRy6bLLDuKMaZ20tZrqisPJ5ONiCq8yKhYM5cCgKOu66Lsc0aYOtZdo5QCwezI4wm9J/v0X23mlZXOfBjj8Jzv3WrY5D+CsA9D7aMs2gGfjve8ArD6mePZSeCfEYt8CONWDw8FXTxrPqx/r9Vt4biXeANh8vV7/+/16ffMD1N8AuKD/A/8leAvFY9bLAAAAOGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAACoAIABAAAAAEAAAAooAMABAAAAAEAAAAoAAAAAFkuRJYAAAMnSURBVFgJ7VjtS1NRGP9tTp3mSzIGMssPmlSQ0yCk8ovUlxD8UH3LXizwm2b9BZpERBAS9Kl90aiPvWivkKYURG+G+mUJY4k4pQ1zbmu6tt11zzHHPdyX3W1Xu1IP3O2c33me5/zO87vnbPcCOjeDEj8HcBAwHuV9cpX8Ck+01OTVVNmEPtySPxi4M/BFiEm0owA30g68lxijkElugJAzwPgOMCgugsSbysuR33iISRV1uWGAoYUBJToJGHsd4BrlSBolYv5ApHKpycnHqxvhF8FzoCpJBigQVJZVMlvmoOwtJCtxOnOFB58j8mmcCeEWl5h+ph1NCMY98yDXRpiSxBsxX9o5dU9QE4nXyxIyGpDgDxehmRIJFPBXpqYpwduWMoRychguu1cjOOMPMFg6nX9L4iKOSBlnCpSNvCSRphJ3aHT2CVeoe4l1T1ATiUe3FWIuV5yqORiCJc4JFUu7Lc6adgpQctPmfFHkkVCYx7IjqHuJ/xMU6Z4moPsKarJJyG5d2xBseayxGAtk0NOE4NpRkt1uleO+9SUuqa1F48tnogV+PncevuERih9+8RSldjvj4301jPG2CxTb2XoK+25cZ8ZJ5/X+A4h4vSJcCOi+gqoJhlwuzN67D/ItZ54HD0EuOVuemqI5VjweORcRnnKThGdmQORc5ZMGnV9RvHcPzBUVWJ6YTCZzdvfCVFKMxTdvKbYw9AS/fL7kuG90jOb46XYj7P6G0jo78qxWRP3+pI9cg32AEHg5YOzhn/q7BdCGNRNIXGkH1yM1gWqJpYI3A0spsdlmQ3VXp4jLbP8AlZwMVHV2oGBHBeMTdDox23+XYmUNDbCdPM6Mk8701WuIBYMiXAikJJhnsaDydKswhrbJMULuSWLlzcckj5l1gkU1uyRzuG72pSS49SWOBQIg1fKNjVHJKtvOwtrUxOzSHx8+IvLdi8muy7Sidbf64J+YoG3ysTI3R3PMP3qMhcEhVF+6iO319YhHIkkfucaW3sX869lNM9m5FO5Bjv+hzeKlisq18Wcg/zeIzCVtshITd4fKl+jSqVWhfOWUX6KryvI3nX4DM2T7tiWPg6oAAAAASUVORK5CYII=";

/**
 * @license
 * Copyright 2009 The Closure Library Authors
 * Copyright 2020 Daniel Wirtz / The long.js Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
// WebAssembly optimizations to do native i64 multiplication and divide
var wasm = null;

try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
} catch (e) {// no wasm support :(
}
/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */


function Long(low, high, unsigned) {
  /**
   * The low 32 bits as a signed value.
   * @type {number}
   */
  this.low = low | 0;
  /**
   * The high 32 bits as a signed value.
   * @type {number}
   */

  this.high = high | 0;
  /**
   * Whether unsigned or not.
   * @type {boolean}
   */

  this.unsigned = !!unsigned;
} // The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.

/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */


Long.prototype.__isLong__;
Object.defineProperty(Long.prototype, "__isLong__", {
  value: true
});
/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */

function isLong(obj) {
  return (obj && obj["__isLong__"]) === true;
}
/**
 * @function
 * @param {*} value number
 * @returns {number}
 * @inner
 */


function ctz32(value) {
  var c = Math.clz32(value & -value);
  return value ? 31 - c : c;
}
/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */


Long.isLong = isLong;
/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */

var INT_CACHE = {};
/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */

var UINT_CACHE = {};
/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */

function fromInt(value, unsigned) {
  var obj, cachedObj, cache;

  if (unsigned) {
    value >>>= 0;

    if (cache = 0 <= value && value < 256) {
      cachedObj = UINT_CACHE[value];
      if (cachedObj) return cachedObj;
    }

    obj = fromBits(value, 0, true);
    if (cache) UINT_CACHE[value] = obj;
    return obj;
  } else {
    value |= 0;

    if (cache = -128 <= value && value < 128) {
      cachedObj = INT_CACHE[value];
      if (cachedObj) return cachedObj;
    }

    obj = fromBits(value, value < 0 ? -1 : 0, false);
    if (cache) INT_CACHE[value] = obj;
    return obj;
  }
}
/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */


Long.fromInt = fromInt;
/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */

function fromNumber(value, unsigned) {
  if (isNaN(value)) return unsigned ? UZERO : ZERO;

  if (unsigned) {
    if (value < 0) return UZERO;
    if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
  } else {
    if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
    if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
  }

  if (value < 0) return fromNumber(-value, unsigned).neg();
  return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
}
/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */


Long.fromNumber = fromNumber;
/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */

function fromBits(lowBits, highBits, unsigned) {
  return new Long(lowBits, highBits, unsigned);
}
/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */


Long.fromBits = fromBits;
/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */

var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */

function fromString$1(str, unsigned, radix) {
  if (str.length === 0) throw Error('empty string');

  if (typeof unsigned === 'number') {
    // For goog.math.long compatibility
    radix = unsigned;
    unsigned = false;
  } else {
    unsigned = !!unsigned;
  }

  if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity") return unsigned ? UZERO : ZERO;
  radix = radix || 10;
  if (radix < 2 || 36 < radix) throw RangeError('radix');
  var p;
  if ((p = str.indexOf('-')) > 0) throw Error('interior hyphen');else if (p === 0) {
    return fromString$1(str.substring(1), unsigned, radix).neg();
  } // Do several (8) digits each time through the loop, so as to
  // minimize the calls to the very expensive emulated div.

  var radixToPower = fromNumber(pow_dbl(radix, 8));
  var result = ZERO;

  for (var i = 0; i < str.length; i += 8) {
    var size = Math.min(8, str.length - i),
        value = parseInt(str.substring(i, i + size), radix);

    if (size < 8) {
      var power = fromNumber(pow_dbl(radix, size));
      result = result.mul(power).add(fromNumber(value));
    } else {
      result = result.mul(radixToPower);
      result = result.add(fromNumber(value));
    }
  }

  result.unsigned = unsigned;
  return result;
}
/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */


Long.fromString = fromString$1;
/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */

function fromValue(val, unsigned) {
  if (typeof val === 'number') return fromNumber(val, unsigned);
  if (typeof val === 'string') return fromString$1(val, unsigned); // Throws for non-objects, converts non-instanceof Long:

  return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}
/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */


Long.fromValue = fromValue; // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.

/**
 * @type {number}
 * @const
 * @inner
 */

var TWO_PWR_16_DBL = 1 << 16;
/**
 * @type {number}
 * @const
 * @inner
 */

var TWO_PWR_24_DBL = 1 << 24;
/**
 * @type {number}
 * @const
 * @inner
 */

var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */

var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */

var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
/**
 * @type {!Long}
 * @const
 * @inner
 */

var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
/**
 * @type {!Long}
 * @inner
 */

var ZERO = fromInt(0);
/**
 * Signed zero.
 * @type {!Long}
 */

Long.ZERO = ZERO;
/**
 * @type {!Long}
 * @inner
 */

var UZERO = fromInt(0, true);
/**
 * Unsigned zero.
 * @type {!Long}
 */

Long.UZERO = UZERO;
/**
 * @type {!Long}
 * @inner
 */

var ONE = fromInt(1);
/**
 * Signed one.
 * @type {!Long}
 */

Long.ONE = ONE;
/**
 * @type {!Long}
 * @inner
 */

var UONE = fromInt(1, true);
/**
 * Unsigned one.
 * @type {!Long}
 */

Long.UONE = UONE;
/**
 * @type {!Long}
 * @inner
 */

var NEG_ONE = fromInt(-1);
/**
 * Signed negative one.
 * @type {!Long}
 */

Long.NEG_ONE = NEG_ONE;
/**
 * @type {!Long}
 * @inner
 */

var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);
/**
 * Maximum signed value.
 * @type {!Long}
 */

Long.MAX_VALUE = MAX_VALUE;
/**
 * @type {!Long}
 * @inner
 */

var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);
/**
 * Maximum unsigned value.
 * @type {!Long}
 */

Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
/**
 * @type {!Long}
 * @inner
 */

var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);
/**
 * Minimum signed value.
 * @type {!Long}
 */

Long.MIN_VALUE = MIN_VALUE;
/**
 * @alias Long.prototype
 * @inner
 */

var LongPrototype = Long.prototype;
/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @this {!Long}
 * @returns {number}
 */

LongPrototype.toInt = function toInt() {
  return this.unsigned ? this.low >>> 0 : this.low;
};
/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @this {!Long}
 * @returns {number}
 */


LongPrototype.toNumber = function toNumber() {
  if (this.unsigned) return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
  return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
};
/**
 * Converts the Long to a string written in the specified radix.
 * @this {!Long}
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */


LongPrototype.toString = function toString(radix) {
  radix = radix || 10;
  if (radix < 2 || 36 < radix) throw RangeError('radix');
  if (this.isZero()) return '0';

  if (this.isNegative()) {
    // Unsigned Longs are never negative
    if (this.eq(MIN_VALUE)) {
      // We need to change the Long value before it can be negated, so we remove
      // the bottom-most digit in this base and then recurse to do the rest.
      var radixLong = fromNumber(radix),
          div = this.div(radixLong),
          rem1 = div.mul(radixLong).sub(this);
      return div.toString(radix) + rem1.toInt().toString(radix);
    } else return '-' + this.neg().toString(radix);
  } // Do several (6) digits each time through the loop, so as to
  // minimize the calls to the very expensive emulated div.


  var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
      rem = this;
  var result = '';

  while (true) {
    var remDiv = rem.div(radixToPower),
        intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
        digits = intval.toString(radix);
    rem = remDiv;
    if (rem.isZero()) return digits + result;else {
      while (digits.length < 6) {
        digits = '0' + digits;
      }

      result = '' + digits + result;
    }
  }
};
/**
 * Gets the high 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed high bits
 */


LongPrototype.getHighBits = function getHighBits() {
  return this.high;
};
/**
 * Gets the high 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned high bits
 */


LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
  return this.high >>> 0;
};
/**
 * Gets the low 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed low bits
 */


LongPrototype.getLowBits = function getLowBits() {
  return this.low;
};
/**
 * Gets the low 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned low bits
 */


LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
  return this.low >>> 0;
};
/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @this {!Long}
 * @returns {number}
 */


LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
  if (this.isNegative()) // Unsigned Longs are never negative
    return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
  var val = this.high != 0 ? this.high : this.low;

  for (var bit = 31; bit > 0; bit--) {
    if ((val & 1 << bit) != 0) break;
  }

  return this.high != 0 ? bit + 33 : bit + 1;
};
/**
 * Tests if this Long's value equals zero.
 * @this {!Long}
 * @returns {boolean}
 */


LongPrototype.isZero = function isZero() {
  return this.high === 0 && this.low === 0;
};
/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */


LongPrototype.eqz = LongPrototype.isZero;
/**
 * Tests if this Long's value is negative.
 * @this {!Long}
 * @returns {boolean}
 */

LongPrototype.isNegative = function isNegative() {
  return !this.unsigned && this.high < 0;
};
/**
 * Tests if this Long's value is positive or zero.
 * @this {!Long}
 * @returns {boolean}
 */


LongPrototype.isPositive = function isPositive() {
  return this.unsigned || this.high >= 0;
};
/**
 * Tests if this Long's value is odd.
 * @this {!Long}
 * @returns {boolean}
 */


LongPrototype.isOdd = function isOdd() {
  return (this.low & 1) === 1;
};
/**
 * Tests if this Long's value is even.
 * @this {!Long}
 * @returns {boolean}
 */


LongPrototype.isEven = function isEven() {
  return (this.low & 1) === 0;
};
/**
 * Tests if this Long's value equals the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */


LongPrototype.equals = function equals(other) {
  if (!isLong(other)) other = fromValue(other);
  if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
  return this.high === other.high && this.low === other.low;
};
/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */


LongPrototype.eq = LongPrototype.equals;
/**
 * Tests if this Long's value differs from the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.notEquals = function notEquals(other) {
  return !this.eq(
  /* validates */
  other);
};
/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */


LongPrototype.neq = LongPrototype.notEquals;
/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.ne = LongPrototype.notEquals;
/**
 * Tests if this Long's value is less than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.lessThan = function lessThan(other) {
  return this.comp(
  /* validates */
  other) < 0;
};
/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */


LongPrototype.lt = LongPrototype.lessThan;
/**
 * Tests if this Long's value is less than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
  return this.comp(
  /* validates */
  other) <= 0;
};
/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */


LongPrototype.lte = LongPrototype.lessThanOrEqual;
/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.le = LongPrototype.lessThanOrEqual;
/**
 * Tests if this Long's value is greater than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.greaterThan = function greaterThan(other) {
  return this.comp(
  /* validates */
  other) > 0;
};
/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */


LongPrototype.gt = LongPrototype.greaterThan;
/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
  return this.comp(
  /* validates */
  other) >= 0;
};
/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */


LongPrototype.gte = LongPrototype.greaterThanOrEqual;
/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.ge = LongPrototype.greaterThanOrEqual;
/**
 * Compares this Long's value with the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */

LongPrototype.compare = function compare(other) {
  if (!isLong(other)) other = fromValue(other);
  if (this.eq(other)) return 0;
  var thisNeg = this.isNegative(),
      otherNeg = other.isNegative();
  if (thisNeg && !otherNeg) return -1;
  if (!thisNeg && otherNeg) return 1; // At this point the sign bits are the same

  if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1; // Both are positive if at least one is unsigned

  return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
};
/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */


LongPrototype.comp = LongPrototype.compare;
/**
 * Negates this Long's value.
 * @this {!Long}
 * @returns {!Long} Negated Long
 */

LongPrototype.negate = function negate() {
  if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
  return this.not().add(ONE);
};
/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */


LongPrototype.neg = LongPrototype.negate;
/**
 * Returns the sum of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */

LongPrototype.add = function add(addend) {
  if (!isLong(addend)) addend = fromValue(addend); // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

  var a48 = this.high >>> 16;
  var a32 = this.high & 0xFFFF;
  var a16 = this.low >>> 16;
  var a00 = this.low & 0xFFFF;
  var b48 = addend.high >>> 16;
  var b32 = addend.high & 0xFFFF;
  var b16 = addend.low >>> 16;
  var b00 = addend.low & 0xFFFF;
  var c48 = 0,
      c32 = 0,
      c16 = 0,
      c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= 0xFFFF;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c48 += a48 + b48;
  c48 &= 0xFFFF;
  return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
};
/**
 * Returns the difference of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */


LongPrototype.subtract = function subtract(subtrahend) {
  if (!isLong(subtrahend)) subtrahend = fromValue(subtrahend);
  return this.add(subtrahend.neg());
};
/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */


LongPrototype.sub = LongPrototype.subtract;
/**
 * Returns the product of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */

LongPrototype.multiply = function multiply(multiplier) {
  if (this.isZero()) return this;
  if (!isLong(multiplier)) multiplier = fromValue(multiplier); // use wasm support if present

  if (wasm) {
    var low = wasm["mul"](this.low, this.high, multiplier.low, multiplier.high);
    return fromBits(low, wasm["get_high"](), this.unsigned);
  }

  if (multiplier.isZero()) return this.unsigned ? UZERO : ZERO;
  if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
  if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;

  if (this.isNegative()) {
    if (multiplier.isNegative()) return this.neg().mul(multiplier.neg());else return this.neg().mul(multiplier).neg();
  } else if (multiplier.isNegative()) return this.mul(multiplier.neg()).neg(); // If both longs are small, use float multiplication


  if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24)) return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned); // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
  // We can skip products that would overflow.

  var a48 = this.high >>> 16;
  var a32 = this.high & 0xFFFF;
  var a16 = this.low >>> 16;
  var a00 = this.low & 0xFFFF;
  var b48 = multiplier.high >>> 16;
  var b32 = multiplier.high & 0xFFFF;
  var b16 = multiplier.low >>> 16;
  var b00 = multiplier.low & 0xFFFF;
  var c48 = 0,
      c32 = 0,
      c16 = 0,
      c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= 0xFFFF;
  c16 += a16 * b00;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c16 += a00 * b16;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c32 += a32 * b00;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a16 * b16;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a00 * b32;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
  c48 &= 0xFFFF;
  return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
};
/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */


LongPrototype.mul = LongPrototype.multiply;
/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */

LongPrototype.divide = function divide(divisor) {
  if (!isLong(divisor)) divisor = fromValue(divisor);
  if (divisor.isZero()) throw Error('division by zero'); // use wasm support if present

  if (wasm) {
    // guard against signed division overflow: the largest
    // negative number / -1 would be 1 larger than the largest
    // positive number, due to two's complement.
    if (!this.unsigned && this.high === -0x80000000 && divisor.low === -1 && divisor.high === -1) {
      // be consistent with non-wasm code path
      return this;
    }

    var low = (this.unsigned ? wasm["div_u"] : wasm["div_s"])(this.low, this.high, divisor.low, divisor.high);
    return fromBits(low, wasm["get_high"](), this.unsigned);
  }

  if (this.isZero()) return this.unsigned ? UZERO : ZERO;
  var approx, rem, res;

  if (!this.unsigned) {
    // This section is only relevant for signed longs and is derived from the
    // closure library as a whole.
    if (this.eq(MIN_VALUE)) {
      if (divisor.eq(ONE) || divisor.eq(NEG_ONE)) return MIN_VALUE; // recall that -MIN_VALUE == MIN_VALUE
      else if (divisor.eq(MIN_VALUE)) return ONE;else {
        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
        var halfThis = this.shr(1);
        approx = halfThis.div(divisor).shl(1);

        if (approx.eq(ZERO)) {
          return divisor.isNegative() ? ONE : NEG_ONE;
        } else {
          rem = this.sub(divisor.mul(approx));
          res = approx.add(rem.div(divisor));
          return res;
        }
      }
    } else if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;

    if (this.isNegative()) {
      if (divisor.isNegative()) return this.neg().div(divisor.neg());
      return this.neg().div(divisor).neg();
    } else if (divisor.isNegative()) return this.div(divisor.neg()).neg();

    res = ZERO;
  } else {
    // The algorithm below has not been made for unsigned longs. It's therefore
    // required to take special care of the MSB prior to running it.
    if (!divisor.unsigned) divisor = divisor.toUnsigned();
    if (divisor.gt(this)) return UZERO;
    if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
      return UONE;
    res = UZERO;
  } // Repeat the following until the remainder is less than other:  find a
  // floating-point that approximates remainder / other *from below*, add this
  // into the result, and subtract it from the remainder.  It is critical that
  // the approximate value is less than or equal to the real value so that the
  // remainder never becomes negative.


  rem = this;

  while (rem.gte(divisor)) {
    // Approximate the result of division. This may be a little greater or
    // smaller than the actual value.
    approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber())); // We will tweak the approximate result by changing it in the 48-th digit or
    // the smallest non-fractional digit, whichever is larger.

    var log2 = Math.ceil(Math.log(approx) / Math.LN2),
        delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48),
        // Decrease the approximation until it is smaller than the remainder.  Note
    // that if it is too large, the product overflows and is negative.
    approxRes = fromNumber(approx),
        approxRem = approxRes.mul(divisor);

    while (approxRem.isNegative() || approxRem.gt(rem)) {
      approx -= delta;
      approxRes = fromNumber(approx, this.unsigned);
      approxRem = approxRes.mul(divisor);
    } // We know the answer can't be zero... and actually, zero would cause
    // infinite recursion since we would make no progress.


    if (approxRes.isZero()) approxRes = ONE;
    res = res.add(approxRes);
    rem = rem.sub(approxRem);
  }

  return res;
};
/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */


LongPrototype.div = LongPrototype.divide;
/**
 * Returns this Long modulo the specified.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */

LongPrototype.modulo = function modulo(divisor) {
  if (!isLong(divisor)) divisor = fromValue(divisor); // use wasm support if present

  if (wasm) {
    var low = (this.unsigned ? wasm["rem_u"] : wasm["rem_s"])(this.low, this.high, divisor.low, divisor.high);
    return fromBits(low, wasm["get_high"](), this.unsigned);
  }

  return this.sub(this.div(divisor).mul(divisor));
};
/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */


LongPrototype.mod = LongPrototype.modulo;
/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */

LongPrototype.rem = LongPrototype.modulo;
/**
 * Returns the bitwise NOT of this Long.
 * @this {!Long}
 * @returns {!Long}
 */

LongPrototype.not = function not() {
  return fromBits(~this.low, ~this.high, this.unsigned);
};
/**
 * Returns count leading zeros of this Long.
 * @this {!Long}
 * @returns {!number}
 */


LongPrototype.countLeadingZeros = function countLeadingZeros() {
  return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
};
/**
 * Returns count leading zeros. This is an alias of {@link Long#countLeadingZeros}.
 * @function
 * @param {!Long}
 * @returns {!number}
 */


LongPrototype.clz = LongPrototype.countLeadingZeros;
/**
 * Returns count trailing zeros of this Long.
 * @this {!Long}
 * @returns {!number}
 */

LongPrototype.countTrailingZeros = function countTrailingZeros() {
  return this.low ? ctz32(this.low) : ctz32(this.high) + 32;
};
/**
 * Returns count trailing zeros. This is an alias of {@link Long#countTrailingZeros}.
 * @function
 * @param {!Long}
 * @returns {!number}
 */


LongPrototype.ctz = LongPrototype.countTrailingZeros;
/**
 * Returns the bitwise AND of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */

LongPrototype.and = function and(other) {
  if (!isLong(other)) other = fromValue(other);
  return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
};
/**
 * Returns the bitwise OR of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */


LongPrototype.or = function or(other) {
  if (!isLong(other)) other = fromValue(other);
  return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
};
/**
 * Returns the bitwise XOR of this Long and the given one.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */


LongPrototype.xor = function xor(other) {
  if (!isLong(other)) other = fromValue(other);
  return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
};
/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */


LongPrototype.shiftLeft = function shiftLeft(numBits) {
  if (isLong(numBits)) numBits = numBits.toInt();
  if ((numBits &= 63) === 0) return this;else if (numBits < 32) return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);else return fromBits(0, this.low << numBits - 32, this.unsigned);
};
/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */


LongPrototype.shl = LongPrototype.shiftLeft;
/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */

LongPrototype.shiftRight = function shiftRight(numBits) {
  if (isLong(numBits)) numBits = numBits.toInt();
  if ((numBits &= 63) === 0) return this;else if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);else return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
};
/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */


LongPrototype.shr = LongPrototype.shiftRight;
/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */

LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
  if (isLong(numBits)) numBits = numBits.toInt();
  if ((numBits &= 63) === 0) return this;
  if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >>> numBits, this.unsigned);
  if (numBits === 32) return fromBits(this.high, 0, this.unsigned);
  return fromBits(this.high >>> numBits - 32, 0, this.unsigned);
};
/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */


LongPrototype.shru = LongPrototype.shiftRightUnsigned;
/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */

LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
/**
 * Returns this Long with bits rotated to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */

LongPrototype.rotateLeft = function rotateLeft(numBits) {
  var b;
  if (isLong(numBits)) numBits = numBits.toInt();
  if ((numBits &= 63) === 0) return this;
  if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);

  if (numBits < 32) {
    b = 32 - numBits;
    return fromBits(this.low << numBits | this.high >>> b, this.high << numBits | this.low >>> b, this.unsigned);
  }

  numBits -= 32;
  b = 32 - numBits;
  return fromBits(this.high << numBits | this.low >>> b, this.low << numBits | this.high >>> b, this.unsigned);
};
/**
 * Returns this Long with bits rotated to the left by the given amount. This is an alias of {@link Long#rotateLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */


LongPrototype.rotl = LongPrototype.rotateLeft;
/**
 * Returns this Long with bits rotated to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */

LongPrototype.rotateRight = function rotateRight(numBits) {
  var b;
  if (isLong(numBits)) numBits = numBits.toInt();
  if ((numBits &= 63) === 0) return this;
  if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);

  if (numBits < 32) {
    b = 32 - numBits;
    return fromBits(this.high << b | this.low >>> numBits, this.low << b | this.high >>> numBits, this.unsigned);
  }

  numBits -= 32;
  b = 32 - numBits;
  return fromBits(this.low << b | this.high >>> numBits, this.high << b | this.low >>> numBits, this.unsigned);
};
/**
 * Returns this Long with bits rotated to the right by the given amount. This is an alias of {@link Long#rotateRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */


LongPrototype.rotr = LongPrototype.rotateRight;
/**
 * Converts this Long to signed.
 * @this {!Long}
 * @returns {!Long} Signed long
 */

LongPrototype.toSigned = function toSigned() {
  if (!this.unsigned) return this;
  return fromBits(this.low, this.high, false);
};
/**
 * Converts this Long to unsigned.
 * @this {!Long}
 * @returns {!Long} Unsigned long
 */


LongPrototype.toUnsigned = function toUnsigned() {
  if (this.unsigned) return this;
  return fromBits(this.low, this.high, true);
};
/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @this {!Long}
 * @returns {!Array.<number>} Byte representation
 */


LongPrototype.toBytes = function toBytes(le) {
  return le ? this.toBytesLE() : this.toBytesBE();
};
/**
 * Converts this Long to its little endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Little endian byte representation
 */


LongPrototype.toBytesLE = function toBytesLE() {
  var hi = this.high,
      lo = this.low;
  return [lo & 0xff, lo >>> 8 & 0xff, lo >>> 16 & 0xff, lo >>> 24, hi & 0xff, hi >>> 8 & 0xff, hi >>> 16 & 0xff, hi >>> 24];
};
/**
 * Converts this Long to its big endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Big endian byte representation
 */


LongPrototype.toBytesBE = function toBytesBE() {
  var hi = this.high,
      lo = this.low;
  return [hi >>> 24, hi >>> 16 & 0xff, hi >>> 8 & 0xff, hi & 0xff, lo >>> 24, lo >>> 16 & 0xff, lo >>> 8 & 0xff, lo & 0xff];
};
/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */


Long.fromBytes = function fromBytes(bytes, unsigned, le) {
  return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
};
/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */


Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
  return new Long(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
};
/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */


Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
  return new Long(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
};

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var domain; // This constructor is used to store event handlers. Instantiating this is
// faster than explicitly calling `Object.create(null)` to get a "clean" empty
// object (tested with v8 v4.9).

function EventHandlers() {}

EventHandlers.prototype = Object.create(null);

function EventEmitter$1() {
  EventEmitter$1.init.call(this);
}
// require('events') === require('events').EventEmitter

EventEmitter$1.EventEmitter = EventEmitter$1;
EventEmitter$1.usingDomains = false;
EventEmitter$1.prototype.domain = undefined;
EventEmitter$1.prototype._events = undefined;
EventEmitter$1.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

EventEmitter$1.defaultMaxListeners = 10;

EventEmitter$1.init = function () {
  this.domain = null;

  if (EventEmitter$1.usingDomains) {
    // if there is an active domain, then attach to it.
    if (domain.active ) ;
  }

  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
    this._events = new EventHandlers();
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter$1.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n)) throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter$1.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter$1.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
}; // These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.


function emitNone(handler, isFn, self) {
  if (isFn) handler.call(self);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self);
    }
  }
}

function emitOne(handler, isFn, self, arg1) {
  if (isFn) handler.call(self, arg1);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self, arg1);
    }
  }
}

function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn) handler.call(self, arg1, arg2);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self, arg1, arg2);
    }
  }
}

function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn) handler.call(self, arg1, arg2, arg3);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self, arg1, arg2, arg3);
    }
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn) handler.apply(self, args);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].apply(self, args);
    }
  }
}

EventEmitter$1.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events, domain;
  var doError = type === 'error';
  events = this._events;
  if (events) doError = doError && events.error == null;else if (!doError) return false;
  domain = this.domain; // If there is no 'error' event listener then throw.

  if (doError) {
    er = arguments[1];

    if (domain) {
      if (!er) er = new Error('Uncaught, unspecified "error" event');
      er.domainEmitter = this;
      er.domain = domain;
      er.domainThrown = false;
      domain.emit('error', er);
    } else if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }

    return false;
  }

  handler = events[type];
  if (!handler) return false;
  var isFn = typeof handler === 'function';
  len = arguments.length;

  switch (len) {
    // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;

    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;

    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;

    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
    // slower

    default:
      args = new Array(len - 1);

      for (i = 1; i < len; i++) {
        args[i - 1] = arguments[i];
      }

      emitMany(handler, isFn, this, args);
  }
  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  events = target._events;

  if (!events) {
    events = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    } // Check for listener leak


    if (!existing.warned) {
      m = $getMaxListeners(target);

      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + type + ' listeners added. ' + 'Use emitter.setMaxListeners() to increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }

  return target;
}

function emitWarning(e) {
  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
}

EventEmitter$1.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter$1.prototype.on = EventEmitter$1.prototype.addListener;

EventEmitter$1.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function _onceWrap(target, type, listener) {
  var fired = false;

  function g() {
    target.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }

  g.listener = listener;
  return g;
}

EventEmitter$1.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter$1.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // emits a 'removeListener' event iff the listener was removed


EventEmitter$1.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  events = this._events;
  if (!events) return this;
  list = events[type];
  if (!list) return this;

  if (list === listener || list.listener && list.listener === listener) {
    if (--this._eventsCount === 0) this._events = new EventHandlers();else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length; i-- > 0;) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (list.length === 1) {
      list[0] = undefined;

      if (--this._eventsCount === 0) {
        this._events = new EventHandlers();
        return this;
      } else {
        delete events[type];
      }
    } else {
      spliceOne(list, position);
    }

    if (events.removeListener) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter$1.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events;
  events = this._events;
  if (!events) return this; // not listening for removeListener, no need to emit

  if (!events.removeListener) {
    if (arguments.length === 0) {
      this._events = new EventHandlers();
      this._eventsCount = 0;
    } else if (events[type]) {
      if (--this._eventsCount === 0) this._events = new EventHandlers();else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);

    for (var i = 0, key; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = new EventHandlers();
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    do {
      this.removeListener(type, listeners[listeners.length - 1]);
    } while (listeners[0]);
  }

  return this;
};

EventEmitter$1.prototype.listeners = function listeners(type) {
  var evlistener;
  var ret;
  var events = this._events;
  if (!events) ret = [];else {
    evlistener = events[type];
    if (!evlistener) ret = [];else if (typeof evlistener === 'function') ret = [evlistener.listener || evlistener];else ret = unwrapListeners(evlistener);
  }
  return ret;
};

EventEmitter$1.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount$1.call(emitter, type);
  }
};

EventEmitter$1.prototype.listenerCount = listenerCount$1;

function listenerCount$1(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter$1.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
}; // About 1.5x faster than the two-arg version of Array#splice().


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

function arrayClone(arr, i) {
  var copy = new Array(i);

  while (i--) {
    copy[i] = arr[i];
  }

  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

var events = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': EventEmitter$1,
  EventEmitter: EventEmitter$1
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;

function init() {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray(b64) {
  if (!inited) {
    init();
  }

  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice


  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0; // base64 is 4/3 + up to two characters of the original data

  arr = new Arr(len * 3 / 4 - placeHolders); // if there are placeholders, only get up to the last complete 4 chars

  l = placeHolders > 0 ? len - 4 : len;
  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 0xFF;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  if (!inited) {
    init();
  }

  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 0x3F];
    output += lookup[tmp << 2 & 0x3F];
    output += '=';
  }

  parts.push(output);
  return parts.join('');
}

function read(buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function write(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString = {}.toString;
var isArray$1 = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

var INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined ? global$1.TYPED_ARRAY_SUPPORT : true;

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray$1(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}
Buffer.isBuffer = isBuffer$1;

function internalIsBuffer(b) {
  return !!(b != null && b._isBuffer);
}

Buffer.compare = function compare(a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray$1(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf);
  } else {
    return fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }

  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }

  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
} // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually


function isBuffer$1(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
}

function isFastBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
} // For Node v0.10 support. Remove this eventually.


function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0));
}

// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;

if (typeof global$1.setTimeout === 'function') {
  cachedSetTimeout = setTimeout;
}

if (typeof global$1.clearTimeout === 'function') {
  cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

function nextTick(fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
} // v8 likes predictible objects

function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

var title = 'browser';
var platform = 'browser';
var browser$2 = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues

var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;
function binding(name) {
  throw new Error('process.binding is not supported');
}
function cwd() {
  return '/';
}
function chdir(dir) {
  throw new Error('process.chdir is not supported');
}
function umask() {
  return 0;
} // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js

var performance = global$1.performance || {};

var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
  return new Date().getTime();
}; // generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime


function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);

  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];

    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }

  return [seconds, nanoseconds];
}
var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}
var process = {
  nextTick: nextTick,
  title: title,
  browser: browser$2,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(events);

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/**
 * "Inspired" by Encoder7Bit.h/Encoder7Bit.cpp in the
 * Firmata source code.
 */


var encoder7bit = {
  to7BitArray: function to7BitArray(data) {
    var shift = 0;
    var previous = 0;
    var output = [];

    var _iterator = _createForOfIteratorHelper$1(data),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var byte = _step.value;

        if (shift === 0) {
          output.push(byte & 0x7f);
          shift++;
          previous = byte >> 7;
        } else {
          output.push(byte << shift & 0x7f | previous);

          if (shift === 6) {
            output.push(byte >> 1);
            shift = 0;
          } else {
            shift++;
            previous = byte >> 8 - shift;
          }
        }
      }
      /* istanbul ignore else */

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (shift > 0) {
      output.push(previous);
    }

    return output;
  },
  from7BitArray: function from7BitArray(encoded) {
    var expectedBytes = encoded.length * 7 >> 3;
    var decoded = [];

    for (var i = 0; i < expectedBytes; i++) {
      var j = i << 3;
      var pos = j / 7 >>> 0;
      var shift = j % 7;
      decoded[i] = encoded[pos] >> shift | encoded[pos + 1] << 7 - shift & 0xFF;
    }

    return decoded;
  }
};

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Encoder7Bit$1 = encoder7bit;
var OneWireUtils = {
  crc8: function crc8(data) {
    var crc = 0;

    var _iterator = _createForOfIteratorHelper(data),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var inbyte = _step.value;

        for (var n = 8; n; n--) {
          var mix = (crc ^ inbyte) & 0x01;
          crc >>= 1;

          if (mix) {
            crc ^= 0x8C;
          }

          inbyte >>= 1;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return crc;
  },
  readDevices: function readDevices(data) {
    var deviceBytes = Encoder7Bit$1.from7BitArray(data);
    var devices = [];

    for (var i = 0; i < deviceBytes.length; i += 8) {
      var device = deviceBytes.slice(i, i + 8);

      if (device.length !== 8) {
        continue;
      }

      var check = OneWireUtils.crc8(device.slice(0, 7));

      if (check !== device[7]) {
        console.error("ROM invalid!");
      }

      devices.push(device);
    }

    return devices;
  }
};
var onewireutils = OneWireUtils;

var _MIDI_RESPONSE, _SYSEX_RESPONSE;

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var EventEmitter = require$$0$1.EventEmitter; // Internal Dependencies

var Encoder7Bit = encoder7bit;
var OneWire = onewireutils; // Program specifics

var i2cActive = new Map();
/**
 * constants
 */

var ANALOG_MAPPING_QUERY = 0x69;
var ANALOG_MAPPING_RESPONSE = 0x6A;
var ANALOG_MESSAGE = 0xE0;
var CAPABILITY_QUERY = 0x6B;
var CAPABILITY_RESPONSE = 0x6C;
var DIGITAL_MESSAGE = 0x90;
var END_SYSEX$1 = 0xF7;
var EXTENDED_ANALOG = 0x6F;
var I2C_CONFIG = 0x78;
var I2C_REPLY = 0x77;
var I2C_REQUEST = 0x76;
var I2C_READ_MASK = 0x18; // 0b00011000
// const I2C_END_TX_MASK = 0x40; // 0b01000000

var ONEWIRE_CONFIG_REQUEST = 0x41;
var ONEWIRE_DATA = 0x73;
var ONEWIRE_DELAY_REQUEST_BIT = 0x10;
var ONEWIRE_READ_REPLY = 0x43;
var ONEWIRE_READ_REQUEST_BIT = 0x08;
var ONEWIRE_RESET_REQUEST_BIT = 0x01;
var ONEWIRE_SEARCH_ALARMS_REPLY = 0x45;
var ONEWIRE_SEARCH_ALARMS_REQUEST = 0x44;
var ONEWIRE_SEARCH_REPLY = 0x42;
var ONEWIRE_SEARCH_REQUEST = 0x40;
var ONEWIRE_WITHDATA_REQUEST_BITS = 0x3C;
var ONEWIRE_WRITE_REQUEST_BIT = 0x20;
var PIN_MODE = 0xF4;
var PIN_STATE_QUERY = 0x6D;
var PIN_STATE_RESPONSE = 0x6E;
var PING_READ = 0x75; // const PULSE_IN = 0x74;
// const PULSE_OUT = 0x73;

var QUERY_FIRMWARE = 0x79;
var REPORT_ANALOG = 0xC0;
var REPORT_DIGITAL = 0xD0;
var REPORT_VERSION = 0xF9;
var SAMPLING_INTERVAL = 0x7A;
var SERVO_CONFIG = 0x70;
var SERIAL_MESSAGE = 0x60;
var SERIAL_CONFIG = 0x10;
var SERIAL_WRITE = 0x20;
var SERIAL_READ = 0x30;
var SERIAL_REPLY = 0x40;
var SERIAL_CLOSE = 0x50;
var SERIAL_FLUSH = 0x60;
var SERIAL_LISTEN = 0x70;
var START_SYSEX$1 = 0xF0;
var STEPPER = 0x72;
var ACCELSTEPPER = 0x62;
var STRING_DATA$1 = 0x71;
var SYSTEM_RESET = 0xFF;
var MAX_PIN_COUNT = 128;
var SYM_sendOneWireSearch = Symbol("sendOneWireSearch");
var SYM_sendOneWireRequest = Symbol("sendOneWireRequest");
/**
 * MIDI_RESPONSE contains functions to be called when we receive a MIDI message from the arduino.
 * used as a switch object as seen here http://james.padolsey.com/javascript/how-to-avoid-switch-case-syndrome/
 * @private
 */

var MIDI_RESPONSE = (_MIDI_RESPONSE = {}, _defineProperty(_MIDI_RESPONSE, REPORT_VERSION, function (board) {
  board.version.major = board.buffer[1];
  board.version.minor = board.buffer[2];
  board.emit("reportversion");
}), _defineProperty(_MIDI_RESPONSE, ANALOG_MESSAGE, function (board) {
  var pin = board.buffer[0] & 0x0F;
  var value = board.buffer[1] | board.buffer[2] << 7;
  /* istanbul ignore else */

  if (board.pins[board.analogPins[pin]]) {
    board.pins[board.analogPins[pin]].value = value;
  }

  board.emit("analog-read-".concat(pin), value);
  board.emit("analog-read", {
    pin: pin,
    value: value
  });
}), _defineProperty(_MIDI_RESPONSE, DIGITAL_MESSAGE, function (board) {
  var port = board.buffer[0] & 0x0F;
  var portValue = board.buffer[1] | board.buffer[2] << 7;

  for (var i = 0; i < 8; i++) {
    var pin = 8 * port + i;
    var pinRec = board.pins[pin];
    var bit = 1 << i;

    if (pinRec && (pinRec.mode === board.MODES.INPUT || pinRec.mode === board.MODES.PULLUP)) {
      pinRec.value = portValue >> (i & 0x07) & 0x01;

      if (pinRec.value) {
        board.ports[port] |= bit;
      } else {
        board.ports[port] &= ~bit;
      }

      var value = pinRec.value;
      board.emit("digital-read-".concat(pin), value);
      board.emit("digital-read", {
        pin: pin,
        value: value
      });
    }
  }
}), _MIDI_RESPONSE);
/**
 * SYSEX_RESPONSE contains functions to be called when we receive a SYSEX message from the arduino.
 * used as a switch object as seen here http://james.padolsey.com/javascript/how-to-avoid-switch-case-syndrome/
 * @private
 */

var SYSEX_RESPONSE = (_SYSEX_RESPONSE = {}, _defineProperty(_SYSEX_RESPONSE, QUERY_FIRMWARE, function (board) {
  var length = board.buffer.length - 2;
  var buffer = Buffer.alloc(Math.round((length - 4) / 2));
  var byte = 0;
  var offset = 0;

  for (var i = 4; i < length; i += 2) {
    byte = (board.buffer[i] & 0x7F | (board.buffer[i + 1] & 0x7F) << 7) & 0xFF;
    buffer.writeUInt8(byte, offset++);
  }

  board.firmware = {
    name: buffer.toString(),
    version: {
      major: board.buffer[2],
      minor: board.buffer[3]
    }
  }, board.emit("queryfirmware");
}), _defineProperty(_SYSEX_RESPONSE, CAPABILITY_RESPONSE, function (board) {
  var modes = Object.keys(board.MODES).map(function (key) {
    return board.MODES[key];
  });
  var mode, resolution;
  var capability = 0;

  function supportedModes(capability) {
    return modes.reduce(function (accum, mode) {
      if (capability & 1 << mode) {
        accum.push(mode);
      }

      return accum;
    }, []);
  } // Only create pins if none have been previously created on the instance.


  if (!board.pins.length) {
    for (var i = 2, n = 0; i < board.buffer.length - 1; i++) {
      if (board.buffer[i] === 0x7F) {
        board.pins.push({
          supportedModes: supportedModes(capability),
          mode: undefined,
          value: 0,
          report: 1
        });
        capability = 0;
        n = 0;
        continue;
      }

      if (n === 0) {
        mode = board.buffer[i];
        resolution = (1 << board.buffer[i + 1]) - 1;
        capability |= 1 << mode; // ADC Resolution of Analog Inputs

        if (mode === board.MODES.ANALOG && board.RESOLUTION.ADC === null) {
          board.RESOLUTION.ADC = resolution;
        } // PWM Resolution of PWM Outputs


        if (mode === board.MODES.PWM && board.RESOLUTION.PWM === null) {
          board.RESOLUTION.PWM = resolution;
        } // DAC Resolution of DAC Outputs
        // if (mode === board.MODES.DAC && board.RESOLUTION.DAC === null) {
        //   board.RESOLUTION.DAC = resolution;
        // }

      }

      n ^= 1;
    }
  }

  board.emit("capability-query");
}), _defineProperty(_SYSEX_RESPONSE, PIN_STATE_RESPONSE, function (board) {
  var pin = board.buffer[2];
  board.pins[pin].mode = board.buffer[3];
  board.pins[pin].state = board.buffer[4];

  if (board.buffer.length > 6) {
    board.pins[pin].state |= board.buffer[5] << 7;
  }

  if (board.buffer.length > 7) {
    board.pins[pin].state |= board.buffer[6] << 14;
  }

  board.emit("pin-state-".concat(pin));
}), _defineProperty(_SYSEX_RESPONSE, ANALOG_MAPPING_RESPONSE, function (board) {
  var pin = 0;
  var currentValue;

  for (var i = 2; i < board.buffer.length - 1; i++) {
    currentValue = board.buffer[i];
    board.pins[pin].analogChannel = currentValue;

    if (currentValue !== 127) {
      board.analogPins.push(pin);
    }

    pin++;
  }

  board.emit("analog-mapping-query");
}), _defineProperty(_SYSEX_RESPONSE, I2C_REPLY, function (board) {
  var reply = [];
  var address = board.buffer[2] & 0x7F | (board.buffer[3] & 0x7F) << 7;
  var register = board.buffer[4] & 0x7F | (board.buffer[5] & 0x7F) << 7;

  for (var i = 6, length = board.buffer.length - 1; i < length; i += 2) {
    reply.push(board.buffer[i] | board.buffer[i + 1] << 7);
  }

  board.emit("I2C-reply-".concat(address, "-").concat(register), reply);
}), _defineProperty(_SYSEX_RESPONSE, ONEWIRE_DATA, function (board) {
  var subCommand = board.buffer[2];

  if (!SYSEX_RESPONSE[subCommand]) {
    return;
  }

  SYSEX_RESPONSE[subCommand](board);
}), _defineProperty(_SYSEX_RESPONSE, ONEWIRE_SEARCH_REPLY, function (board) {
  var pin = board.buffer[3];
  var buffer = board.buffer.slice(4, board.buffer.length - 1);
  board.emit("1-wire-search-reply-".concat(pin), OneWire.readDevices(buffer));
}), _defineProperty(_SYSEX_RESPONSE, ONEWIRE_SEARCH_ALARMS_REPLY, function (board) {
  var pin = board.buffer[3];
  var buffer = board.buffer.slice(4, board.buffer.length - 1);
  board.emit("1-wire-search-alarms-reply-".concat(pin), OneWire.readDevices(buffer));
}), _defineProperty(_SYSEX_RESPONSE, ONEWIRE_READ_REPLY, function (board) {
  var encoded = board.buffer.slice(4, board.buffer.length - 1);
  var decoded = Encoder7Bit.from7BitArray(encoded);
  var correlationId = decoded[1] << 8 | decoded[0];
  board.emit("1-wire-read-reply-".concat(correlationId), decoded.slice(2));
}), _defineProperty(_SYSEX_RESPONSE, STRING_DATA$1, function (board) {
  board.emit("string", Buffer.from(board.buffer.slice(2, -1)).toString().replace(/\0/g, ""));
}), _defineProperty(_SYSEX_RESPONSE, PING_READ, function (board) {
  var pin = board.buffer[2] & 0x7F | (board.buffer[3] & 0x7F) << 7;
  var durationBuffer = [board.buffer[4] & 0x7F | (board.buffer[5] & 0x7F) << 7, board.buffer[6] & 0x7F | (board.buffer[7] & 0x7F) << 7, board.buffer[8] & 0x7F | (board.buffer[9] & 0x7F) << 7, board.buffer[10] & 0x7F | (board.buffer[11] & 0x7F) << 7];
  var duration = (durationBuffer[0] << 24) + (durationBuffer[1] << 16) + (durationBuffer[2] << 8) + durationBuffer[3];
  board.emit("ping-read-".concat(pin), duration);
}), _defineProperty(_SYSEX_RESPONSE, STEPPER, function (board) {
  var deviceNum = board.buffer[2];
  board.emit("stepper-done-".concat(deviceNum), true);
}), _defineProperty(_SYSEX_RESPONSE, ACCELSTEPPER, function (board) {
  var command = board.buffer[2];
  var deviceNum = board.buffer[3];
  var value = command === 0x06 || command === 0x0A ? decode32BitSignedInteger(board.buffer.slice(4, 9)) : null;

  if (command === 0x06) {
    board.emit("stepper-position-".concat(deviceNum), value);
  }

  if (command === 0x0A) {
    board.emit("stepper-done-".concat(deviceNum), value);
  }

  if (command === 0x24) {
    board.emit("multi-stepper-done-".concat(deviceNum));
  }
}), _defineProperty(_SYSEX_RESPONSE, SERIAL_MESSAGE, function (board) {
  var command = board.buffer[2] & START_SYSEX$1;
  var portId = board.buffer[2] & 0x0F;
  var reply = [];
  /* istanbul ignore else */

  if (command === SERIAL_REPLY) {
    for (var i = 3, len = board.buffer.length; i < len - 1; i += 2) {
      reply.push(board.buffer[i + 1] << 7 | board.buffer[i]);
    }

    board.emit("serial-data-".concat(portId), reply);
  }
}), _SYSEX_RESPONSE);
/**
 * The default transport class
 */

var Transport = null;
/**
 * @class The Board object represents an arduino board.
 * @augments EventEmitter
 * @param {String} port This is the serial port the arduino is connected to.
 * @param {function} function A function to be called when the arduino is ready to communicate.
 * @property MODES All the modes available for pins on this arduino board.
 * @property I2C_MODES All the I2C modes available.
 * @property SERIAL_MODES All the Serial modes available.
 * @property SERIAL_PORT_ID ID values to pass as the portId parameter when calling serialConfig.
 * @property HIGH A constant to set a pins value to HIGH when the pin is set to an output.
 * @property LOW A constant to set a pins value to LOW when the pin is set to an output.
 * @property pins An array of pin object literals.
 * @property analogPins An array of analog pins and their corresponding indexes in the pins array.
 * @property version An object indicating the major and minor version of the firmware currently running.
 * @property firmware An object indicating the name, major and minor version of the firmware currently running.
 * @property buffer An array holding the current bytes received from the arduino.
 * @property {SerialPort} sp The serial port object used to communicate with the arduino.
 */

var Firmata$1 = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Firmata, _EventEmitter);

  var _super = _createSuper$3(Firmata);

  function Firmata(port, options, callback) {
    var _this;

    _classCallCheck(this, Firmata);

    _this = _super.call(this);

    if (typeof options === "function" || typeof options === "undefined") {
      callback = options;
      options = {};
    }

    var board = _assertThisInitialized(_this);

    var defaults = {
      reportVersionTimeout: 5000,
      samplingInterval: 19,
      serialport: {
        baudRate: 57600,
        // https://github.com/node-serialport/node-serialport/blob/5.0.0/UPGRADE_GUIDE.md#open-options
        highWaterMark: 256
      }
    };
    var settings = Object.assign({}, defaults, options);
    _this.isReady = false;
    _this.MODES = {
      INPUT: 0x00,
      OUTPUT: 0x01,
      ANALOG: 0x02,
      PWM: 0x03,
      SERVO: 0x04,
      SHIFT: 0x05,
      I2C: 0x06,
      ONEWIRE: 0x07,
      STEPPER: 0x08,
      SERIAL: 0x0A,
      PULLUP: 0x0B,
      IGNORE: 0x7F,
      PING_READ: 0x75,
      UNKOWN: 0x10
    };
    _this.I2C_MODES = {
      WRITE: 0,
      READ: 1,
      CONTINUOUS_READ: 2,
      STOP_READING: 3
    };
    _this.STEPPER = {
      TYPE: {
        DRIVER: 1,
        TWO_WIRE: 2,
        THREE_WIRE: 3,
        FOUR_WIRE: 4
      },
      STEP_SIZE: {
        WHOLE: 0,
        HALF: 1
      },
      RUN_STATE: {
        STOP: 0,
        ACCEL: 1,
        DECEL: 2,
        RUN: 3
      },
      DIRECTION: {
        CCW: 0,
        CW: 1
      }
    };
    _this.SERIAL_MODES = {
      CONTINUOUS_READ: 0x00,
      STOP_READING: 0x01
    }; // ids for hardware and software serial ports on the board

    _this.SERIAL_PORT_IDs = {
      HW_SERIAL0: 0x00,
      HW_SERIAL1: 0x01,
      HW_SERIAL2: 0x02,
      HW_SERIAL3: 0x03,
      SW_SERIAL0: 0x08,
      SW_SERIAL1: 0x09,
      SW_SERIAL2: 0x10,
      SW_SERIAL3: 0x11,
      // Default can be used by dependant libraries to key on a
      // single property name when negotiating ports.
      //
      // Firmata elects SW_SERIAL0: 0x08 as its DEFAULT
      DEFAULT: 0x08
    }; // map to the pin resolution value in the capability query response

    _this.SERIAL_PIN_TYPES = {
      RES_RX0: 0x00,
      RES_TX0: 0x01,
      RES_RX1: 0x02,
      RES_TX1: 0x03,
      RES_RX2: 0x04,
      RES_TX2: 0x05,
      RES_RX3: 0x06,
      RES_TX3: 0x07
    };
    _this.RESOLUTION = {
      ADC: null,
      DAC: null,
      PWM: null
    };
    _this.HIGH = 1;
    _this.LOW = 0;
    _this.pins = [];
    _this.ports = Array(16).fill(0);
    _this.analogPins = [];
    _this.version = {};
    _this.firmware = {};
    _this.buffer = [];
    _this.versionReceived = false;
    _this.name = "Firmata";
    _this.settings = settings;
    _this.pending = 0;
    _this.digitalPortQueue = 0x0000;

    if (_typeof$1(port) === "object") {
      _this.transport = port;
    } else {
      if (!Transport) {
        throw new Error("Missing Default Transport");
      }

      _this.transport = new Transport(port, settings.serialport);
    }

    _this.transport.on("close", function (event) {
      // https://github.com/node-serialport/node-serialport/blob/5.0.0/UPGRADE_GUIDE.md#opening-and-closing
      if (event && event.disconnected) {
        _this.emit("disconnect");

        return;
      }

      _this.emit("close");
    });

    _this.transport.on("open", function (event) {
      _this.emit("open", event); // Legacy


      _this.emit("connect", event);
    });

    _this.transport.on("error", function (error) {
      if (!_this.isReady && typeof callback === "function") {
        callback(error);
      } else {
        _this.emit("error", error);
      }
    });

    _this.transport.on("data", function (data) {
      for (var i = 0; i < data.length; i++) {
        var byte = data[i]; // we dont want to push 0 as the first byte on our buffer

        if (_this.buffer.length === 0 && byte === 0) {
          continue;
        } else {
          _this.buffer.push(byte);

          var first = _this.buffer[0];
          var last = _this.buffer[_this.buffer.length - 1]; // [START_SYSEX, ... END_SYSEX]

          if (first === START_SYSEX$1 && last === END_SYSEX$1) {
            var handler = SYSEX_RESPONSE[_this.buffer[1]]; // Ensure a valid SYSEX_RESPONSE handler exists
            // Only process these AFTER the REPORT_VERSION
            // message has been received and processed.

            if (handler && _this.versionReceived) {
              handler(_assertThisInitialized(_this));
            } // It is possible for the board to have
            // existing activity from a previous run
            // that will leave any of the following
            // active:
            //
            //    - ANALOG_MESSAGE
            //    - SERIAL_READ
            //    - I2C_REQUEST, CONTINUOUS_READ
            //
            // This means that we will receive these
            // messages on transport "open", before any
            // handshake can occur. We MUST assert
            // that we will only process this buffer
            // AFTER the REPORT_VERSION message has
            // been received. Not doing so will result
            // in the appearance of the program "hanging".
            //
            // Since we cannot do anything with this data
            // until _after_ REPORT_VERSION, discard it.
            //


            _this.buffer.length = 0;
          } else if (first === START_SYSEX$1 && _this.buffer.length > 0) {
            // we have a new command after an incomplete sysex command
            var currByte = data[i];

            if (currByte > 0x7F) {
              _this.buffer.length = 0;

              _this.buffer.push(currByte);
            }
          } else {
            /* istanbul ignore else */
            if (first !== START_SYSEX$1) {
              // Check if data gets out of sync: first byte in buffer
              // must be a valid response if not START_SYSEX
              // Identify response on first byte
              var response = first < START_SYSEX$1 ? first & START_SYSEX$1 : first; // Check if the first byte is possibly
              // a valid MIDI_RESPONSE (handler)

              /* istanbul ignore else */

              if (response !== REPORT_VERSION && response !== ANALOG_MESSAGE && response !== DIGITAL_MESSAGE) {
                // If not valid, then we received garbage and can discard
                // whatever bytes have been been queued.
                _this.buffer.length = 0;
              }
            }
          } // There are 3 bytes in the buffer and the first is not START_SYSEX:
          // Might have a MIDI Command


          if (_this.buffer.length === 3 && first !== START_SYSEX$1) {
            // response bytes under 0xF0 we have a multi byte operation
            var _response = first < START_SYSEX$1 ? first & START_SYSEX$1 : first;
            /* istanbul ignore else */


            if (MIDI_RESPONSE[_response]) {
              // It's ok that this.versionReceived will be set to
              // true every time a valid MIDI_RESPONSE is received.
              // This condition is necessary to ensure that REPORT_VERSION
              // is called first.
              if (_this.versionReceived || first === REPORT_VERSION) {
                _this.versionReceived = true;

                MIDI_RESPONSE[_response](_assertThisInitialized(_this));
              }

              _this.buffer.length = 0;
            } else {
              // A bad serial read must have happened.
              // Reseting the buffer will allow recovery.
              _this.buffer.length = 0;
            }
          }
        }
      }
    }); // if we have not received the version within the allotted
    // time specified by the reportVersionTimeout (user or default),
    // then send an explicit request for it.


    _this.reportVersionTimeoutId = setTimeout(function () {
      /* istanbul ignore else */
      if (_this.versionReceived === false) {
        _this.reportVersion(function () {});

        _this.queryFirmware(function () {});
      }
    }, settings.reportVersionTimeout);

    function ready() {
      board.isReady = true;
      board.emit("ready");
      /* istanbul ignore else */

      if (typeof callback === "function") {
        callback();
      }
    } // Await the reported version.


    _this.once("reportversion", function () {
      clearTimeout(_this.reportVersionTimeoutId);
      _this.versionReceived = true;

      _this.once("queryfirmware", function () {
        // Only preemptively set the sampling interval if `samplingInterval`
        // property was _explicitly_ set as a constructor option.
        if (options.samplingInterval !== undefined) {
          _this.setSamplingInterval(options.samplingInterval);
        }

        if (settings.skipCapabilities) {
          _this.analogPins = settings.analogPins || _this.analogPins;
          _this.pins = settings.pins || _this.pins;
          /* istanbul ignore else */

          if (!_this.pins.length) {
            for (var i = 0; i < (settings.pinCount || MAX_PIN_COUNT); i++) {
              var supportedModes = [];

              var analogChannel = _this.analogPins.indexOf(i);

              if (analogChannel < 0) {
                analogChannel = 127;
              }

              _this.pins.push({
                supportedModes: supportedModes,
                analogChannel: analogChannel
              });
            }
          } // If the capabilities query is skipped,
          // default resolution values will be used.
          //
          // Based on ATmega328/P
          //


          _this.RESOLUTION.ADC = 0x3FF;
          _this.RESOLUTION.PWM = 0x0FF;
          ready();
        } else {
          _this.queryCapabilities(function () {
            _this.queryAnalogMapping(ready);
          });
        }
      });
    });

    return _this;
  }
  /**
   * Asks the arduino to tell us its version.
   * @param {function} callback A function to be called when the arduino has reported its version.
   */


  _createClass(Firmata, [{
    key: "reportVersion",
    value: function reportVersion(callback) {
      this.once("reportversion", callback);
      writeToTransport(this, [REPORT_VERSION]);
    }
    /**
     * Asks the arduino to tell us its firmware version.
     * @param {function} callback A function to be called when the arduino has reported its firmware version.
     */

  }, {
    key: "queryFirmware",
    value: function queryFirmware(callback) {
      this.once("queryfirmware", callback);
      writeToTransport(this, [START_SYSEX$1, QUERY_FIRMWARE, END_SYSEX$1]);
    }
    /**
     * Asks the arduino to read analog data. Turn on reporting for this pin.
     * @param {number} pin The pin to read analog data
     * @param {function} callback A function to call when we have the analag data.
     */

  }, {
    key: "analogRead",
    value: function analogRead(pin, callback) {
      this.reportAnalogPin(pin, 1);
      this.once("analog-read-".concat(pin), callback);
    }
    /**
     * Write a PWM value Asks the arduino to write an analog message.
     * @param {number} pin The pin to write analog data to.
     * @param {number} value The data to write to the pin between 0 and this.RESOLUTION.PWM.
     */

  }, {
    key: "pwmWrite",
    value: function pwmWrite(pin, value) {
      var data;
      this.pins[pin].value = value;

      if (pin > 15) {
        data = [START_SYSEX$1, EXTENDED_ANALOG, pin, value & 0x7F, value >> 7 & 0x7F];

        if (value > 0x00004000) {
          data[data.length] = value >> 14 & 0x7F;
        }

        if (value > 0x00200000) {
          data[data.length] = value >> 21 & 0x7F;
        }

        if (value > 0x10000000) {
          data[data.length] = value >> 28 & 0x7F;
        }

        data[data.length] = END_SYSEX$1;
      } else {
        data = [ANALOG_MESSAGE | pin, value & 0x7F, value >> 7 & 0x7F];
      }

      writeToTransport(this, data);
    }
    /**
     * Set a pin to SERVO mode with an explicit PWM range.
     *
     * @param {number} pin The pin the servo is connected to
     * @param {number} min A 14-bit signed int.
     * @param {number} max A 14-bit signed int.
     */

  }, {
    key: "servoConfig",
    value: function servoConfig(pin, min, max) {
      if (_typeof$1(pin) === "object" && pin !== null) {
        var temp = pin;
        pin = temp.pin;
        min = temp.min;
        max = temp.max;
      }

      if (typeof pin === "undefined") {
        throw new Error("servoConfig: pin must be specified");
      }

      if (typeof min === "undefined") {
        throw new Error("servoConfig: min must be specified");
      }

      if (typeof max === "undefined") {
        throw new Error("servoConfig: max must be specified");
      } // [0]  START_SYSEX  (0xF0)
      // [1]  SERVO_CONFIG (0x70)
      // [2]  pin number   (0-127)
      // [3]  minPulse LSB (0-6)
      // [4]  minPulse MSB (7-13)
      // [5]  maxPulse LSB (0-6)
      // [6]  maxPulse MSB (7-13)
      // [7]  END_SYSEX    (0xF7)


      this.pins[pin].mode = this.MODES.SERVO;
      writeToTransport(this, [START_SYSEX$1, SERVO_CONFIG, pin, min & 0x7F, min >> 7 & 0x7F, max & 0x7F, max >> 7 & 0x7F, END_SYSEX$1]);
    }
    /**
     * Asks the arduino to move a servo
     * @param {number} pin The pin the servo is connected to
     * @param {number} value The degrees to move the servo to.
     */

  }, {
    key: "servoWrite",
    value: function servoWrite() {
      // Values less than 544 will be treated as angles in degrees
      // (valid values in microseconds are handled as microseconds)
      this.analogWrite.apply(this, arguments);
    }
    /**
     * Asks the arduino to set the pin to a certain mode.
     * @param {number} pin The pin you want to change the mode of.
     * @param {number} mode The mode you want to set. Must be one of board.MODES
     */

  }, {
    key: "pinMode",
    value: function pinMode(pin, mode) {
      if (mode === this.MODES.ANALOG) {
        // Because pinMode may be called before analogRead(pin, () => {}), but isn't
        // necessary to initiate an analog read on an analog pin, we'll assign the
        // mode here, but do nothing further. In analogRead(), the call to
        // reportAnalogPin(pin, 1) is all that's needed to turn on analog input
        // reading.
        //
        // reportAnalogPin(...) will reconcile the pin number as well, the
        // same operation we use here to assign a "mode":
        this.pins[this.analogPins[pin]].mode = mode;
      } else {
        this.pins[pin].mode = mode;
        writeToTransport(this, [PIN_MODE, pin, mode]);
      }
    }
    /**
     * Asks the arduino to write a value to a digital pin
     * @param {number} pin The pin you want to write a value to.
     * @param {number} value The value you want to write. Must be board.HIGH or board.LOW
     * @param {boolean} enqueue When true, the local state is updated but the command is not sent to the Arduino
     */

  }, {
    key: "digitalWrite",
    value: function digitalWrite(pin, value, enqueue) {
      var port = this.updateDigitalPort(pin, value);

      if (enqueue) {
        this.digitalPortQueue |= 1 << port;
      } else {
        this.writeDigitalPort(port);
      }
    }
    /**
     * Update local store of digital port state
     * @param {number} pin The pin you want to write a value to.
     * @param {number} value The value you want to write. Must be board.HIGH or board.LOW
     */

  }, {
    key: "updateDigitalPort",
    value: function updateDigitalPort(pin, value) {
      var port = pin >> 3;
      var bit = 1 << (pin & 0x07);
      this.pins[pin].value = value;

      if (value) {
        this.ports[port] |= bit;
      } else {
        this.ports[port] &= ~bit;
      }

      return port;
    }
    /**
     * Write queued digital ports
     */

  }, {
    key: "flushDigitalPorts",
    value: function flushDigitalPorts() {
      for (var i = 0; i < this.ports.length; i++) {
        if (this.digitalPortQueue >> i) {
          this.writeDigitalPort(i);
        }
      }

      this.digitalPortQueue = 0x0000;
    }
    /**
     * Update a digital port (group of 8 digital pins) on the Arduino
     * @param {number} port The port you want to update.
     */

  }, {
    key: "writeDigitalPort",
    value: function writeDigitalPort(port) {
      writeToTransport(this, [DIGITAL_MESSAGE | port, this.ports[port] & 0x7F, this.ports[port] >> 7 & 0x7F]);
    }
    /**
     * Asks the arduino to read digital data. Turn on reporting for this pin's port.
     *
     * @param {number} pin The pin to read data from
     * @param {function} callback The function to call when data has been received
     */

  }, {
    key: "digitalRead",
    value: function digitalRead(pin, callback) {
      this.reportDigitalPin(pin, 1);
      this.once("digital-read-".concat(pin), callback);
    }
    /**
     * Asks the arduino to tell us its capabilities
     * @param {function} callback A function to call when we receive the capabilities
     */

  }, {
    key: "queryCapabilities",
    value: function queryCapabilities(callback) {
      this.once("capability-query", callback);
      writeToTransport(this, [START_SYSEX$1, CAPABILITY_QUERY, END_SYSEX$1]);
    }
    /**
     * Asks the arduino to tell us its analog pin mapping
     * @param {function} callback A function to call when we receive the pin mappings.
     */

  }, {
    key: "queryAnalogMapping",
    value: function queryAnalogMapping(callback) {
      this.once("analog-mapping-query", callback);
      writeToTransport(this, [START_SYSEX$1, ANALOG_MAPPING_QUERY, END_SYSEX$1]);
    }
    /**
     * Asks the arduino to tell us the current state of a pin
     * @param {number} pin The pin we want to the know the state of
     * @param {function} callback A function to call when we receive the pin state.
     */

  }, {
    key: "queryPinState",
    value: function queryPinState(pin, callback) {
      this.once("pin-state-".concat(pin), callback);
      writeToTransport(this, [START_SYSEX$1, PIN_STATE_QUERY, pin, END_SYSEX$1]);
    }
    /**
     * Sends a string to the arduino
     * @param {String} string to send to the device
     */

  }, {
    key: "sendString",
    value: function sendString(string) {
      var bytes = Buffer.from("".concat(string, "\0"), "utf8");
      var data = [];
      data.push(START_SYSEX$1, STRING_DATA$1);

      for (var i = 0, length = bytes.length; i < length; i++) {
        data.push(bytes[i] & 0x7F, bytes[i] >> 7 & 0x7F);
      }

      data.push(END_SYSEX$1);
      writeToTransport(this, data);
    }
    /**
     * Sends a I2C config request to the arduino board with an optional
     * value in microseconds to delay an I2C Read.  Must be called before
     * an I2C Read or Write
     * @param {number} delay in microseconds to set for I2C Read
     */

  }, {
    key: "sendI2CConfig",
    value: function sendI2CConfig(delay) {
      return this.i2cConfig(delay);
    }
    /**
     * Enable I2C with an optional read delay. Must be called before
     * an I2C Read or Write
     *
     * Supersedes sendI2CConfig
     *
     * @param {number} delay in microseconds to set for I2C Read
     *
     * or
     *
     * @param {object} with a single property `delay`
     */

  }, {
    key: "i2cConfig",
    value: function i2cConfig(options) {
      var settings = i2cActive.get(this);
      var delay;

      if (!settings) {
        settings = {
          /*
            Keys will be I2C peripheral addresses
           */
        };
        i2cActive.set(this, settings);
      }

      if (typeof options === "number") {
        delay = options;
      } else {
        if (_typeof$1(options) === "object" && options !== null) {
          delay = Number(options.delay); // When an address was explicitly specified, there may also be
          // peripheral specific instructions in the config.

          if (typeof options.address !== "undefined") {
            if (!settings[options.address]) {
              settings[options.address] = {
                stopTX: true
              };
            }
          } // When settings have been explicitly provided, just bulk assign
          // them to the existing settings, even if that's empty. This
          // allows for reconfiguration as needed.


          if (typeof options.settings !== "undefined") {
            Object.assign(settings[options.address], options.settings);
            /*
              - stopTX: true | false
                  Set `stopTX` to `false` if this peripheral
                  expects Wire to keep the transmission connection alive between
                  setting a register and requesting bytes.
                   Defaults to `true`.
             */
          }
        }
      }

      settings.delay = delay = delay || 0;
      i2cRequest(this, [START_SYSEX$1, I2C_CONFIG, delay & 0xFF, delay >> 8 & 0xFF, END_SYSEX$1]);
      return this;
    }
    /**
     * Asks the arduino to send an I2C request to a device
     * @param {number} slaveAddress The address of the I2C device
     * @param {Array} bytes The bytes to send to the device
     */

  }, {
    key: "sendI2CWriteRequest",
    value: function sendI2CWriteRequest(slaveAddress, bytes) {
      var data = [];
      /* istanbul ignore next */

      bytes = bytes || [];
      data.push(START_SYSEX$1, I2C_REQUEST, slaveAddress, this.I2C_MODES.WRITE << 3);

      for (var i = 0, length = bytes.length; i < length; i++) {
        data.push(bytes[i] & 0x7F, bytes[i] >> 7 & 0x7F);
      }

      data.push(END_SYSEX$1);
      i2cRequest(this, data);
    }
    /**
     * Write data to a register
     *
     * @param {number} address      The address of the I2C device.
     * @param {Array} cmdRegOrData  An array of bytes
     *
     * Write a command to a register
     *
     * @param {number} address      The address of the I2C device.
     * @param {number} cmdRegOrData The register
     * @param {Array} inBytes       An array of bytes
     *
     */

  }, {
    key: "i2cWrite",
    value: function i2cWrite(address, registerOrData, inBytes) {
      /**
       * registerOrData:
       * [... arbitrary bytes]
       *
       * or
       *
       * registerOrData, inBytes:
       * command [, ...]
       *
       */
      var data = [START_SYSEX$1, I2C_REQUEST, address, this.I2C_MODES.WRITE << 3]; // If i2cWrite was used for an i2cWriteReg call...

      if (arguments.length === 3 && !Array.isArray(registerOrData) && !Array.isArray(inBytes)) {
        return this.i2cWriteReg(address, registerOrData, inBytes);
      } // Fix arguments if called with Firmata.js API


      if (arguments.length === 2) {
        if (Array.isArray(registerOrData)) {
          inBytes = registerOrData.slice();
          registerOrData = inBytes.shift();
        } else {
          inBytes = [];
        }
      }

      var bytes = Buffer.from([registerOrData].concat(inBytes));

      for (var i = 0, length = bytes.length; i < length; i++) {
        data.push(bytes[i] & 0x7F, bytes[i] >> 7 & 0x7F);
      }

      data.push(END_SYSEX$1);
      i2cRequest(this, data);
      return this;
    }
    /**
     * Write data to a register
     *
     * @param {number} address    The address of the I2C device.
     * @param {number} register   The register.
     * @param {number} byte       The byte value to write.
     *
     */

  }, {
    key: "i2cWriteReg",
    value: function i2cWriteReg(address, register, byte) {
      i2cRequest(this, [START_SYSEX$1, I2C_REQUEST, address, this.I2C_MODES.WRITE << 3, // register
      register & 0x7F, register >> 7 & 0x7F, // byte
      byte & 0x7F, byte >> 7 & 0x7F, END_SYSEX$1]);
      return this;
    }
    /**
     * Asks the arduino to request bytes from an I2C device
     * @param {number} slaveAddress The address of the I2C device
     * @param {number} numBytes The number of bytes to receive.
     * @param {function} callback A function to call when we have received the bytes.
     */

  }, {
    key: "sendI2CReadRequest",
    value: function sendI2CReadRequest(address, numBytes, callback) {
      i2cRequest(this, [START_SYSEX$1, I2C_REQUEST, address, this.I2C_MODES.READ << 3, numBytes & 0x7F, numBytes >> 7 & 0x7F, END_SYSEX$1]);
      this.once("I2C-reply-".concat(address, "-0"), callback);
    } // TODO: Refactor i2cRead and i2cReadOnce
    //      to share most operations.

    /**
     * Initialize a continuous I2C read.
     *
     * @param {number} address    The address of the I2C device
     * @param {number} register   Optionally set the register to read from.
     * @param {number} numBytes   The number of bytes to receive.
     * @param {function} callback A function to call when we have received the bytes.
     */

  }, {
    key: "i2cRead",
    value: function i2cRead(address, register, bytesToRead, callback) {
      if (arguments.length === 3 && typeof register === "number" && typeof bytesToRead === "function") {
        callback = bytesToRead;
        bytesToRead = register;
        register = null;
      }

      var data = [START_SYSEX$1, I2C_REQUEST, address, this.I2C_MODES.CONTINUOUS_READ << 3];
      var event = "I2C-reply-".concat(address, "-");

      if (register !== null) {
        data.push(register & 0x7F, register >> 7 & 0x7F);
      } else {
        register = 0;
      }

      event += register;
      data.push(bytesToRead & 0x7F, bytesToRead >> 7 & 0x7F, END_SYSEX$1);
      this.on(event, callback);
      i2cRequest(this, data);
      return this;
    }
    /**
     * Stop continuous reading of the specified I2C address or register.
     *
     * @param {object} options Options:
     *   bus {number} The I2C bus (on supported platforms)
     *   address {number} The I2C peripheral address to stop reading.
     *
     * @param {number} address The I2C peripheral address to stop reading.
     */

  }, {
    key: "i2cStop",
    value: function i2cStop(options) {
      var _this2 = this;

      // There may be more values in the future
      // var options = {};
      // null or undefined? Do nothing.
      if (options == null) {
        return;
      }

      if (typeof options === "number") {
        options = {
          address: options
        };
      }

      writeToTransport(this, [START_SYSEX$1, I2C_REQUEST, options.address, this.I2C_MODES.STOP_READING << 3, END_SYSEX$1]);
      Object.keys(this._events).forEach(function (event) {
        if (event.startsWith("I2C-reply-".concat(options.address))) {
          _this2.removeAllListeners(event);
        }
      });
    }
    /**
     * Perform a single I2C read
     *
     * Supersedes sendI2CReadRequest
     *
     * Read bytes from address
     *
     * @param {number} address    The address of the I2C device
     * @param {number} register   Optionally set the register to read from.
     * @param {number} numBytes   The number of bytes to receive.
     * @param {function} callback A function to call when we have received the bytes.
     *
     */

  }, {
    key: "i2cReadOnce",
    value: function i2cReadOnce(address, register, bytesToRead, callback) {
      if (arguments.length === 3 && typeof register === "number" && typeof bytesToRead === "function") {
        callback = bytesToRead;
        bytesToRead = register;
        register = null;
      }

      var data = [START_SYSEX$1, I2C_REQUEST, address, this.I2C_MODES.READ << 3];
      var event = "I2C-reply-".concat(address, "-");

      if (register !== null) {
        data.push(register & 0x7F, register >> 7 & 0x7F);
      } else {
        register = 0;
      }

      event += register;
      data.push(bytesToRead & 0x7F, bytesToRead >> 7 & 0x7F, END_SYSEX$1);
      this.once(event, callback);
      i2cRequest(this, data);
      return this;
    }
    /**
     * Configure the passed pin as the controller in a 1-wire bus.
     * Pass as enableParasiticPower true if you want the data pin to power the bus.
     * @param pin
     * @param enableParasiticPower
     */

  }, {
    key: "sendOneWireConfig",
    value: function sendOneWireConfig(pin, enableParasiticPower) {
      writeToTransport(this, [START_SYSEX$1, ONEWIRE_DATA, ONEWIRE_CONFIG_REQUEST, pin, enableParasiticPower ? 0x01 : 0x00, END_SYSEX$1]);
    }
    /**
     * Searches for 1-wire devices on the bus.  The passed callback should accept
     * and error argument and an array of device identifiers.
     * @param pin
     * @param callback
     */

  }, {
    key: "sendOneWireSearch",
    value: function sendOneWireSearch(pin, callback) {
      this[SYM_sendOneWireSearch](ONEWIRE_SEARCH_REQUEST, "1-wire-search-reply-".concat(pin), pin, callback);
    }
    /**
     * Searches for 1-wire devices on the bus in an alarmed state.  The passed callback
     * should accept and error argument and an array of device identifiers.
     * @param pin
     * @param callback
     */

  }, {
    key: "sendOneWireAlarmsSearch",
    value: function sendOneWireAlarmsSearch(pin, callback) {
      this[SYM_sendOneWireSearch](ONEWIRE_SEARCH_ALARMS_REQUEST, "1-wire-search-alarms-reply-".concat(pin), pin, callback);
    }
  }, {
    key: SYM_sendOneWireSearch,
    value: function value(type, event, pin, callback) {
      writeToTransport(this, [START_SYSEX$1, ONEWIRE_DATA, type, pin, END_SYSEX$1]);
      var timeout = setTimeout(function () {
        /* istanbul ignore next */
        callback(new Error("1-Wire device search timeout - are you running ConfigurableFirmata?"));
      }, 5000);
      this.once(event, function (devices) {
        clearTimeout(timeout);
        callback(null, devices);
      });
    }
    /**
     * Reads data from a device on the bus and invokes the passed callback.
     *
     * N.b. ConfigurableFirmata will issue the 1-wire select command internally.
     * @param pin
     * @param device
     * @param numBytesToRead
     * @param callback
     */

  }, {
    key: "sendOneWireRead",
    value: function sendOneWireRead(pin, device, numBytesToRead, callback) {
      var correlationId = Math.floor(Math.random() * 255);
      /* istanbul ignore next */

      var timeout = setTimeout(function () {
        /* istanbul ignore next */
        callback(new Error("1-Wire device read timeout - are you running ConfigurableFirmata?"));
      }, 5000);
      this[SYM_sendOneWireRequest](pin, ONEWIRE_READ_REQUEST_BIT, device, numBytesToRead, correlationId, null, null, "1-wire-read-reply-".concat(correlationId), function (data) {
        clearTimeout(timeout);
        callback(null, data);
      });
    }
    /**
     * Resets all devices on the bus.
     * @param pin
     */

  }, {
    key: "sendOneWireReset",
    value: function sendOneWireReset(pin) {
      this[SYM_sendOneWireRequest](pin, ONEWIRE_RESET_REQUEST_BIT);
    }
    /**
     * Writes data to the bus to be received by the passed device.  The device
     * should be obtained from a previous call to sendOneWireSearch.
     *
     * N.b. ConfigurableFirmata will issue the 1-wire select command internally.
     * @param pin
     * @param device
     * @param data
     */

  }, {
    key: "sendOneWireWrite",
    value: function sendOneWireWrite(pin, device, data) {
      this[SYM_sendOneWireRequest](pin, ONEWIRE_WRITE_REQUEST_BIT, device, null, null, null, Array.isArray(data) ? data : [data]);
    }
    /**
     * Tells firmata to not do anything for the passed amount of ms.  For when you
     * need to give a device attached to the bus time to do a calculation.
     * @param pin
     */

  }, {
    key: "sendOneWireDelay",
    value: function sendOneWireDelay(pin, delay) {
      this[SYM_sendOneWireRequest](pin, ONEWIRE_DELAY_REQUEST_BIT, null, null, null, delay);
    }
    /**
     * Sends the passed data to the passed device on the bus, reads the specified
     * number of bytes and invokes the passed callback.
     *
     * N.b. ConfigurableFirmata will issue the 1-wire select command internally.
     * @param pin
     * @param device
     * @param data
     * @param numBytesToRead
     * @param callback
     */

  }, {
    key: "sendOneWireWriteAndRead",
    value: function sendOneWireWriteAndRead(pin, device, data, numBytesToRead, callback) {
      var correlationId = Math.floor(Math.random() * 255);
      /* istanbul ignore next */

      var timeout = setTimeout(function () {
        /* istanbul ignore next */
        callback(new Error("1-Wire device read timeout - are you running ConfigurableFirmata?"));
      }, 5000);
      this[SYM_sendOneWireRequest](pin, ONEWIRE_WRITE_REQUEST_BIT | ONEWIRE_READ_REQUEST_BIT, device, numBytesToRead, correlationId, null, Array.isArray(data) ? data : [data], "1-wire-read-reply-".concat(correlationId), function (data) {
        clearTimeout(timeout);
        callback(null, data);
      });
    } // see http://firmata.org/wiki/Proposals#OneWire_Proposal

  }, {
    key: SYM_sendOneWireRequest,
    value: function value(pin, subcommand, device, numBytesToRead, correlationId, delay, dataToWrite, event, callback) {
      var bytes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      if (device || numBytesToRead || correlationId || delay || dataToWrite) {
        subcommand = subcommand | ONEWIRE_WITHDATA_REQUEST_BITS;
      }

      if (device) {
        bytes.splice.apply(bytes, _toConsumableArray([0, 8].concat(device)));
      }

      if (numBytesToRead) {
        bytes[8] = numBytesToRead & 0xFF;
        bytes[9] = numBytesToRead >> 8 & 0xFF;
      }

      if (correlationId) {
        bytes[10] = correlationId & 0xFF;
        bytes[11] = correlationId >> 8 & 0xFF;
      }

      if (delay) {
        bytes[12] = delay & 0xFF;
        bytes[13] = delay >> 8 & 0xFF;
        bytes[14] = delay >> 16 & 0xFF;
        bytes[15] = delay >> 24 & 0xFF;
      }

      if (dataToWrite) {
        bytes.push.apply(bytes, _toConsumableArray(dataToWrite));
      }

      var output = [START_SYSEX$1, ONEWIRE_DATA, subcommand, pin].concat(_toConsumableArray(Encoder7Bit.to7BitArray(bytes)), [END_SYSEX$1]);
      writeToTransport(this, output);

      if (event && callback) {
        this.once(event, callback);
      }
    }
    /**
     * Set sampling interval in millis. Default is 19 ms
     * @param {number} interval The sampling interval in ms > 10
     */

  }, {
    key: "setSamplingInterval",
    value: function setSamplingInterval(interval) {
      var safeint = interval < 10 ? 10 : interval > 65535 ? 65535 : interval;
      this.settings.samplingInterval = safeint;
      writeToTransport(this, [START_SYSEX$1, SAMPLING_INTERVAL, safeint & 0x7F, safeint >> 7 & 0x7F, END_SYSEX$1]);
    }
    /**
     * Get sampling interval in millis. Default is 19 ms
     *
     * @return {number} samplingInterval
     */

  }, {
    key: "getSamplingInterval",
    value: function getSamplingInterval() {
      return this.settings.samplingInterval;
    }
    /**
     * Set reporting on pin
     * @param {number} pin The pin to turn on/off reporting
     * @param {number} value Binary value to turn reporting on/off
     */

  }, {
    key: "reportAnalogPin",
    value: function reportAnalogPin(pin, value) {
      /* istanbul ignore else */
      if (value === 0 || value === 1) {
        this.pins[this.analogPins[pin]].report = value;
        writeToTransport(this, [REPORT_ANALOG | pin, value]);
      }
    }
    /**
     * Set reporting on pin
     * @param {number} pin The pin to turn on/off reporting
     * @param {number} value Binary value to turn reporting on/off
     */

  }, {
    key: "reportDigitalPin",
    value: function reportDigitalPin(pin, value) {
      var port = pin >> 3;
      /* istanbul ignore else */

      if (value === 0 || value === 1) {
        this.pins[pin].report = value;
        writeToTransport(this, [REPORT_DIGITAL | port, value]);
      }
    }
    /**
     *
     *
     */

  }, {
    key: "pingRead",
    value: function pingRead(options, callback) {
      if (!this.pins[options.pin].supportedModes.includes(PING_READ)) {
        throw new Error("Please upload PingFirmata to the board");
      }

      var pin = options.pin,
          value = options.value,
          _options$pulseOut = options.pulseOut,
          pulseOut = _options$pulseOut === void 0 ? 0 : _options$pulseOut,
          _options$timeout = options.timeout,
          timeout = _options$timeout === void 0 ? 1000000 : _options$timeout;
      writeToTransport(this, [START_SYSEX$1, PING_READ, pin, value].concat(_toConsumableArray(Firmata.encode([pulseOut >> 24 & 0xFF, pulseOut >> 16 & 0xFF, pulseOut >> 8 & 0xFF, pulseOut & 0xFF])), _toConsumableArray(Firmata.encode([timeout >> 24 & 0xFF, timeout >> 16 & 0xFF, timeout >> 8 & 0xFF, timeout & 0xFF])), [END_SYSEX$1]));
      this.once("ping-read-".concat(pin), callback);
    }
    /**
     * Stepper functions to support version 2 of ConfigurableFirmata's asynchronous control of stepper motors
     * https://github.com/soundanalogous/ConfigurableFirmata
     */

    /**
     * Asks the arduino to configure a stepper motor with the given config to allow asynchronous control of the stepper
     * @param {object} opts Options:
     *    {number} deviceNum: Device number for the stepper (range 0-9)
     *    {number} type: One of this.STEPPER.TYPE.*
     *    {number} stepSize: One of this.STEPPER.STEP_SIZE.*
     *    {number} stepPin: Only used if STEPPER.TYPE.DRIVER
     *    {number} directionPin: Only used if STEPPER.TYPE.DRIVER
     *    {number} motorPin1: motor pin 1
     *    {number} motorPin2:  motor pin 2
     *    {number} [motorPin3]: Only required if type == this.STEPPER.TYPE.THREE_WIRE || this.STEPPER.TYPE.FOUR_WIRE
     *    {number} [motorPin4]: Only required if type == this.STEPPER.TYPE.FOUR_WIRE
     *    {number} [enablePin]: Enable pin
     *    {array} [invertPins]: Array of pins to invert
     */

  }, {
    key: "accelStepperConfig",
    value: function accelStepperConfig(options) {
      var deviceNum = options.deviceNum,
          invertPins = options.invertPins,
          motorPin1 = options.motorPin1,
          motorPin2 = options.motorPin2,
          motorPin3 = options.motorPin3,
          motorPin4 = options.motorPin4,
          enablePin = options.enablePin,
          _options$stepSize = options.stepSize,
          stepSize = _options$stepSize === void 0 ? this.STEPPER.STEP_SIZE.WHOLE : _options$stepSize,
          _options$type = options.type,
          type = _options$type === void 0 ? this.STEPPER.TYPE.FOUR_WIRE : _options$type;
      var data = [START_SYSEX$1, ACCELSTEPPER, 0x00, // STEPPER_CONFIG from firmware
      deviceNum];
      var iface = (type & 0x07) << 4 | (stepSize & 0x07) << 1;
      var pinsToInvert = 0x00;

      if (typeof enablePin !== "undefined") {
        iface = iface | 0x01;
      }

      data.push(iface);
      ["stepPin", "motorPin1", "directionPin", "motorPin2", "motorPin3", "motorPin4", "enablePin"].forEach(function (pin) {
        if (typeof options[pin] !== "undefined") {
          data.push(options[pin]);
        }
      });

      if (Array.isArray(invertPins)) {
        if (invertPins.includes(motorPin1)) {
          pinsToInvert |= 0x01;
        }

        if (invertPins.includes(motorPin2)) {
          pinsToInvert |= 0x02;
        }

        if (invertPins.includes(motorPin3)) {
          pinsToInvert |= 0x04;
        }

        if (invertPins.includes(motorPin4)) {
          pinsToInvert |= 0x08;
        }

        if (invertPins.includes(enablePin)) {
          pinsToInvert |= 0x10;
        }
      }

      data.push(pinsToInvert, END_SYSEX$1);
      writeToTransport(this, data);
    }
    /**
     * Asks the arduino to set the stepper position to 0
     * Note: This is not a move. We are setting the current position equal to zero
     * @param {number} deviceNum Device number for the stepper (range 0-9)
     */

  }, {
    key: "accelStepperZero",
    value: function accelStepperZero(deviceNum) {
      writeToTransport(this, [START_SYSEX$1, ACCELSTEPPER, 0x01, // STEPPER_ZERO from firmware
      deviceNum, END_SYSEX$1]);
    }
    /**
     * Asks the arduino to move a stepper a number of steps
     * (and optionally with and acceleration and deceleration)
     * speed is in units of steps/sec
     * @param {number} deviceNum Device number for the stepper (range 0-5)
     * @param {number} steps Number of steps to make
     */

  }, {
    key: "accelStepperStep",
    value: function accelStepperStep(deviceNum, steps, callback) {
      writeToTransport(this, [START_SYSEX$1, ACCELSTEPPER, 0x02, // STEPPER_STEP from firmware
      deviceNum].concat(_toConsumableArray(encode32BitSignedInteger(steps)), [END_SYSEX$1]));

      if (callback) {
        this.once("stepper-done-".concat(deviceNum), callback);
      }
    }
    /**
     * Asks the arduino to move a stepper to a specific location
     * @param {number} deviceNum Device number for the stepper (range 0-5)
     * @param {number} position Desired position
     */

  }, {
    key: "accelStepperTo",
    value: function accelStepperTo(deviceNum, position, callback) {
      writeToTransport(this, [START_SYSEX$1, ACCELSTEPPER, 0x03, // STEPPER_TO from firmware
      deviceNum].concat(_toConsumableArray(encode32BitSignedInteger(position)), [END_SYSEX$1]));

      if (callback) {
        this.once("stepper-done-".concat(deviceNum), callback);
      }
    }
    /**
     * Asks the arduino to enable/disable a stepper
     * @param {number} deviceNum Device number for the stepper (range 0-9)
     * @param {boolean} [enabled]
     */

  }, {
    key: "accelStepperEnable",
    value: function accelStepperEnable(deviceNum) {
      var enabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      writeToTransport(this, [START_SYSEX$1, ACCELSTEPPER, 0x04, // ENABLE from firmware
      deviceNum, enabled & 0x01, END_SYSEX$1]);
    }
    /**
     * Asks the arduino to stop a stepper
     * @param {number} deviceNum Device number for the stepper (range 0-9)
     */

  }, {
    key: "accelStepperStop",
    value: function accelStepperStop(deviceNum) {
      writeToTransport(this, [START_SYSEX$1, ACCELSTEPPER, 0x05, // STEPPER_STOP from firmware
      deviceNum, END_SYSEX$1]);
    }
    /**
     * Asks the arduino to report the position of a stepper
     * @param {number} deviceNum Device number for the stepper (range 0-9)
     */

  }, {
    key: "accelStepperReportPosition",
    value: function accelStepperReportPosition(deviceNum, callback) {
      writeToTransport(this, [START_SYSEX$1, ACCELSTEPPER, 0x06, // STEPPER_REPORT_POSITION from firmware
      deviceNum, END_SYSEX$1]);
      /* istanbul ignore else */

      if (callback) {
        this.once("stepper-position-".concat(deviceNum), callback);
      }
    }
    /**
     * Asks the arduino to set the acceleration for a stepper
     * @param {number} deviceNum Device number for the stepper (range 0-9)
     * @param {number} acceleration Desired acceleration in steps per sec^2
     */

  }, {
    key: "accelStepperAcceleration",
    value: function accelStepperAcceleration(deviceNum, acceleration) {
      writeToTransport(this, [START_SYSEX$1, ACCELSTEPPER, 0x08, // STEPPER_SET_ACCELERATION from firmware
      deviceNum].concat(_toConsumableArray(encodeCustomFloat(acceleration)), [END_SYSEX$1]));
    }
    /**
     * Asks the arduino to set the max speed for a stepper
     * @param {number} deviceNum Device number for the stepper (range 0-9)
     * @param {number} speed Desired speed or maxSpeed in steps per second
     * @param {function} [callback]
     */

  }, {
    key: "accelStepperSpeed",
    value: function accelStepperSpeed(deviceNum, speed) {
      writeToTransport(this, [START_SYSEX$1, ACCELSTEPPER, 0x09, // STEPPER_SET_SPEED from firmware
      deviceNum].concat(_toConsumableArray(encodeCustomFloat(speed)), [END_SYSEX$1]));
    }
    /**
     * Asks the arduino to configure a multiStepper group
     * @param {object} options Options:
     *    {number} groupNum: Group number for the multiSteppers (range 0-5)
     *    {number} devices: array of accelStepper device numbers in group
     **/

  }, {
    key: "multiStepperConfig",
    value: function multiStepperConfig(options) {
      writeToTransport(this, [START_SYSEX$1, ACCELSTEPPER, 0x20, // MULTISTEPPER_CONFIG from firmware
      options.groupNum].concat(_toConsumableArray(options.devices), [END_SYSEX$1]));
    }
    /**
     * Asks the arduino to move a multiStepper group
     * @param {number} groupNum Group number for the multiSteppers (range 0-5)
     * @param {number} positions array of absolute stepper positions
     **/

  }, {
    key: "multiStepperTo",
    value: function multiStepperTo(groupNum, positions, callback) {
      if (groupNum < 0 || groupNum > 5) {
        throw new RangeError("Invalid \"groupNum\": ".concat(groupNum, ". Expected \"groupNum\" between 0-5"));
      }

      writeToTransport(this, [START_SYSEX$1, ACCELSTEPPER, 0x21, // MULTISTEPPER_TO from firmware
      groupNum].concat(_toConsumableArray(positions.reduce(function (a, b) {
        return a.concat.apply(a, _toConsumableArray(encode32BitSignedInteger(b)));
      }, [])), [END_SYSEX$1]));
      /* istanbul ignore else */

      if (callback) {
        this.once("multi-stepper-done-".concat(groupNum), callback);
      }
    }
    /**
     * Asks the arduino to stop a multiStepper group
     * @param {number} groupNum: Group number for the multiSteppers (range 0-5)
     **/

  }, {
    key: "multiStepperStop",
    value: function multiStepperStop(groupNum) {
      /* istanbul ignore else */
      if (groupNum < 0 || groupNum > 5) {
        throw new RangeError("Invalid \"groupNum\": ".concat(groupNum, ". Expected \"groupNum\" between 0-5"));
      }

      writeToTransport(this, [START_SYSEX$1, ACCELSTEPPER, 0x23, // MULTISTEPPER_STOP from firmware
      groupNum, END_SYSEX$1]);
    }
    /**
     * Stepper functions to support AdvancedFirmata's asynchronous control of stepper motors
     * https://github.com/soundanalogous/AdvancedFirmata
     */

    /**
     * Asks the arduino to configure a stepper motor with the given config to allow asynchronous control of the stepper
     * @param {number} deviceNum Device number for the stepper (range 0-5, expects steppers to be setup in order from 0 to 5)
     * @param {number} type One of this.STEPPER.TYPE.*
     * @param {number} stepsPerRev Number of steps motor takes to make one revolution
     * @param {number} stepOrMotor1Pin If using EasyDriver type stepper driver, this is direction pin, otherwise it is motor 1 pin
     * @param {number} dirOrMotor2Pin If using EasyDriver type stepper driver, this is step pin, otherwise it is motor 2 pin
     * @param {number} [motorPin3] Only required if type == this.STEPPER.TYPE.FOUR_WIRE
     * @param {number} [motorPin4] Only required if type == this.STEPPER.TYPE.FOUR_WIRE
     */

  }, {
    key: "stepperConfig",
    value: function stepperConfig(deviceNum, type, stepsPerRev, dirOrMotor1Pin, dirOrMotor2Pin, motorPin3, motorPin4) {
      writeToTransport(this, [START_SYSEX$1, STEPPER, 0x00, // STEPPER_CONFIG from firmware
      deviceNum, type, stepsPerRev & 0x7F, stepsPerRev >> 7 & 0x7F, dirOrMotor1Pin, dirOrMotor2Pin].concat(_toConsumableArray(type === this.STEPPER.TYPE.FOUR_WIRE ? [motorPin3, motorPin4] : []), [END_SYSEX$1]));
    }
    /**
     * Asks the arduino to move a stepper a number of steps at a specific speed
     * (and optionally with and acceleration and deceleration)
     * speed is in units of .01 rad/sec
     * accel and decel are in units of .01 rad/sec^2
     * TODO: verify the units of speed, accel, and decel
     * @param {number} deviceNum Device number for the stepper (range 0-5)
     * @param {number} direction One of this.STEPPER.DIRECTION.*
     * @param {number} steps Number of steps to make
     * @param {number} speed
     * @param {number|function} accel Acceleration or if accel and decel are not used, then it can be the callback
     * @param {number} [decel]
     * @param {function} [callback]
     */

  }, {
    key: "stepperStep",
    value: function stepperStep(deviceNum, direction, steps, speed, accel, decel, callback) {
      if (typeof accel === "function") {
        callback = accel;
        accel = 0;
        decel = 0;
      }

      writeToTransport(this, [START_SYSEX$1, STEPPER, 0x01, // STEPPER_STEP from firmware
      deviceNum, direction, // one of this.STEPPER.DIRECTION.*
      steps & 0x7F, steps >> 7 & 0x7F, steps >> 14 & 0x7F, speed & 0x7F, speed >> 7 & 0x7F].concat(_toConsumableArray(accel > 0 || decel > 0 ? [accel & 0x7F, accel >> 7 & 0x7F, decel & 0x7F, decel >> 7 & 0x7F] : []), [END_SYSEX$1]));
      /* istanbul ignore else */

      if (callback) {
        this.once("stepper-done-".concat(deviceNum), callback);
      }
    }
    /**
     * Asks the Arduino to configure a hardware or serial port.
     * @param {object} options Options:
     *   portId {number} The serial port to use (HW_SERIAL1, HW_SERIAL2, HW_SERIAL3, SW_SERIAL0,
     *   SW_SERIAL1, SW_SERIAL2, SW_SERIAL3)
     *   baud {number} The baud rate of the serial port
     *   rxPin {number} [SW Serial only] The RX pin of the SoftwareSerial instance
     *   txPin {number} [SW Serial only] The TX pin of the SoftwareSerial instance
     */

  }, {
    key: "serialConfig",
    value: function serialConfig(options) {
      var portId;
      var baud;
      var rxPin;
      var txPin;
      /* istanbul ignore else */

      if (_typeof$1(options) === "object" && options !== null) {
        portId = options.portId;
        baud = options.baud;
        rxPin = options.rxPin;
        txPin = options.txPin;
      }
      /* istanbul ignore else */


      if (typeof portId === "undefined") {
        throw new Error("portId must be specified, see SERIAL_PORT_IDs for options.");
      }

      baud = baud || 57600;
      var data = [START_SYSEX$1, SERIAL_MESSAGE, SERIAL_CONFIG | portId, baud & 0x7F, baud >> 7 & 0x7F, baud >> 14 & 0x7F];

      if (portId > 7 && typeof rxPin !== "undefined" && typeof txPin !== "undefined") {
        data.push(rxPin, txPin);
      } else if (portId > 7) {
        throw new Error("Both RX and TX pins must be defined when using Software Serial.");
      }

      data.push(END_SYSEX$1);
      writeToTransport(this, data);
    }
    /**
     * Write an array of bytes to the specified serial port.
     * @param {number} portId The serial port to write to.
     * @param {Array} inBytes An array of bytes to write to the serial port.
     */

  }, {
    key: "serialWrite",
    value: function serialWrite(portId, bytes) {
      var data = [START_SYSEX$1, SERIAL_MESSAGE, SERIAL_WRITE | portId];

      for (var i = 0, len = bytes.length; i < len; i++) {
        data.push(bytes[i] & 0x7F, bytes[i] >> 7 & 0x7F);
      }

      data.push(END_SYSEX$1);
      /* istanbul ignore else */

      if (bytes.length > 0) {
        writeToTransport(this, data);
      }
    }
    /**
     * Start continuous reading of the specified serial port. The port is checked for data each
     * iteration of the main Arduino loop.
     * @param {number} portId The serial port to start reading continuously.
     * @param {number} maxBytesToRead [Optional] The maximum number of bytes to read per iteration.
     * If there are less bytes in the buffer, the lesser number of bytes will be returned. A value of 0
     * indicates that all available bytes in the buffer should be read.
     * @param {function} callback A function to call when we have received the bytes.
     */

  }, {
    key: "serialRead",
    value: function serialRead(portId, maxBytesToRead, callback) {
      var data = [START_SYSEX$1, SERIAL_MESSAGE, SERIAL_READ | portId, this.SERIAL_MODES.CONTINUOUS_READ];

      if (arguments.length === 2 && typeof maxBytesToRead === "function") {
        callback = maxBytesToRead;
      } else {
        data.push(maxBytesToRead & 0x7F, maxBytesToRead >> 7 & 0x7F);
      }

      data.push(END_SYSEX$1);
      writeToTransport(this, data);
      this.on("serial-data-".concat(portId), callback);
    }
    /**
     * Stop continuous reading of the specified serial port. This does not close the port, it stops
     * reading it but keeps the port open.
     * @param {number} portId The serial port to stop reading.
     */

  }, {
    key: "serialStop",
    value: function serialStop(portId) {
      writeToTransport(this, [START_SYSEX$1, SERIAL_MESSAGE, SERIAL_READ | portId, this.SERIAL_MODES.STOP_READING, END_SYSEX$1]);
      this.removeAllListeners("serial-data-".concat(portId));
    }
    /**
     * Close the specified serial port.
     * @param {number} portId The serial port to close.
     */

  }, {
    key: "serialClose",
    value: function serialClose(portId) {
      writeToTransport(this, [START_SYSEX$1, SERIAL_MESSAGE, SERIAL_CLOSE | portId, END_SYSEX$1]);
    }
    /**
     * Flush the specified serial port. For hardware serial, this waits for the transmission of
     * outgoing serial data to complete. For software serial, this removed any buffered incoming serial
     * data.
     * @param {number} portId The serial port to flush.
     */

  }, {
    key: "serialFlush",
    value: function serialFlush(portId) {
      writeToTransport(this, [START_SYSEX$1, SERIAL_MESSAGE, SERIAL_FLUSH | portId, END_SYSEX$1]);
    }
    /**
     * For SoftwareSerial only. Only a single SoftwareSerial instance can read data at a time.
     * Call this method to set this port to be the reading port in the case there are multiple
     * SoftwareSerial instances.
     * @param {number} portId The serial port to listen on.
     */

  }, {
    key: "serialListen",
    value: function serialListen(portId) {
      // listen only applies to software serial ports
      if (portId < 8) {
        return;
      }

      writeToTransport(this, [START_SYSEX$1, SERIAL_MESSAGE, SERIAL_LISTEN | portId, END_SYSEX$1]);
    }
    /**
     * Allow user code to handle arbitrary sysex responses
     *
     * @param {number} commandByte The commandByte must be associated with some message
     *                             that's expected from the slave device. The handler is
     *                             called with an array of _raw_ data from the slave. Data
     *                             decoding must be done within the handler itself.
     *
     *                             Use Firmata.decode(data) to extract useful values from
     *                             the incoming response data.
     *
     *  @param {function} handler Function which handles receipt of responses matching
     *                            commandByte.
     */

  }, {
    key: "sysexResponse",
    value: function sysexResponse(commandByte, handler) {
      if (Firmata.SYSEX_RESPONSE[commandByte]) {
        throw new Error("".concat(commandByte, " is not an available SYSEX_RESPONSE byte"));
      }

      Firmata.SYSEX_RESPONSE[commandByte] = function (board) {
        return handler.call(board, board.buffer.slice(2, -1));
      };

      return this;
    }
    /*
     * Allow user to remove sysex response handlers.
     *
     * @param {number} commandByte The commandByte to disassociate with a handler
     *                             previously set via `sysexResponse( commandByte, handler)`.
     */

  }, {
    key: "clearSysexResponse",
    value: function clearSysexResponse(commandByte) {
      /* istanbul ignore else */
      if (Firmata.SYSEX_RESPONSE[commandByte]) {
        delete Firmata.SYSEX_RESPONSE[commandByte];
      }
    }
    /**
     * Allow user code to send arbitrary sysex messages
     *
     * @param {Array} message The message array is expected to be all necessary bytes
     *                        between START_SYSEX and END_SYSEX (non-inclusive). It will
     *                        be assumed that the data in the message array is
     *                        already encoded as 2 7-bit bytes LSB first.
     *
     *
     */

  }, {
    key: "sysexCommand",
    value: function sysexCommand(message) {
      if (!message || !message.length) {
        throw new Error("Sysex Command cannot be empty");
      }

      writeToTransport(this, [START_SYSEX$1].concat(_toConsumableArray(message.slice()), [END_SYSEX$1]));
      return this;
    }
    /**
     * Send SYSTEM_RESET to arduino
     */

  }, {
    key: "reset",
    value: function reset() {
      writeToTransport(this, [SYSTEM_RESET]);
    }
    /**
     * Firmata.isAcceptablePort Determines if a `port` object (from SerialPort.list())
     * is a valid Arduino (or similar) device.
     * @return {Boolean} true if port can be connected to by Firmata
     */

  }], [{
    key: "isAcceptablePort",
    value: function isAcceptablePort(port) {
      var rport = /usb|acm|^com/i;

      if (rport.test(port.path)) {
        return true;
      }

      return false;
    }
    /**
     * Firmata.requestPort(callback) Request an acceptable port to connect to.
     * callback(error, port)
     */

  }, {
    key: "requestPort",
    value: function requestPort(callback) {
      if (!Transport || Transport && typeof Transport.list !== "function") {
        nextTick(function () {
          callback(new Error("No Transport provided"), null);
        });
        return;
      }

      Transport.list().then(function (ports) {
        var port = ports.find(function (port) {
          return Firmata.isAcceptablePort(port) && port;
        });

        if (port) {
          callback(null, port);
        } else {
          callback(new Error("No Acceptable Port Found"), null);
        }
      }).catch(function (error) {
        callback(error, null);
      });
    } // Expose encode/decode for custom sysex messages

  }, {
    key: "encode",
    value: function encode(data) {
      var encoded = [];
      var length = data.length;

      for (var i = 0; i < length; i++) {
        encoded.push(data[i] & 0x7F, data[i] >> 7 & 0x7F);
      }

      return encoded;
    }
  }, {
    key: "decode",
    value: function decode(data) {
      var decoded = [];

      if (data.length % 2 !== 0) {
        throw new Error("Firmata.decode(data) called with odd number of data bytes");
      }

      while (data.length) {
        var lsb = data.shift();
        var msb = data.shift();
        decoded.push(lsb | msb << 7);
      }

      return decoded;
    }
  }]);

  return Firmata;
}(EventEmitter); // Prototype Compatibility Aliases


Firmata$1.prototype.analogWrite = Firmata$1.prototype.pwmWrite; // Static Compatibility Aliases

Firmata$1.Board = Firmata$1;
Firmata$1.SYSEX_RESPONSE = SYSEX_RESPONSE;
Firmata$1.MIDI_RESPONSE = MIDI_RESPONSE; // The following are used internally.

/**
 * writeToTransport Due to the non-blocking behaviour of transport write
 *                   operations, dependent programs need a way to know
 *                   when all writes are complete. Every write increments
 *                   a `pending` value, when the write operation has
 *                   completed, the `pending` value is decremented.
 *
 * @param  {Board} board An active Board instance
 * @param  {Array} data  An array of 8 and 7 bit values that will be
 *                       wrapped in a Buffer and written to the transport.
 */

function writeToTransport(board, data) {
  board.pending++;
  board.transport.write(Buffer.from(data), function () {
    return board.pending--;
  });
}

function i2cRequest(board, bytes) {
  var active = i2cActive.get(board);

  if (!active) {
    throw new Error("I2C is not enabled for this board. To enable, call the i2cConfig() method.");
  } // Do not tamper with I2C_CONFIG messages


  if (bytes[1] === I2C_REQUEST) {
    var address = bytes[2]; // If no peripheral settings exist, make them.

    if (!active[address]) {
      active[address] = {
        stopTX: true
      };
    } // READ (8) or CONTINUOUS_READ (16)
    // value & 0b00011000


    if (bytes[3] & I2C_READ_MASK) {
      // Invert logic to accomodate default = true,
      // which is actually stopTX = 0
      bytes[3] |= Number(!active[address].stopTX) << 6;
    }
  }

  writeToTransport(board, bytes);
}

function encode32BitSignedInteger(data) {
  var negative = data < 0;
  data = Math.abs(data);
  var encoded = [data & 0x7F, data >> 7 & 0x7F, data >> 14 & 0x7F, data >> 21 & 0x7F, data >> 28 & 0x07];

  if (negative) {
    encoded[encoded.length - 1] |= 0x08;
  }

  return encoded;
}

function decode32BitSignedInteger(bytes) {
  var result = bytes[0] & 0x7F | (bytes[1] & 0x7F) << 7 | (bytes[2] & 0x7F) << 14 | (bytes[3] & 0x7F) << 21 | (bytes[4] & 0x07) << 28;

  if (bytes[4] >> 3) {
    result *= -1;
  }

  return result;
}

var MAX_SIGNIFICAND = Math.pow(2, 23);

function encodeCustomFloat(input) {
  var sign = input < 0 ? 1 : 0;
  input = Math.abs(input);
  var base10 = Math.floor(Math.log10(input)); // Shift decimal to start of significand

  var exponent = 0 + base10;
  input /= Math.pow(10, base10); // Shift decimal to the right as far as we can

  while (!Number.isInteger(input) && input < MAX_SIGNIFICAND) {
    exponent -= 1;
    input *= 10;
  } // Reduce precision if necessary


  while (input > MAX_SIGNIFICAND) {
    exponent += 1;
    input /= 10;
  }

  input = Math.trunc(input);
  exponent += 11;
  var encoded = [input & 0x7F, input >> 7 & 0x7F, input >> 14 & 0x7F, input >> 21 & 0x03 | (exponent & 0x0F) << 2 | (sign & 0x01) << 6];
  return encoded;
}

var bindTransport = function bindTransport(transport) {
  Transport = transport;
  return Firmata$1;
};

bindTransport.Firmata = Firmata$1;
var firmata = bindTransport;

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var inherits;

if (typeof Object.create === 'function') {
  inherits = function inherits(ctor, superCtor) {
    // implementation from standard node.js 'util' module
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  inherits = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;

    var TempCtor = function TempCtor() {};

    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

var inherits$1 = inherits;

var formatRegExp = /%[sdj%]/g;
function format(f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.

function deprecate(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global$1.process)) {
    return function () {
      return deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
}
var debugs = {};
var debugEnviron;
function debuglog(set) {
  if (isUndefined(debugEnviron)) debugEnviron = '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = 0;

      debugs[set] = function () {
        var msg = format.apply(null, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
}
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/

function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    _extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
} // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var length = output.reduce(function (prev, cur) {
    if (cur.indexOf('\n') >= 0) ;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}
function isBoolean(arg) {
  return typeof arg === 'boolean';
}
function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return arg == null;
}
function isNumber(arg) {
  return typeof arg === 'number';
}
function isString(arg) {
  return typeof arg === 'string';
}
function isSymbol(arg) {
  return _typeof(arg) === 'symbol';
}
function isUndefined(arg) {
  return arg === void 0;
}
function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
function isObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
}
function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}
function isFunction(arg) {
  return typeof arg === 'function';
}
function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || _typeof(arg) === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}
function isBuffer(maybeBuf) {
  return isBuffer$1(maybeBuf);
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


function log() {
  console.log('%s - %s', timestamp(), format.apply(null, arguments));
}
function _extend(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var util$1 = {
  inherits: inherits$1,
  _extend: _extend,
  log: log,
  isBuffer: isBuffer,
  isPrimitive: isPrimitive,
  isFunction: isFunction,
  isError: isError,
  isDate: isDate,
  isObject: isObject,
  isRegExp: isRegExp,
  isUndefined: isUndefined,
  isSymbol: isSymbol,
  isString: isString,
  isNumber: isNumber,
  isNullOrUndefined: isNullOrUndefined,
  isNull: isNull,
  isBoolean: isBoolean,
  isArray: isArray,
  inspect: inspect,
  deprecate: deprecate,
  format: format,
  debuglog: debuglog
};

var util$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  format: format,
  deprecate: deprecate,
  debuglog: debuglog,
  inspect: inspect,
  isArray: isArray,
  isBoolean: isBoolean,
  isNull: isNull,
  isNullOrUndefined: isNullOrUndefined,
  isNumber: isNumber,
  isString: isString,
  isSymbol: isSymbol,
  isUndefined: isUndefined,
  isRegExp: isRegExp,
  isObject: isObject,
  isDate: isDate,
  isError: isError,
  isFunction: isFunction,
  isPrimitive: isPrimitive,
  isBuffer: isBuffer,
  log: log,
  inherits: inherits$1,
  _extend: _extend,
  'default': util$1
});

function BufferList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

BufferList.prototype.push = function (v) {
  var entry = {
    data: v,
    next: null
  };
  if (this.length > 0) this.tail.next = entry;else this.head = entry;
  this.tail = entry;
  ++this.length;
};

BufferList.prototype.unshift = function (v) {
  var entry = {
    data: v,
    next: this.head
  };
  if (this.length === 0) this.tail = entry;
  this.head = entry;
  ++this.length;
};

BufferList.prototype.shift = function () {
  if (this.length === 0) return;
  var ret = this.head.data;
  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
  --this.length;
  return ret;
};

BufferList.prototype.clear = function () {
  this.head = this.tail = null;
  this.length = 0;
};

BufferList.prototype.join = function (s) {
  if (this.length === 0) return '';
  var p = this.head;
  var ret = '' + p.data;

  while (p = p.next) {
    ret += s + p.data;
  }

  return ret;
};

BufferList.prototype.concat = function (n) {
  if (this.length === 0) return Buffer.alloc(0);
  if (this.length === 1) return this.head.data;
  var ret = Buffer.allocUnsafe(n >>> 0);
  var p = this.head;
  var i = 0;

  while (p) {
    p.data.copy(ret, i);
    i += p.data.length;
    p = p.next;
  }

  return ret;
};

// Copyright Joyent, Inc. and other Node contributors.

var isBufferEncoding = Buffer.isEncoding || function (encoding) {
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
    case 'raw':
      return true;

    default:
      return false;
  }
};

function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
} // StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.


function StringDecoder(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);

  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;

    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;

    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;

    default:
      this.write = passThroughWrite;
      return;
  } // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).


  this.charBuffer = new Buffer(6); // Number of bytes received for the current incomplete multi-byte character.

  this.charReceived = 0; // Number of bytes expected for the current incomplete multi-byte character.

  this.charLength = 0;
}
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .

StringDecoder.prototype.write = function (buffer) {
  var charStr = ''; // if our last write ended with an incomplete multibyte character

  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = buffer.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : buffer.length; // add the new bytes to the char buffer

    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    } // remove bytes belonging to the current character from the buffer


    buffer = buffer.slice(available, buffer.length); // get the character that was split

    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding); // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character

    var charCode = charStr.charCodeAt(charStr.length - 1);

    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }

    this.charReceived = this.charLength = 0; // if there are no more bytes in this buffer, just emit our char

    if (buffer.length === 0) {
      return charStr;
    }

    break;
  } // determine and set charLength / charReceived


  this.detectIncompleteChar(buffer);
  var end = buffer.length;

  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);
  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end); // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character

  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  } // or just emit the charStr


  return charStr;
}; // detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.


StringDecoder.prototype.detectIncompleteChar = function (buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = buffer.length >= 3 ? 3 : buffer.length; // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.

  for (; i > 0; i--) {
    var c = buffer[buffer.length - i]; // See http://en.wikipedia.org/wiki/UTF-8#Description
    // 110XXXXX

    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    } // 1110XXXX


    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    } // 11110XXX


    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }

  this.charReceived = i;
};

StringDecoder.prototype.end = function (buffer) {
  var res = '';
  if (buffer && buffer.length) res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

Readable.ReadableState = ReadableState;
var debug$2 = debuglog('stream');
inherits$1(Readable, EventEmitter$1);

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
  }
}

function listenerCount(emitter, type) {
  return emitter.listeners(type).length;
}

function ReadableState(options, stream) {
  options = options || {}; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm; // cast to ints.

  this.highWaterMark = ~~this.highWaterMark; // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()

  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.

  this.ranOut = false; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}
function Readable(options) {
  if (!(this instanceof Readable)) return new Readable(options);
  this._readableState = new ReadableState(options, this); // legacy

  this.readable = true;
  if (options && typeof options.read === 'function') this._read = options.read;
  EventEmitter$1.call(this);
} // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.

Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;

    if (encoding !== state.encoding) {
      chunk = Buffer.from(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);

  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error('stream.unshift() after end event');

      stream.emit('error', _e);
    } else {
      var skipAdd;

      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) state.reading = false; // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode

      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
          if (state.needReadable) emitReadable(stream);
        }
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
} // if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.


function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
} // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
}; // Don't raise the hwm > 8MB


var MAX_HWM = 0x800000;

function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }

  return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.


function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;

  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  } // If we're asking for more than the current hwm, then raise the hwm.


  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n; // Don't have enough

  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }

  return state.length;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug$2('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug$2('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable;
  debug$2('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug$2('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state.ended || state.reading) {
    doRead = false;
    debug$2('reading or ended', doRead);
  } else if (doRead) {
    debug$2('do read');
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.

    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);
  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;

  if (!isBuffer$1(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }

  return er;
}

function onEofChunk(stream, state) {
  if (state.ended) return;

  if (state.decoder) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true; // emit 'readable' now to make sure it gets picked up.

  emitReadable(stream);
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;

  if (!state.emittedReadable) {
    debug$2('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug$2('emit readable');
  stream.emit('readable');
  flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;

  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug$2('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;else len = state.length;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  debug$2('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = !pipeOpts || pipeOpts.end !== false;
  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable) {
    debug$2('onunpipe');

    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug$2('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;

  function cleanup() {
    debug$2('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);
    cleanedUp = true; // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  } // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.


  var increasedAwaitDrain = false;
  src.on('data', ondata);

  function ondata(chunk) {
    debug$2('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);

    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug$2('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }

      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug$2('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (listenerCount(dest, 'error') === 0) dest.emit('error', er);
  } // Make sure our error handler is attached before userland ones.


  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug$2('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug$2('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    debug$2('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug$2('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;

    if (state.awaitDrain === 0 && src.listeners('data').length) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var _i = 0; _i < len; _i++) {
      dests[_i].emit('unpipe', this);
    }

    return this;
  } // try to find the right one.


  var i = indexOf(state.pipes, dest);
  if (i === -1) return this;
  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = EventEmitter$1.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;

    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;

      if (!state.reading) {
        nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug$2('readable nexttick read 0');
  self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.


Readable.prototype.resume = function () {
  var state = this._readableState;

  if (!state.flowing) {
    debug$2('resume');
    state.flowing = true;
    resume(this, state);
  }

  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug$2('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug$2('call pause flowing=%j', this._readableState.flowing);

  if (false !== this._readableState.flowing) {
    debug$2('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug$2('flow', state.flowing);

  while (state.flowing && stream.read() !== null) {}
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;
  var self = this;
  stream.on('end', function () {
    debug$2('wrapped end');

    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });
  stream.on('data', function (chunk) {
    debug$2('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;
    var ret = self.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function (ev) {
    stream.on(ev, self.emit.bind(self, ev));
  }); // when we try to consume some more bytes, simply unpause the
  // underlying stream.

  self._read = function (n) {
    debug$2('wrapped _read', n);

    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
}; // exposed for testing purposes only.


Readable._fromList = fromList; // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.

function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }
  return ret;
} // Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.


function fromListPartial(n, list, hasStrings) {
  var ret;

  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }

  return ret;
} // Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.


function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;

  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;

    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }

      break;
    }

    ++c;
  }

  list.length -= c;
  return ret;
} // Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.


function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;

  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;

    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }

      break;
    }

    ++c;
  }

  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState; // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.

  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}

// A bit simpler than readable streams.
Writable.WritableState = WritableState;
inherits$1(Writable, EventEmitter$1);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

function WritableState(options, stream) {
  Object.defineProperty(this, 'buffer', {
    get: deprecate(function () {
      return this.getBuffer();
    }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
  });
  options = options || {}; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm; // cast to ints.

  this.highWaterMark = ~~this.highWaterMark;
  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function writableStateGetBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};
function Writable(options) {
  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);
  this._writableState = new WritableState(options, this); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
  }

  EventEmitter$1.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.

Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end'); // TODO: defer error events consistently everywhere, not just the cb

  stream.emit('error', er);
  nextTick(cb, er);
} // If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.


function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false; // Always throw error if a null is written
  // if we are not in object mode then throw
  // if it is not a buffer, string, or undefined.

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }

  if (er) {
    stream.emit('error', er);
    nextTick(cb, er);
    valid = false;
  }

  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;
  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }

  return chunk;
} // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.


function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);
  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);

    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }

    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) nextTick(cb, er);else cb(er);
  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      nextTick(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;

    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state.pendingcb++;
    state.lastBufferedRequest = null;

    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);

  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
  stream.writable = false;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream


function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;

    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }

    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}

inherits$1(Duplex, Readable);
var keys = Object.keys(Writable.prototype);

for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}
function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  if (options && options.readable === false) this.readable = false;
  if (options && options.writable === false) this.writable = false;
  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
  this.once('end', onend);
} // the no-half-open enforcer

function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

// a transform stream is a readable/writable stream where you do
inherits$1(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;
  var cb = ts.writecb;
  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));
  ts.writechunk = null;
  ts.writecb = null;
  if (data !== null && data !== undefined) stream.push(data);
  cb(er);
  var rs = stream._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}
function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = new TransformState(this); // when the writable side finishes, then flush out anything remaining.

  var stream = this; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er) {
      done(stream, er);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('Not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er) {
  if (er) return stream.emit('error', er); // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  var ws = stream._writableState;
  var ts = stream._transformState;
  if (ws.length) throw new Error('Calling transform done when ws.length != 0');
  if (ts.transforming) throw new Error('Calling transform done when still transforming');
  return stream.push(null);
}

inherits$1(PassThrough, Transform);
function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

inherits$1(Stream, EventEmitter$1);
Stream.Readable = Readable;
Stream.Writable = Writable;
Stream.Duplex = Duplex;
Stream.Transform = Transform;
Stream.PassThrough = PassThrough; // Backwards-compat with node 0.4.x

Stream.Stream = Stream;
// part of this class) is overridden in the Readable class.

function Stream() {
  EventEmitter$1.call(this);
}

Stream.prototype.pipe = function (dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain); // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.

  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;

  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;
    dest.end();
  }

  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;
    if (typeof dest.destroy === 'function') dest.destroy();
  } // don't leave dangling pipes when there are errors.


  function onerror(er) {
    cleanup();

    if (EventEmitter$1.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror); // remove all the event listeners that were added.

  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);
    source.removeListener('end', onend);
    source.removeListener('close', onclose);
    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);
    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);
    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);
  dest.on('close', cleanup);
  dest.emit('pipe', source); // Allow for unix-like usage: A.pipe(B).pipe(C)

  return dest;
};

var stream$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Stream,
  Readable: Readable,
  Writable: Writable,
  Duplex: Duplex,
  Transform: Transform,
  PassThrough: PassThrough,
  Stream: Stream
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(stream$1);

var require$$1 = /*@__PURE__*/getAugmentedNamespace(util$2);

var browser$1 = {exports: {}};

var s$1 = 1000;
var m$1 = s$1 * 60;
var h$1 = m$1 * 60;
var d$1 = h$1 * 24;
var w$1 = d$1 * 7;
var y$1 = d$1 * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms$1 = function ms(val, options) {
  options = options || {};

  var type = _typeof$1(val);

  if (type === 'string' && val.length > 0) {
    return parse$1(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong$1(val) : fmtShort$1(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse$1(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y$1;

    case 'weeks':
    case 'week':
    case 'w':
      return n * w$1;

    case 'days':
    case 'day':
    case 'd':
      return n * d$1;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h$1;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m$1;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s$1;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort$1(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d$1) {
    return Math.round(ms / d$1) + 'd';
  }

  if (msAbs >= h$1) {
    return Math.round(ms / h$1) + 'h';
  }

  if (msAbs >= m$1) {
    return Math.round(ms / m$1) + 'm';
  }

  if (msAbs >= s$1) {
    return Math.round(ms / s$1) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong$1(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d$1) {
    return plural$1(ms, msAbs, d$1, 'day');
  }

  if (msAbs >= h$1) {
    return plural$1(ms, msAbs, h$1, 'hour');
  }

  if (msAbs >= m$1) {
    return plural$1(ms, msAbs, m$1, 'minute');
  }

  if (msAbs >= s$1) {
    return plural$1(ms, msAbs, s$1, 'second');
  }

  return ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural$1(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup$1(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = ms$1;
  createDebug.destroy = destroy;
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;
    var enableOverride = null;
    var namespacesCache;
    var enabledCache;

    function debug() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Disabled?
      if (!debug.enabled) {
        return;
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return '%';
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.useColors = createDebug.useColors();
    debug.color = createDebug.selectColor(namespace);
    debug.extend = extend;
    debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

    Object.defineProperty(debug, 'enabled', {
      enumerable: true,
      configurable: false,
      get: function get() {
        if (enableOverride !== null) {
          return enableOverride;
        }

        if (namespacesCache !== createDebug.namespaces) {
          namespacesCache = createDebug.namespaces;
          enabledCache = createDebug.enabled(namespace);
        }

        return enabledCache;
      },
      set: function set(v) {
        enableOverride = v;
      }
    }); // Env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    return debug;
  }

  function extend(namespace, delimiter) {
    var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.namespaces = namespaces;
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }
  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */


  function disable() {
    var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
      return '-' + namespace;
    }))).join(',');
    createDebug.enable('');
    return namespaces;
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */


  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }
  /**
  * XXX DO NOT USE. This is a temporary stub function.
  * XXX It WILL be removed in the next major release.
  */


  function destroy() {
    console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

var common$1 = setup$1;

(function (module, exports) {
  /**
   * This is the web browser implementation of `debug()`.
   */
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = localstorage();

  exports.destroy = function () {
    var warned = false;
    return function () {
      if (!warned) {
        warned = true;
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
      }
    };
  }();
  /**
   * Colors.
   */


  exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */
  // eslint-disable-next-line complexity

  function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
      return true;
    } // Internet Explorer and Edge do not support colors.


    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return false;
    } // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */


  function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

    if (!this.useColors) {
      return;
    }

    var c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into

    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function (match) {
      if (match === '%%') {
        return;
      }

      index++;

      if (match === '%c') {
        // We only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }
  /**
   * Invokes `console.debug()` when available.
   * No-op when `console.debug` is not a "function".
   * If `console.debug` is not available, falls back
   * to `console.log`.
   *
   * @api public
   */


  exports.log = console.debug || console.log || function () {};
  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */


  function save(namespaces) {
    try {
      if (namespaces) {
        exports.storage.setItem('debug', namespaces);
      } else {
        exports.storage.removeItem('debug');
      }
    } catch (error) {// Swallow
      // XXX (@Qix-) should we be logging these?
    }
  }
  /**
   * Load `namespaces`.
   *
   * @return {String} returns the previously persisted debug modes
   * @api private
   */


  function load() {
    var r;

    try {
      r = exports.storage.getItem('debug');
    } catch (error) {// Swallow
      // XXX (@Qix-) should we be logging these?
    } // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


    if (!r && typeof process !== 'undefined' && 'env' in process) {
      r = process.env.DEBUG;
    }

    return r;
  }
  /**
   * Localstorage attempts to return the localstorage.
   *
   * This is necessary because safari throws
   * when a user disables cookies/localstorage
   * and you attempt to access it.
   *
   * @return {LocalStorage}
   * @api private
   */


  function localstorage() {
    try {
      // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
      // The Browser also has localStorage in the global context.
      return localStorage;
    } catch (error) {// Swallow
      // XXX (@Qix-) should we be logging these?
    }
  }

  module.exports = common$1(exports);
  var formatters = module.exports.formatters;
  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */

  formatters.j = function (v) {
    try {
      return JSON.stringify(v);
    } catch (error) {
      return '[UnexpectedJSONParseError]: ' + error.message;
    }
  };
})(browser$1, browser$1.exports);

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var stream = require$$0;
var util = require$$1;
var debug$1 = browser$1.exports('serialport/stream'); //  VALIDATION

var DATABITS = Object.freeze([5, 6, 7, 8]);
var STOPBITS = Object.freeze([1, 1.5, 2]);
var PARITY = Object.freeze(['none', 'even', 'mark', 'odd', 'space']);
var FLOWCONTROLS = Object.freeze(['xon', 'xoff', 'xany', 'rtscts']);
var defaultSettings = Object.freeze({
  autoOpen: true,
  endOnClose: false,
  baudRate: 9600,
  dataBits: 8,
  hupcl: true,
  lock: true,
  parity: 'none',
  rtscts: false,
  stopBits: 1,
  xany: false,
  xoff: false,
  xon: false,
  highWaterMark: 64 * 1024
});
var defaultSetFlags = Object.freeze({
  brk: false,
  cts: false,
  dtr: true,
  dts: false,
  rts: true
});

function allocNewReadPool(poolSize) {
  var pool = Buffer.allocUnsafe(poolSize);
  pool.used = 0;
  return pool;
}
/**
 * A callback called with an error or null.
 * @typedef {function} errorCallback
 * @param {?error} error
 */

/**
 * A callback called with an error or an object with the modem line values (cts, dsr, dcd).
 * @typedef {function} modemBitsCallback
 * @param {?error} error
 * @param {?object} status
 * @param {boolean} [status.cts=false]
 * @param {boolean} [status.dsr=false]
 * @param {boolean} [status.dcd=false]
 */

/**
 * @typedef {Object} openOptions
 * @property {boolean} [autoOpen=true] Automatically opens the port on `nextTick`.
 * @property {number=} [baudRate=9600] The baud rate of the port to be opened. This should match one of the commonly available baud rates, such as 110, 300, 1200, 2400, 4800, 9600, 14400, 19200, 38400, 57600, or 115200. Custom rates are supported best effort per platform. The device connected to the serial port is not guaranteed to support the requested baud rate, even if the port itself supports that baud rate.
 * @property {number} [dataBits=8] Must be one of these: 8, 7, 6, or 5.
 * @property {number} [highWaterMark=65536] The size of the read and write buffers defaults to 64k.
 * @property {boolean} [lock=true] Prevent other processes from opening the port. Windows does not currently support `false`.
 * @property {number} [stopBits=1] Must be one of these: 1 or 2.
 * @property {string} [parity=none] Must be one of these: 'none', 'even', 'mark', 'odd', 'space'.
 * @property {boolean} [rtscts=false] flow control setting
 * @property {boolean} [xon=false] flow control setting
 * @property {boolean} [xoff=false] flow control setting
 * @property {boolean} [xany=false] flow control setting
 * @property {object=} bindingOptions sets binding-specific options
 * @property {Binding=} binding The hardware access binding. `Bindings` are how Node-Serialport talks to the underlying system. By default we auto detect Windows (`WindowsBinding`), Linux (`LinuxBinding`) and OS X (`DarwinBinding`) and load the appropriate module for your system.
 * @property {number} [bindingOptions.vmin=1] see [`man termios`](http://linux.die.net/man/3/termios) LinuxBinding and DarwinBinding
 * @property {number} [bindingOptions.vtime=0] see [`man termios`](http://linux.die.net/man/3/termios) LinuxBinding and DarwinBinding
 */

/**
 * Create a new serial port object for the `path`. In the case of invalid arguments or invalid options, when constructing a new SerialPort it will throw an error. The port will open automatically by default, which is the equivalent of calling `port.open(openCallback)` in the next tick. You can disable this by setting the option `autoOpen` to `false`.
 * @class SerialPort
 * @param {string} path - The system path of the serial port you want to open. For example, `/dev/tty.XXX` on Mac/Linux, or `COM1` on Windows.
 * @param {openOptions=} options - Port configuration options
 * @param {errorCallback=} openCallback - Called after a connection is opened. If this is not provided and an error occurs, it will be emitted on the port's `error` event. The callback will NOT be called if `autoOpen` is set to `false` in the `openOptions` as the open will not be performed.
 * @property {number} baudRate The port's baudRate. Use `.update` to change it. Read-only.
 * @property {object} binding The binding object backing the port. Read-only.
 * @property {boolean} isOpen `true` if the port is open, `false` otherwise. Read-only. (`since 5.0.0`)
 * @property {string} path The system path or name of the serial port. Read-only.
 * @throws {TypeError} When given invalid arguments, a `TypeError` will be thrown.
 * @emits open
 * @emits data
 * @emits close
 * @emits error
 * @alias module:serialport
 */


function SerialPort(path, options, openCallback) {
  if (!(this instanceof SerialPort)) {
    return new SerialPort(path, options, openCallback);
  }

  if (options instanceof Function) {
    openCallback = options;
    options = {};
  }

  var settings = _objectSpread$1(_objectSpread$1({}, defaultSettings), options);

  stream.Duplex.call(this, {
    highWaterMark: settings.highWaterMark
  });
  var Binding = settings.binding || SerialPort.Binding;

  if (!Binding) {
    throw new TypeError('"Bindings" is invalid pass it as `options.binding` or set it on `SerialPort.Binding`');
  }

  if (!path) {
    throw new TypeError("\"path\" is not defined: ".concat(path));
  }

  if (settings.baudrate) {
    throw new TypeError("\"baudrate\" is an unknown option, did you mean \"baudRate\"?");
  }

  if (typeof settings.baudRate !== 'number') {
    throw new TypeError("\"baudRate\" must be a number: ".concat(settings.baudRate));
  }

  if (DATABITS.indexOf(settings.dataBits) === -1) {
    throw new TypeError("\"databits\" is invalid: ".concat(settings.dataBits));
  }

  if (STOPBITS.indexOf(settings.stopBits) === -1) {
    throw new TypeError("\"stopbits\" is invalid: ".concat(settings.stopbits));
  }

  if (PARITY.indexOf(settings.parity) === -1) {
    throw new TypeError("\"parity\" is invalid: ".concat(settings.parity));
  }

  FLOWCONTROLS.forEach(function (control) {
    if (typeof settings[control] !== 'boolean') {
      throw new TypeError("\"".concat(control, "\" is not boolean: ").concat(settings[control]));
    }
  });
  var binding = new Binding({
    bindingOptions: settings.bindingOptions
  });
  Object.defineProperties(this, {
    binding: {
      enumerable: true,
      value: binding
    },
    path: {
      enumerable: true,
      value: path
    },
    settings: {
      enumerable: true,
      value: settings
    }
  });
  this.opening = false;
  this.closing = false;
  this._pool = allocNewReadPool(this.settings.highWaterMark);
  this._kMinPoolSpace = 128;

  if (this.settings.autoOpen) {
    this.open(openCallback);
  }
}

util.inherits(SerialPort, stream.Duplex);
Object.defineProperties(SerialPort.prototype, {
  isOpen: {
    enumerable: true,
    get: function get() {
      return this.binding.isOpen && !this.closing;
    }
  },
  baudRate: {
    enumerable: true,
    get: function get() {
      return this.settings.baudRate;
    }
  }
});
/**
 * The `error` event's callback is called with an error object whenever there is an error.
 * @event error
 */

SerialPort.prototype._error = function (error, callback) {
  if (callback) {
    callback.call(this, error);
  } else {
    this.emit('error', error);
  }
};

SerialPort.prototype._asyncError = function (error, callback) {
  var _this = this;

  nextTick(function () {
    return _this._error(error, callback);
  });
};
/**
 * The `open` event's callback is called with no arguments when the port is opened and ready for writing. This happens if you have the constructor open immediately (which opens in the next tick) or if you open the port manually with `open()`. See [Useage/Opening a Port](#opening-a-port) for more information.
 * @event open
 */

/**
 * Opens a connection to the given serial port.
 * @param {errorCallback=} openCallback - Called after a connection is opened. If this is not provided and an error occurs, it will be emitted on the port's `error` event.
 * @emits open
 * @returns {undefined}
 */


SerialPort.prototype.open = function (openCallback) {
  var _this2 = this;

  if (this.isOpen) {
    return this._asyncError(new Error('Port is already open'), openCallback);
  }

  if (this.opening) {
    return this._asyncError(new Error('Port is opening'), openCallback);
  }

  this.opening = true;
  debug$1('opening', "path: ".concat(this.path));
  this.binding.open(this.path, this.settings).then(function () {
    debug$1('opened', "path: ".concat(_this2.path));
    _this2.opening = false;

    _this2.emit('open');

    if (openCallback) {
      openCallback.call(_this2, null);
    }
  }, function (err) {
    _this2.opening = false;
    debug$1('Binding #open had an error', err);

    _this2._error(err, openCallback);
  });
};
/**
 * Changes the baud rate for an open port. Throws if you provide a bad argument. Emits an error or calls the callback if the baud rate isn't supported.
 * @param {object=} options Only supports `baudRate`.
 * @param {number=} [options.baudRate] The baud rate of the port to be opened. This should match one of the commonly available baud rates, such as 110, 300, 1200, 2400, 4800, 9600, 14400, 19200, 38400, 57600, or 115200. Custom rates are supported best effort per platform. The device connected to the serial port is not guaranteed to support the requested baud rate, even if the port itself supports that baud rate.
 * @param {errorCallback=} [callback] Called once the port's baud rate changes. If `.update` is called without a callback, and there is an error, an error event is emitted.
 * @returns {undefined}
 */


SerialPort.prototype.update = function (options, callback) {
  var _this3 = this;

  if (_typeof$1(options) !== 'object') {
    throw TypeError('"options" is not an object');
  }

  if (!this.isOpen) {
    debug$1('update attempted, but port is not open');
    return this._asyncError(new Error('Port is not open'), callback);
  }

  var settings = _objectSpread$1(_objectSpread$1({}, defaultSettings), options);

  this.settings.baudRate = settings.baudRate;
  debug$1('update', "baudRate: ".concat(settings.baudRate));
  this.binding.update(this.settings).then(function () {
    debug$1('binding.update', 'finished');

    if (callback) {
      callback.call(_this3, null);
    }
  }, function (err) {
    debug$1('binding.update', 'error', err);
    return _this3._error(err, callback);
  });
};
/**
 * Writes data to the given serial port. Buffers written data if the port is not open.

The write operation is non-blocking. When it returns, data might still not have been written to the serial port. See `drain()`.

Some devices, like the Arduino, reset when you open a connection to them. In such cases, immediately writing to the device will cause lost data as they wont be ready to receive the data. This is often worked around by having the Arduino send a "ready" byte that your Node program waits for before writing. You can also often get away with waiting around 400ms.

If a port is disconnected during a write, the write will error in addition to the `close` event.

From the [stream docs](https://nodejs.org/api/stream.html#stream_writable_write_chunk_encoding_callback) write errors don't always provide the error in the callback, sometimes they use the error event.
> If an error occurs, the callback may or may not be called with the error as its first argument. To reliably detect write errors, add a listener for the 'error' event.

In addition to the usual `stream.write` arguments (`String` and `Buffer`), `write()` can accept arrays of bytes (positive numbers under 256) which is passed to `Buffer.from([])` for conversion. This extra functionality is pretty sweet.
 * @method SerialPort.prototype.write
 * @param  {(string|array|buffer)} data Accepts a [`Buffer`](http://nodejs.org/api/buffer.html) object, or a type that is accepted by the `Buffer` constructor (e.g. an array of bytes or a string).
 * @param  {string=} encoding The encoding, if chunk is a string. Defaults to `'utf8'`. Also accepts `'ascii'`, `'base64'`, `'binary'`, and `'hex'` See [Buffers and Character Encodings](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings) for all available options.
 * @param  {function=} callback Called once the write operation finishes. Data may not yet be flushed to the underlying port. No arguments.
 * @returns {boolean} `false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.
 * @since 5.0.0
 */


var superWrite = SerialPort.prototype.write;

SerialPort.prototype.write = function (data, encoding, callback) {
  if (Array.isArray(data)) {
    data = Buffer.from(data);
  }

  return superWrite.call(this, data, encoding, callback);
};

SerialPort.prototype._write = function (data, encoding, callback) {
  var _this4 = this;

  if (!this.isOpen) {
    return this.once('open', function afterOpenWrite() {
      this._write(data, encoding, callback);
    });
  }

  debug$1('_write', "".concat(data.length, " bytes of data"));
  this.binding.write(data).then(function () {
    debug$1('binding.write', 'write finished');
    callback(null);
  }, function (err) {
    debug$1('binding.write', 'error', err);

    if (!err.canceled) {
      _this4._disconnected(err);
    }

    callback(err);
  });
};

SerialPort.prototype._writev = function (data, callback) {
  debug$1('_writev', "".concat(data.length, " chunks of data"));
  var dataV = data.map(function (write) {
    return write.chunk;
  });

  this._write(Buffer.concat(dataV), null, callback);
};
/**
 * Request a number of bytes from the SerialPort. The `read()` method pulls some data out of the internal buffer and returns it. If no data is available to be read, null is returned. By default, the data is returned as a `Buffer` object unless an encoding has been specified using the `.setEncoding()` method.
 * @method SerialPort.prototype.read
 * @param {number=} size Specify how many bytes of data to return, if available
 * @returns {(string|Buffer|null)} The data from internal buffers
 * @since 5.0.0
 */

/**
 * Listening for the `data` event puts the port in flowing mode. Data is emitted as soon as it's received. Data is a `Buffer` object with a varying amount of data in it. The `readLine` parser converts the data into string lines. See the [parsers](https://serialport.io/docs/api-parsers-overview) section for more information on parsers, and the [Node.js stream documentation](https://nodejs.org/api/stream.html#stream_event_data) for more information on the data event.
 * @event data
 */


SerialPort.prototype._read = function (bytesToRead) {
  var _this5 = this;

  if (!this.isOpen) {
    debug$1('_read', 'queueing _read for after open');
    this.once('open', function () {
      _this5._read(bytesToRead);
    });
    return;
  }

  if (!this._pool || this._pool.length - this._pool.used < this._kMinPoolSpace) {
    debug$1('_read', 'discarding the read buffer pool because it is below kMinPoolSpace');
    this._pool = allocNewReadPool(this.settings.highWaterMark);
  } // Grab another reference to the pool in the case that while we're
  // in the thread pool another read() finishes up the pool, and
  // allocates a new one.


  var pool = this._pool; // Read the smaller of rest of the pool or however many bytes we want

  var toRead = Math.min(pool.length - pool.used, bytesToRead);
  var start = pool.used; // the actual read.

  debug$1('_read', "reading", {
    start: start,
    toRead: toRead
  });
  this.binding.read(pool, start, toRead).then(function (_ref) {
    var bytesRead = _ref.bytesRead;
    debug$1('binding.read', "finished", {
      bytesRead: bytesRead
    }); // zero bytes means read means we've hit EOF? Maybe this should be an error

    if (bytesRead === 0) {
      debug$1('binding.read', 'Zero bytes read closing readable stream');

      _this5.push(null);

      return;
    }

    pool.used += bytesRead;

    _this5.push(pool.slice(start, start + bytesRead));
  }, function (err) {
    debug$1('binding.read', "error", err);

    if (!err.canceled) {
      _this5._disconnected(err);
    }

    _this5._read(bytesToRead); // prime to read more once we're reconnected

  });
};

SerialPort.prototype._disconnected = function (err) {
  if (!this.isOpen) {
    debug$1('disconnected aborted because already closed', err);
    return;
  }

  debug$1('disconnected', err);
  err.disconnected = true;
  this.close(null, err);
};
/**
 * The `close` event's callback is called with no arguments when the port is closed. In the case of a disconnect it will be called with a Disconnect Error object (`err.disconnected == true`). In the event of a close error (unlikely), an error event is triggered.
 * @event close
 */

/**
 * Closes an open connection.
 *
 * If there are in progress writes when the port is closed the writes will error.
 * @param {errorCallback} callback Called once a connection is closed.
 * @param {Error} disconnectError used internally to propagate a disconnect error
 * @emits close
 * @returns {undefined}
 */


SerialPort.prototype.close = function (callback, disconnectError) {
  var _this6 = this;

  disconnectError = disconnectError || null;

  if (!this.isOpen) {
    debug$1('close attempted, but port is not open');
    return this._asyncError(new Error('Port is not open'), callback);
  }

  this.closing = true;
  debug$1('#close');
  this.binding.close().then(function () {
    _this6.closing = false;
    debug$1('binding.close', 'finished');

    _this6.emit('close', disconnectError);

    if (_this6.settings.endOnClose) {
      _this6.emit('end');
    }

    if (callback) {
      callback.call(_this6, disconnectError);
    }
  }, function (err) {
    _this6.closing = false;
    debug$1('binding.close', 'had an error', err);
    return _this6._error(err, callback);
  });
};
/**
 * Set control flags on an open port. Uses [`SetCommMask`](https://msdn.microsoft.com/en-us/library/windows/desktop/aa363257(v=vs.85).aspx) for Windows and [`ioctl`](http://linux.die.net/man/4/tty_ioctl) for OS X and Linux.
 * @param {object=} options All options are operating system default when the port is opened. Every flag is set on each call to the provided or default values. If options isn't provided default options is used.
 * @param {Boolean} [options.brk=false] sets the brk flag
 * @param {Boolean} [options.cts=false] sets the cts flag
 * @param {Boolean} [options.dsr=false] sets the dsr flag
 * @param {Boolean} [options.dtr=true] sets the dtr flag
 * @param {Boolean} [options.rts=true] sets the rts flag
 * @param {errorCallback=} callback Called once the port's flags have been set.
 * @since 5.0.0
 * @returns {undefined}
 */


SerialPort.prototype.set = function (options, callback) {
  var _this7 = this;

  if (_typeof$1(options) !== 'object') {
    throw TypeError('"options" is not an object');
  }

  if (!this.isOpen) {
    debug$1('set attempted, but port is not open');
    return this._asyncError(new Error('Port is not open'), callback);
  }

  var settings = _objectSpread$1(_objectSpread$1({}, defaultSetFlags), options);

  debug$1('#set', settings);
  this.binding.set(settings).then(function () {
    debug$1('binding.set', 'finished');

    if (callback) {
      callback.call(_this7, null);
    }
  }, function (err) {
    debug$1('binding.set', 'had an error', err);
    return _this7._error(err, callback);
  });
};
/**
 * Returns the control flags (CTS, DSR, DCD) on the open port.
 * Uses [`GetCommModemStatus`](https://msdn.microsoft.com/en-us/library/windows/desktop/aa363258(v=vs.85).aspx) for Windows and [`ioctl`](http://linux.die.net/man/4/tty_ioctl) for mac and linux.
 * @param {modemBitsCallback=} callback Called once the modem bits are retrieved.
 * @returns {undefined}
 */


SerialPort.prototype.get = function (callback) {
  var _this8 = this;

  if (!this.isOpen) {
    debug$1('get attempted, but port is not open');
    return this._asyncError(new Error('Port is not open'), callback);
  }

  debug$1('#get');
  this.binding.get().then(function (status) {
    debug$1('binding.get', 'finished');

    if (callback) {
      callback.call(_this8, null, status);
    }
  }, function (err) {
    debug$1('binding.get', 'had an error', err);
    return _this8._error(err, callback);
  });
};
/**
 * Flush discards data received but not read, and written but not transmitted by the operating system. For more technical details, see [`tcflush(fd, TCIOFLUSH)`](http://linux.die.net/man/3/tcflush) for Mac/Linux and [`FlushFileBuffers`](http://msdn.microsoft.com/en-us/library/windows/desktop/aa364439) for Windows.
 * @param  {errorCallback=} callback Called once the flush operation finishes.
 * @returns {undefined}
 */


SerialPort.prototype.flush = function (callback) {
  var _this9 = this;

  if (!this.isOpen) {
    debug$1('flush attempted, but port is not open');
    return this._asyncError(new Error('Port is not open'), callback);
  }

  debug$1('#flush');
  this.binding.flush().then(function () {
    debug$1('binding.flush', 'finished');

    if (callback) {
      callback.call(_this9, null);
    }
  }, function (err) {
    debug$1('binding.flush', 'had an error', err);
    return _this9._error(err, callback);
  });
};
/**
 * Waits until all output data is transmitted to the serial port. After any pending write has completed it calls [`tcdrain()`](http://linux.die.net/man/3/tcdrain) or [FlushFileBuffers()](https://msdn.microsoft.com/en-us/library/windows/desktop/aa364439(v=vs.85).aspx) to ensure it has been written to the device.
 * @param {errorCallback=} callback Called once the drain operation returns.
 * @returns {undefined}
 * @example
Write the `data` and wait until it has finished transmitting to the target serial port before calling the callback. This will queue until the port is open and writes are finished.

```js
function writeAndDrain (data, callback) {
  port.write(data);
  port.drain(callback);
}
```
 */


SerialPort.prototype.drain = function (callback) {
  var _this10 = this;

  debug$1('drain');

  if (!this.isOpen) {
    debug$1('drain queuing on port open');
    return this.once('open', function () {
      _this10.drain(callback);
    });
  }

  this.binding.drain().then(function () {
    debug$1('binding.drain', 'finished');

    if (callback) {
      callback.call(_this10, null);
    }
  }, function (err) {
    debug$1('binding.drain', 'had an error', err);
    return _this10._error(err, callback);
  });
};
/**
 * The `pause()` method causes a stream in flowing mode to stop emitting 'data' events, switching out of flowing mode. Any data that becomes available remains in the internal buffer.
 * @method SerialPort.prototype.pause
 * @see resume
 * @since 5.0.0
 * @returns `this`
 */

/**
 * The `resume()` method causes an explicitly paused, `Readable` stream to resume emitting 'data' events, switching the stream into flowing mode.
 * @method SerialPort.prototype.resume
 * @see pause
 * @since 5.0.0
 * @returns `this`
 */

/**
 * Retrieves a list of available serial ports with metadata. Only the `path` is guaranteed. If unavailable the other fields will be undefined. The `path` is either the path or an identifier (eg `COM1`) used to open the SerialPort.
 *
 * We make an effort to identify the hardware attached and have consistent results between systems. Linux and OS X are mostly consistent. Windows relies on 3rd party device drivers for the information and is unable to guarantee the information. On windows If you have a USB connected device can we provide a serial number otherwise it will be `undefined`. The `pnpId` and `locationId` are not the same or present on all systems. The examples below were run with the same Arduino Uno.
 * @type {function}
 * @returns {Promise} Resolves with the list of available serial ports.
 * @example
```js
// OSX example port
{
  path: '/dev/tty.usbmodem1421',
  manufacturer: 'Arduino (www.arduino.cc)',
  serialNumber: '752303138333518011C1',
  pnpId: undefined,
  locationId: '14500000',
  productId: '0043',
  vendorId: '2341'
}

// Linux example port
{
  path: '/dev/ttyACM0',
  manufacturer: 'Arduino (www.arduino.cc)',
  serialNumber: '752303138333518011C1',
  pnpId: 'usb-Arduino__www.arduino.cc__0043_752303138333518011C1-if00',
  locationId: undefined,
  productId: '0043',
  vendorId: '2341'
}

// Windows example port
{
  path: 'COM3',
  manufacturer: 'Arduino LLC (www.arduino.cc)',
  serialNumber: '752303138333518011C1',
  pnpId: 'USB\\VID_2341&PID_0043\\752303138333518011C1',
  locationId: 'Port_#0003.Hub_#0001',
  productId: '0043',
  vendorId: '2341'
}
```

```js
var SerialPort = require('serialport');

// promise approach
SerialPort.list()
  .then(ports) {...});
  .catch(err) {...});
```
 */


SerialPort.list = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(callback) {
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            debug$1('.list');

            if (SerialPort.Binding) {
              _context.next = 3;
              break;
            }

            throw new TypeError('No Binding set on `SerialPort.Binding`');

          case 3:
            if (!callback) {
              _context.next = 5;
              break;
            }

            throw new TypeError('SerialPort.list no longer takes a callback and only returns a promise');

          case 5:
            return _context.abrupt("return", SerialPort.Binding.list());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var lib$2 = SerialPort;

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var browser = {exports: {}};

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function ms(val, options) {
  options = options || {};

  var type = _typeof$1(val);

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'weeks':
    case 'week':
    case 'w':
      return n * w;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }

  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }

  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }

  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }

  return ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = ms;
  createDebug.destroy = destroy;
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;
    var enableOverride = null;
    var namespacesCache;
    var enabledCache;

    function debug() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Disabled?
      if (!debug.enabled) {
        return;
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return '%';
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.useColors = createDebug.useColors();
    debug.color = createDebug.selectColor(namespace);
    debug.extend = extend;
    debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

    Object.defineProperty(debug, 'enabled', {
      enumerable: true,
      configurable: false,
      get: function get() {
        if (enableOverride !== null) {
          return enableOverride;
        }

        if (namespacesCache !== createDebug.namespaces) {
          namespacesCache = createDebug.namespaces;
          enabledCache = createDebug.enabled(namespace);
        }

        return enabledCache;
      },
      set: function set(v) {
        enableOverride = v;
      }
    }); // Env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    return debug;
  }

  function extend(namespace, delimiter) {
    var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.namespaces = namespaces;
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }
  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */


  function disable() {
    var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
      return '-' + namespace;
    }))).join(',');
    createDebug.enable('');
    return namespaces;
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */


  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }
  /**
  * XXX DO NOT USE. This is a temporary stub function.
  * XXX It WILL be removed in the next major release.
  */


  function destroy() {
    console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

var common = setup;

(function (module, exports) {
  /**
   * This is the web browser implementation of `debug()`.
   */
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = localstorage();

  exports.destroy = function () {
    var warned = false;
    return function () {
      if (!warned) {
        warned = true;
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
      }
    };
  }();
  /**
   * Colors.
   */


  exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */
  // eslint-disable-next-line complexity

  function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
      return true;
    } // Internet Explorer and Edge do not support colors.


    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return false;
    } // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */


  function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

    if (!this.useColors) {
      return;
    }

    var c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into

    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function (match) {
      if (match === '%%') {
        return;
      }

      index++;

      if (match === '%c') {
        // We only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }
  /**
   * Invokes `console.debug()` when available.
   * No-op when `console.debug` is not a "function".
   * If `console.debug` is not available, falls back
   * to `console.log`.
   *
   * @api public
   */


  exports.log = console.debug || console.log || function () {};
  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */


  function save(namespaces) {
    try {
      if (namespaces) {
        exports.storage.setItem('debug', namespaces);
      } else {
        exports.storage.removeItem('debug');
      }
    } catch (error) {// Swallow
      // XXX (@Qix-) should we be logging these?
    }
  }
  /**
   * Load `namespaces`.
   *
   * @return {String} returns the previously persisted debug modes
   * @api private
   */


  function load() {
    var r;

    try {
      r = exports.storage.getItem('debug');
    } catch (error) {// Swallow
      // XXX (@Qix-) should we be logging these?
    } // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


    if (!r && typeof process !== 'undefined' && 'env' in process) {
      r = process.env.DEBUG;
    }

    return r;
  }
  /**
   * Localstorage attempts to return the localstorage.
   *
   * This is necessary because safari throws
   * when a user disables cookies/localstorage
   * and you attempt to access it.
   *
   * @return {LocalStorage}
   * @api private
   */


  function localstorage() {
    try {
      // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
      // The Browser also has localStorage in the global context.
      return localStorage;
    } catch (error) {// Swallow
      // XXX (@Qix-) should we be logging these?
    }
  }

  module.exports = common(exports);
  var formatters = module.exports.formatters;
  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */

  formatters.j = function (v) {
    try {
      return JSON.stringify(v);
    } catch (error) {
      return '[UnexpectedJSONParseError]: ' + error.message;
    }
  };
})(browser, browser.exports);

var debug = browser.exports('serialport/binding-abstract');
/**
 * @name Binding
 * @type {AbstractBinding}
 * @since 5.0.0
 * @description The `Binding` is how Node-SerialPort talks to the underlying system. By default, we auto detect Windows, Linux and OS X, and load the appropriate module for your system. You can assign `SerialPort.Binding` to any binding you like. Find more by searching at [npm](https://npmjs.org/).
  Prevent auto loading the default bindings by requiring SerialPort with:
  ```js
  var SerialPort = require('@serialport/stream');
  SerialPort.Binding = MyBindingClass;
  ```
 */

/**
 * You never have to use `Binding` objects directly. SerialPort uses them to access the underlying hardware. This documentation is geared towards people who are making bindings for different platforms. This class can be inherited from to get type checking for each method.
 * @class AbstractBinding
 * @param {object} options options for the binding
 * @property {boolean} isOpen Required property. `true` if the port is open, `false` otherwise. Should be read-only.
 * @throws {TypeError} When given invalid arguments, a `TypeError` is thrown.
 * @since 5.0.0
 */

var AbstractBinding$1 = /*#__PURE__*/function () {
  function AbstractBinding() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AbstractBinding);

    if (_typeof$1(opt) !== 'object') {
      throw new TypeError('"options" is not an object');
    }
  }
  /**
   * Opens a connection to the serial port referenced by the path.
   * @param {string} path the path or com port to open
   * @param {openOptions} options openOptions for the serialport
   * @returns {Promise} Resolves after the port is opened and configured.
   * @rejects {TypeError} When given invalid arguments, a `TypeError` is rejected.
   */


  _createClass(AbstractBinding, [{
    key: "open",
    value: function () {
      var _open = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(path, options) {
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (path) {
                  _context.next = 2;
                  break;
                }

                throw new TypeError('"path" is not a valid port');

              case 2:
                if (!(_typeof$1(options) !== 'object')) {
                  _context.next = 4;
                  break;
                }

                throw new TypeError('"options" is not an object');

              case 4:
                debug('open');

                if (!this.isOpen) {
                  _context.next = 7;
                  break;
                }

                throw new Error('Already open');

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function open(_x, _x2) {
        return _open.apply(this, arguments);
      }

      return open;
    }()
    /**
     * Closes an open connection
     * @returns {Promise} Resolves once the connection is closed.
     * @rejects {TypeError} When given invalid arguments, a `TypeError` is rejected.
     */

  }, {
    key: "close",
    value: function () {
      var _close = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                debug('close');

                if (this.isOpen) {
                  _context2.next = 3;
                  break;
                }

                throw new Error('Port is not open');

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }()
    /**
     * Request a number of bytes from the SerialPort. This function is similar to Node's [`fs.read`](http://nodejs.org/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback) except it will always return at least one byte.
    The in progress reads must error when the port is closed with an error object that has the property `canceled` equal to `true`. Any other error will cause a disconnection.
      * @param {buffer} buffer Accepts a [`Buffer`](http://nodejs.org/api/buffer.html) object.
     * @param {integer} offset The offset in the buffer to start writing at.
     * @param {integer} length Specifies the maximum number of bytes to read.
     * @returns {Promise} Resolves with the number of bytes read after a read operation.
     * @rejects {TypeError} When given invalid arguments, a `TypeError` is rejected.
     */

  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(buffer, offset, length) {
        return regenerator.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (isBuffer$1(buffer)) {
                  _context3.next = 2;
                  break;
                }

                throw new TypeError('"buffer" is not a Buffer');

              case 2:
                if (!(typeof offset !== 'number' || isNaN(offset))) {
                  _context3.next = 4;
                  break;
                }

                throw new TypeError("\"offset\" is not an integer got \"".concat(isNaN(offset) ? 'NaN' : _typeof$1(offset), "\""));

              case 4:
                if (!(typeof length !== 'number' || isNaN(length))) {
                  _context3.next = 6;
                  break;
                }

                throw new TypeError("\"length\" is not an integer got \"".concat(isNaN(length) ? 'NaN' : _typeof$1(length), "\""));

              case 6:
                debug('read');

                if (!(buffer.length < offset + length)) {
                  _context3.next = 9;
                  break;
                }

                throw new Error('buffer is too small');

              case 9:
                if (this.isOpen) {
                  _context3.next = 11;
                  break;
                }

                throw new Error('Port is not open');

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function read(_x3, _x4, _x5) {
        return _read.apply(this, arguments);
      }

      return read;
    }()
    /**
     * Write bytes to the SerialPort. Only called when there is no pending write operation.
    The in progress writes must error when the port is closed with an error object that has the property `canceled` equal to `true`. Any other error will cause a disconnection.
      * @param {buffer} buffer - Accepts a [`Buffer`](http://nodejs.org/api/buffer.html) object.
     * @returns {Promise} Resolves after the data is passed to the operating system for writing.
     * @rejects {TypeError} When given invalid arguments, a `TypeError` is rejected.
     */

  }, {
    key: "write",
    value: function () {
      var _write = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(buffer) {
        return regenerator.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (isBuffer$1(buffer)) {
                  _context4.next = 2;
                  break;
                }

                throw new TypeError('"buffer" is not a Buffer');

              case 2:
                debug('write', buffer.length, 'bytes');

                if (this.isOpen) {
                  _context4.next = 6;
                  break;
                }

                debug('write', 'error port is not open');
                throw new Error('Port is not open');

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function write(_x6) {
        return _write.apply(this, arguments);
      }

      return write;
    }()
    /**
     * Changes connection settings on an open port. Only `baudRate` is supported.
     * @param {object=} options Only supports `baudRate`.
     * @param {number=} [options.baudRate] If provided a baud rate that the bindings do not support, it should reject.
     * @returns {Promise} Resolves once the port's baud rate changes.
     * @rejects {TypeError} When given invalid arguments, a `TypeError` is rejected.
     */

  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(options) {
        return regenerator.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(_typeof$1(options) !== 'object')) {
                  _context5.next = 2;
                  break;
                }

                throw TypeError('"options" is not an object');

              case 2:
                if (!(typeof options.baudRate !== 'number')) {
                  _context5.next = 4;
                  break;
                }

                throw new TypeError('"options.baudRate" is not a number');

              case 4:
                debug('update');

                if (this.isOpen) {
                  _context5.next = 7;
                  break;
                }

                throw new Error('Port is not open');

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function update(_x7) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
    /**
     * Set control flags on an open port.
     * @param {object=} options All options are operating system default when the port is opened. Every flag is set on each call to the provided or default values. All options are always provided.
     * @param {Boolean} [options.brk=false] flag for brk
     * @param {Boolean} [options.cts=false] flag for cts
     * @param {Boolean} [options.dsr=false] flag for dsr
     * @param {Boolean} [options.dtr=true] flag for dtr
     * @param {Boolean} [options.rts=true] flag for rts
     * @param {Boolean} [options.lowLatency=false] flag for lowLatency mode on Linux
     * @returns {Promise} Resolves once the port's flags are set.
     * @rejects {TypeError} When given invalid arguments, a `TypeError` is rejected.
     */

  }, {
    key: "set",
    value: function () {
      var _set = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee6(options) {
        return regenerator.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(_typeof$1(options) !== 'object')) {
                  _context6.next = 2;
                  break;
                }

                throw new TypeError('"options" is not an object');

              case 2:
                debug('set');

                if (this.isOpen) {
                  _context6.next = 5;
                  break;
                }

                throw new Error('Port is not open');

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function set(_x8) {
        return _set.apply(this, arguments);
      }

      return set;
    }()
    /**
     * Get the control flags (CTS, DSR, DCD) on the open port.
     * @returns {Promise} Resolves with the retrieved flags.
     * @rejects {TypeError} When given invalid arguments, a `TypeError` is rejected.
     */

  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee7() {
        return regenerator.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                debug('get');

                if (this.isOpen) {
                  _context7.next = 3;
                  break;
                }

                throw new Error('Port is not open');

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }()
    /**
     * Get the OS reported baud rate for the open port.
     * Used mostly for debugging custom baud rates.
     * @returns {Promise} Resolves with the current baud rate.
     * @rejects {TypeError} When given invalid arguments, a `TypeError` is rejected.
     */

  }, {
    key: "getBaudRate",
    value: function () {
      var _getBaudRate = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee8() {
        return regenerator.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                debug('getbaudRate');

                if (this.isOpen) {
                  _context8.next = 3;
                  break;
                }

                throw new Error('Port is not open');

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getBaudRate() {
        return _getBaudRate.apply(this, arguments);
      }

      return getBaudRate;
    }()
    /**
     * Flush (discard) data received but not read, and written but not transmitted.
     * @returns {Promise} Resolves once the flush operation finishes.
     * @rejects {TypeError} When given invalid arguments, a `TypeError` is rejected.
     */

  }, {
    key: "flush",
    value: function () {
      var _flush = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee9() {
        return regenerator.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                debug('flush');

                if (this.isOpen) {
                  _context9.next = 3;
                  break;
                }

                throw new Error('Port is not open');

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function flush() {
        return _flush.apply(this, arguments);
      }

      return flush;
    }()
    /**
     * Drain waits until all output data is transmitted to the serial port. An in progress write should be completed before this returns.
     * @returns {Promise} Resolves once the drain operation finishes.
     * @rejects {TypeError} When given invalid arguments, a `TypeError` is rejected.
     */

  }, {
    key: "drain",
    value: function () {
      var _drain = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee10() {
        return regenerator.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                debug('drain');

                if (this.isOpen) {
                  _context10.next = 3;
                  break;
                }

                throw new Error('Port is not open');

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function drain() {
        return _drain.apply(this, arguments);
      }

      return drain;
    }()
  }], [{
    key: "list",
    value:
    /**
     * Retrieves a list of available serial ports with metadata. The `path` must be guaranteed, and all other fields should be undefined if unavailable. The `path` is either the path or an identifier (eg `COM1`) used to open the serialport.
     * @returns {Promise} resolves to an array of port [info objects](#module_serialport--SerialPort.list).
     */
    function () {
      var _list = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee11() {
        return regenerator.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                debug('list');

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function list() {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }]);

  return AbstractBinding;
}();

var lib$1 = AbstractBinding$1;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AbstractBinding = lib$1;

function cancelError(message) {
  var err = new Error(message);
  err.canceled = true;
  return err;
}

function attachUsbId(dst, dstKey, id) {
  if (typeof id === 'number') {
    dst[dstKey] = ('000' + id.toString(16)).substr(-4);
  }
}

var lib = /*#__PURE__*/function (_AbstractBinding) {
  _inherits(WebSerialBinding, _AbstractBinding);

  var _super = _createSuper$2(WebSerialBinding);

  function WebSerialBinding(opts) {
    var _this;

    _classCallCheck(this, WebSerialBinding);

    _this = _super.call(this);
    _this.port = null;
    _this.writeOperation = null;
    _this.isOpen = false;
    _this.cancelRead = null; // callback to cancel in-progress read operation

    _this.unread = null; // unread bytes; set if last read exceeded size of destination buffer

    return _this;
  }

  _createClass(WebSerialBinding, [{
    key: "open",
    value: function () {
      var _open = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(path, opts) {
        var port;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                port = this.port = path;
                _context.next = 3;
                return _get(_getPrototypeOf(WebSerialBinding.prototype), "open", this).call(this, path, opts);

              case 3:
                if (!this.isOpen) {
                  _context.next = 5;
                  break;
                }

                throw new Error('Open: binding is already open');

              case 5:
                _context.next = 7;
                return port.open(this._getOpenOptions(opts));

              case 7:
                port.openOpt = _objectSpread({}, opts);
                this.isOpen = true;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function open(_x, _x2) {
        return _open.apply(this, arguments);
      }

      return open;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
        var port;
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                port = this.port;

                if (port) {
                  _context2.next = 3;
                  break;
                }

                throw new Error('already closed');

              case 3:
                _context2.next = 5;
                return _get(_getPrototypeOf(WebSerialBinding.prototype), "close", this).call(this);

              case 5:
                delete port.openOpt;
                this.isOpen = false;

                if (!this.cancelRead) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 10;
                return this.cancelRead();

              case 10:
                _context2.next = 12;
                return port.close();

              case 12:
                delete this.port;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }()
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(buffer, offset, length) {
        var _this2 = this;

        var reader, op;
        return regenerator.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                op = _get(_getPrototypeOf(WebSerialBinding.prototype), "read", this).call(this, buffer, offset, length).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
                  var src, _yield$reader$read, value, done, bytesRead;

                  return regenerator.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (_this2.isOpen) {
                            _context3.next = 2;
                            break;
                          }

                          throw cancelError('Read cancelled');

                        case 2:
                          src = _this2.unread;

                          if (src) {
                            _context3.next = 19;
                            break;
                          }

                          reader = _this2.port.readable.getReader();
                          _context3.prev = 5;
                          _context3.next = 8;
                          return reader.read();

                        case 8:
                          _yield$reader$read = _context3.sent;
                          value = _yield$reader$read.value;
                          done = _yield$reader$read.done;

                          if (!done) {
                            _context3.next = 13;
                            break;
                          }

                          return _context3.abrupt("return", {
                            bytesRead: 0,
                            buffer: buffer
                          });

                        case 13:
                          src = value;

                        case 14:
                          _context3.prev = 14;
                          reader.releaseLock();
                          reader = null;
                          _this2.cancelRead = null;
                          return _context3.finish(14);

                        case 19:
                          bytesRead = Math.min(src.length, length);
                          buffer.set(src.subarray(0, bytesRead), offset);
                          _this2.unread = bytesRead < src.length ? src.subarray(bytesRead) : null;
                          return _context3.abrupt("return", {
                            bytesRead: bytesRead,
                            buffer: buffer
                          });

                        case 23:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, null, [[5,, 14, 19]]);
                })));

                this.cancelRead = function () {
                  if (reader) {
                    reader.cancel();
                  }

                  return op;
                };

                return _context4.abrupt("return", op);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function read(_x3, _x4, _x5) {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "write",
    value: function () {
      var _write = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee6(buffer) {
        var _this3 = this;

        return regenerator.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!this.writeOperation) {
                  _context6.next = 2;
                  break;
                }

                throw new Error('Overlapping writes are not supported and should be queued by the serialport object');

              case 2:
                this.writeOperation = _get(_getPrototypeOf(WebSerialBinding.prototype), "write", this).call(this, buffer).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5() {
                  var writer;
                  return regenerator.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          if (_this3.isOpen) {
                            _context5.next = 2;
                            break;
                          }

                          throw new Error('Write cancelled');

                        case 2:
                          writer = _this3.port.writable.getWriter();
                          _context5.prev = 3;
                          _context5.next = 6;
                          return writer.write(buffer);

                        case 6:
                          _context5.prev = 6;
                          writer.releaseLock();
                          _this3.writeOperation = null;
                          return _context5.finish(6);

                        case 10:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, null, [[3,, 6, 10]]);
                })));
                return _context6.abrupt("return", this.writeOperation);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function write(_x6) {
        return _write.apply(this, arguments);
      }

      return write;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee7(opts) {
        return regenerator.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                throw new Error("update() is not supported");

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function update(_x7) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "set",
    value: function () {
      var _set = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee8(signals) {
        return regenerator.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _get(_getPrototypeOf(WebSerialBinding.prototype), "set", this).call(this, signals);

              case 2:
                _context8.next = 4;
                return this.port.setSignals({
                  dataTerminalReady: signals.dtr,
                  requestToSend: signals.rts,
                  break: signals.brk
                });

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function set(_x8) {
        return _set.apply(this, arguments);
      }

      return set;
    }()
  }, {
    key: "get",
    value: function () {
      var _get2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee9() {
        var signals;
        return regenerator.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _get(_getPrototypeOf(WebSerialBinding.prototype), "get", this).call(this);

              case 2:
                _context9.next = 4;
                return this.port.getSignals();

              case 4:
                signals = _context9.sent;
                return _context9.abrupt("return", {
                  cts: signals.clearToSend,
                  dsr: signals.dataSetReady,
                  dcd: signals.dataCarrierDetect
                });

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function get() {
        return _get2.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "getBaudRate",
    value: function () {
      var _getBaudRate = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee10() {
        return regenerator.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _get(_getPrototypeOf(WebSerialBinding.prototype), "getBaudRate", this).call(this);

              case 2:
                return _context10.abrupt("return", {
                  baudRate: this.port.openOpt.baudRate
                });

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getBaudRate() {
        return _getBaudRate.apply(this, arguments);
      }

      return getBaudRate;
    }()
  }, {
    key: "flush",
    value: function () {
      var _flush = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee11() {
        return regenerator.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return _get(_getPrototypeOf(WebSerialBinding.prototype), "flush", this).call(this);

              case 2:
                console.log("flush!"); // TODO

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function flush() {
        return _flush.apply(this, arguments);
      }

      return flush;
    }()
  }, {
    key: "drain",
    value: function () {
      var _drain = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee12() {
        return regenerator.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return _get(_getPrototypeOf(WebSerialBinding.prototype), "drain", this).call(this);

              case 2:
                _context12.next = 4;
                return this.writeOperation;

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function drain() {
        return _drain.apply(this, arguments);
      }

      return drain;
    }()
  }, {
    key: "_getOpenOptions",
    value: function _getOpenOptions(opts) {
      if (opts.xon || opts.xoff || opts.xany) {
        throw new Error("unsupported flow control setting");
      } // Generally the range of supported values by serialport
      // is a superset of those supported by Web Serial. We'll
      // pass the options values to Web Serial and allow it
      // to perform the validation.


      return {
        baudRate: opts.baudRate,
        // Valid serialport values: 5, 6, 7, 8
        // Valid Web Serial values: 7, 8
        dataBits: opts.dataBits,
        // Valid serialport values: 1, 2
        // Valid Web Serial values: 1, 2
        stopBits: opts.stopBits,
        // Valid serialport values: none, even, mark, odd, space
        // Valid Web Serial values: none, even, odd
        parity: opts.parity,
        flowControl: opts.rtscts ? 'hardware' : 'none'
      };
    }
  }], [{
    key: "list",
    value: function list() {
      return navigator.serial.getPorts().then(function (portList) {
        return portList.map(function (path) {
          var entry = {
            path: path
          };
          var portInfo = path.getInfo();
          attachUsbId(entry, 'productId', portInfo.usbProductId);
          attachUsbId(entry, 'vendorId', portInfo.usbVendorId);
          return entry;
        });
      });
    }
  }]);

  return WebSerialBinding;
}(AbstractBinding);

// ajfisher/node-pixel: https://github.com/ajfisher/node-pixel

var START_SYSEX = 0xF0;
var STRING_DATA = 0x71;
var END_SYSEX = 0xF7;
var FIRMATA_7BIT_MASK = 0x7F;
var PIXEL_SHIFT_WRAP = 0x40;
var PIXEL_COMMAND = 0x51;
var PIXEL_OFF = 0x00;
var PIXEL_CONFIG = 0x01;
var PIXEL_SHOW = 0x02;
var PIXEL_SET_PIXEL = 0x03;
var PIXEL_SET_STRIP = 0x04;
var PIXEL_SHIFT = 0x05;
var SHIFT_FORWARD = 0x20;
var SHIFT_BACKWARD = 0x00;
var MAX_STRIPS = 8;
var PIN_DEFAULT = 6; // use this if not supplied

var I2C_DEFAULT = 0x42;
var GAMMA_DEFAULT = 1.0; // set to 1.0 in 0.9, 2.8 in 0.10

var COLOR_ORDER = {
  GRB: 0x00,
  RGB: 0x01,
  BRG: 0x02
};
var nodePixelConstants = {
  START_SYSEX: START_SYSEX,
  STRING_DATA: STRING_DATA,
  END_SYSEX: END_SYSEX,
  FIRMATA_7BIT_MASK: FIRMATA_7BIT_MASK,
  PIXEL_SHIFT_WRAP: PIXEL_SHIFT_WRAP,
  PIXEL_COMMAND: PIXEL_COMMAND,
  PIXEL_OFF: PIXEL_OFF,
  PIXEL_CONFIG: PIXEL_CONFIG,
  PIXEL_SHOW: PIXEL_SHOW,
  PIXEL_SET_PIXEL: PIXEL_SET_PIXEL,
  PIXEL_SET_STRIP: PIXEL_SET_STRIP,
  PIXEL_SHIFT: PIXEL_SHIFT,
  SHIFT_FORWARD: SHIFT_FORWARD,
  SHIFT_BACKWARD: SHIFT_BACKWARD,
  MAX_STRIPS: MAX_STRIPS,
  PIN_DEFAULT: PIN_DEFAULT,
  I2C_DEFAULT: I2C_DEFAULT,
  GAMMA_DEFAULT: GAMMA_DEFAULT,
  COLOR_ORDER: COLOR_ORDER
};

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Return a Promise which will reject after the delay time passed.
 * @param {number} delay - waiting time to reject in milliseconds
 * @returns {Promise<string>} Promise which will reject with reason after the delay.
 */

var timeoutReject = function timeoutReject(delay) {
  return new Promise(function (_, reject) {
    return setTimeout(function () {
      return reject("timeout ".concat(delay, "ms"));
    }, delay);
  });
}; // Setup transport of Firmata.


lib$2.Binding = lib;
var Firmata = firmata(lib$2); // eslint-disable-next-line prefer-const

var neoPixelGammaTable = function (steps, gamma) {
  var gammaTable = new Array(steps);

  for (var i = 0; i < steps; i++) {
    gammaTable[i] = Math.floor(Math.pow(i / 255.0, gamma) * 255 + 0.5);
  }

  return gammaTable;
}(256, 2.8);

var neoPixelColorValue = function neoPixelColorValue(colors, gammaTable) {
  // colors are assumed to be an array of [r, g, b] bytes
  // colorValue returns a packed value able to be pushed to firmata rather than
  // text values.
  // if gammaTable is passed then it should use the supplied gamma
  // correction table to correct the received value.
  // before sending, account for gamma correction.
  var gammaCorrectedColor = Object.assign({}, colors);
  gammaCorrectedColor[0] = gammaTable[gammaCorrectedColor[0]];
  gammaCorrectedColor[1] = gammaTable[gammaCorrectedColor[1]];
  gammaCorrectedColor[2] = gammaTable[gammaCorrectedColor[2]];
  return (gammaCorrectedColor[0] << 16) + (gammaCorrectedColor[1] << 8) + gammaCorrectedColor[2];
};

var FirmataBoard = /*#__PURE__*/function (_EventEmitter) {
  _inherits(FirmataBoard, _EventEmitter);

  var _super = _createSuper$1(FirmataBoard);

  /**
   * Construct a firmata board object.
   * @param {Runtime} runtime - the Scratch runtime
   */
  function FirmataBoard(runtime) {
    var _this;

    _classCallCheck(this, FirmataBoard);

    _this = _super.call(this);
    _this.name = 'FirmataBoard';
    /**
     * The Scratch runtime to register event listeners.
     * @type {Runtime}
     * @private
     */

    _this.runtime = runtime;
    /**
     * State of this board
     * @type {string}
     */

    _this.state = 'disconnect';
    /**
     * The Firmata board for reading/writing peripheral data.
     * @type {Firmata}
     * @private
     */

    _this.firmata = null;
    /**
     * The serial port for transporting of Firmata.
     */

    _this.port = null;
    /**
     * ID of the extension which requested to open port.
     */

    _this.extensionId = null;
    /**
     * shortest interval time between digital input readings
     */

    _this.digitalReadInterval = 20;
    /**
     * shortest interval time between analog input readings
     */

    _this.analogReadInterval = 20;
    /**
     * shortest interval time between message sending
     * @type {number}
     */

    _this.sendingInterval = 10;
    /**
     * Waiting time for response of digital input reading in milliseconds.
     */

    _this.updateDigitalInputWaitingTime = 100;
    /**
     * Waiting time for response of analog input reading in milliseconds.
     */

    _this.updateAnalogInputWaitingTime = 100;
    /**
     * Waiting time for response of I2C reading in milliseconds.
     */

    _this.i2cReadWaitingTime = 100;
    /**
     * Waiting time for response of OneWire reading in milliseconds.
     */

    _this.oneWireReadWaitingTime = 100;
    _this.portInfo = null;
    _this.neoPixel = null;
    return _this;
  }
  /**
   * Open a port to connect a firmata board.
   * @param {string} extensionId - ID of the extension which is requesting
   * @param {object} options - serial port options
   * @returns {Promise<FirmataBoard>} a Promise which resolves a connected firmata board or reject with reason
   */


  _createClass(FirmataBoard, [{
    key: "requestPort",
    value: function () {
      var _requestPort = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(extensionId, options) {
        var _this2 = this;

        var nativePort, permittedPorts;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.port) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", Promise.resolve(this));

              case 2:
                // already opened
                this.state = 'portRequesting';
                this.extensionId = extensionId;
                nativePort = null;
                _context.next = 7;
                return navigator.serial.getPorts();

              case 7:
                permittedPorts = _context.sent;

                if (!(permittedPorts !== null && Array.isArray(permittedPorts) && permittedPorts.length > 0)) {
                  _context.next = 12;
                  break;
                }

                nativePort = permittedPorts[0];
                _context.next = 15;
                break;

              case 12:
                _context.next = 14;
                return navigator.serial.requestPort(options);

              case 14:
                nativePort = _context.sent;

              case 15:
                this.port = new lib$2(nativePort, {
                  baudRate: 57600,
                  // firmata: 57600
                  autoOpen: false
                });
                this.portInfo = this.port.path.getInfo();
                this.firmata = new Firmata(this.port);
                this.firmata.once('open', function () {
                  _this2.state = 'connect';
                });
                this.firmata.once('close', function () {
                  if (_this2.state === 'disconnect') return;

                  _this2.releaseBoard();
                });
                this.firmata.once('disconnect', function (error) {
                  if (_this2.state === 'disconnect') return;

                  _this2.handleDisconnectError(error);
                });
                this.firmata.once('error', function (error) {
                  if (_this2.state === 'disconnect') return;

                  _this2.handleDisconnectError(error);
                });

                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  _this2.port.open(function (error) {
                    if (error) {
                      _this2.releaseBoard();

                      reject(error);
                      return;
                    }

                    _this2.firmata.once('ready', function () {
                      _this2.onBoarReady();

                      resolve(_this2);
                    });
                  });
                }));

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function requestPort(_x, _x2) {
        return _requestPort.apply(this, arguments);
      }

      return requestPort;
    }()
  }, {
    key: "onBoarReady",
    value: function onBoarReady() {
      var firmInfo = this.firmata.firmware;
      console.log("".concat(firmInfo.name, "-").concat(firmInfo.version.major, ".").concat(firmInfo.version.minor, " on: ").concat(JSON.stringify(this.portInfo)));
      this.firmata.i2cConfig();
      this.state = 'ready';
    }
  }, {
    key: "isConnected",
    value: function isConnected() {
      return this.state === 'connect' || this.state === 'ready';
    }
  }, {
    key: "isReady",
    value: function isReady() {
      return this.state === 'ready';
    }
  }, {
    key: "releaseBoard",
    value: function () {
      var _releaseBoard = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.state = 'disconnect';
                this.neoPixel = null;

                if (this.port && this.port.isOpen) {
                  this.port.close();
                }

                this.port = null;
                this.oneWireDevices = null;
                this.extensionId = null;
                this.emit(FirmataBoard.RELEASED);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function releaseBoard() {
        return _releaseBoard.apply(this, arguments);
      }

      return releaseBoard;
    }()
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.state === 'disconnect') return;

      if (this.firmata && this.port && this.port.isOpen) {
        this.firmata.reset(); // notify disconnection to board
      }

      this.releaseBoard();
    }
    /**
     * Handle an error resulting from losing connection to a peripheral.
     * This could be due to:
     * - unplug the connector
     * - being powered down
     *
     * Disconnect the device, and if the extension using this object has a
     * reset callback, call it.
     *
     * @param {*} error - cause of the error
     * @returns {undefined}
     */

  }, {
    key: "handleDisconnectError",
    value: function handleDisconnectError(error) {
      if (this.state === 'disconnect') return;
      error = error ? error : 'Firmata was disconnected by device';
      console.error(error);
      this.runtime.emit(this.runtime.constructor.PERIPHERAL_CONNECTION_LOST_ERROR, {
        message: "Scratch lost connection to",
        extensionId: this.extensionId
      });
      this.disconnect();
    }
  }, {
    key: "pinMode",
    value: function pinMode(pin, mode) {
      return this.firmata.pinMode(pin, mode);
    }
    /**
     * Update pin value as a digital input when the last update was too old.
     * @param {number} pin - pin number to read
     * @returns {Promise<boolean>} a Promise which resolves boolean when the response was returned
     */

  }, {
    key: "updateDigitalInput",
    value: function updateDigitalInput(pin) {
      var _this3 = this;

      if (this.pins[pin].updating || this.pins[pin].updateTime && Date.now() - this.pins[pin].updateTime < this.digitalReadInterval) {
        return Promise.resolve(this.pins[pin].value);
      }

      this.pins[pin].updating = true;
      var request = new Promise(function (resolve) {
        if (_this3.pins[pin].inputBias !== _this3.firmata.MODES.PULLUP) {
          _this3.pins[pin].inputBias = _this3.firmata.MODES.INPUT;
        }

        _this3.firmata.pinMode(pin, _this3.pins[pin].inputBias);

        _this3.firmata.digitalRead(pin, function (value) {
          _this3.pins[pin].value = value;
          _this3.pins[pin].updateTime = Date.now();
          resolve(_this3.pins[pin].value);
        });
      });
      return Promise.race([request, timeoutReject(this.updateDigitalInputWaitingTime)]).catch(function (reason) {
        _this3.pins[pin].value = 0;
        return Promise.reject(reason);
      }).finally(function () {
        _this3.pins[pin].updating = false;
      });
    }
    /**
     * Set input bias of the connector.
     * @param {number} pin - number of the pin
     * @param {boolean} pullUp - input bias of the pin [none | pullUp]
     * @returns {Promise} a Promise which resolves when the message was sent
     */

  }, {
    key: "setInputBias",
    value: function setInputBias(pin, pullUp) {
      var _this4 = this;

      this.pins[pin].inputBias = pullUp ? this.MODES.PULLUP : this.MODES.INPUT;
      return new Promise(function (resolve) {
        _this4.pinMode(pin, _this4.pins[pin].inputBias);

        setTimeout(function () {
          return resolve();
        }, _this4.sendingInterval);
      });
    }
    /**
     * Update pin value as a analog input when the last update was too old.
     * @param {number} analogPin - pin number to read
     * @returns {Promise<boolean>} a Promise which resolves boolean when the response was returned
     */

  }, {
    key: "updateAnalogInput",
    value: function updateAnalogInput(analogPin) {
      var _this5 = this;

      var pin = this.firmata.analogPins[analogPin];

      if (this.pins[pin].updating || this.pins[pin].updateTime && Date.now() - this.pins[pin].updateTime < this.analogReadInterval) {
        return Promise.resolve(this.pins[pin].value);
      }

      this.pins[pin].updating = true;
      var request = new Promise(function (resolve) {
        _this5.firmata.pinMode(analogPin, _this5.MODES.ANALOG);

        _this5.firmata.analogRead(analogPin, function (value) {
          _this5.pins[pin].value = value;
          _this5.pins[pin].updateTime = Date.now();
          resolve(_this5.pins[pin].value);
        });
      });
      return Promise.race([request, timeoutReject(this.updateAnalogInputWaitingTime)]).catch(function (reason) {
        _this5.pins[pin].value = 0;
        return Promise.reject(reason);
      }).finally(function () {
        _this5.pins[pin].updating = false;
      });
    }
  }, {
    key: "digitalRead",
    value: function digitalRead(pin, callback) {
      return this.firmata.digitalRead(pin, callback);
    }
  }, {
    key: "reportDigitalPin",
    value: function reportDigitalPin(pin, value) {
      return this.firmata.reportDigitalPin(pin, value);
    }
    /**
     * Asks the arduino to write a value to a digital pin
     * @param {number} pin The pin you want to write a value to.
     * @param {number} value The value you want to write. Must be board.HIGH or board.LOW
     * @param {boolean} enqueue When true, the local state is updated but the command is not sent to the Arduino
     * @returns {Promise} a Promise which resolves when the message was sent
     */

  }, {
    key: "digitalWrite",
    value: function digitalWrite(pin, value, enqueue) {
      var _this6 = this;

      return new Promise(function (resolve) {
        _this6.firmata.digitalWrite(pin, value, enqueue);

        setTimeout(function () {
          return resolve();
        }, _this6.sendingInterval);
      });
    }
    /**
     * Set PWM to the valu on the pin
     * @param {number} pin pin number to set
     * @param {number} value PWM level
     * @returns {Promise} a Promise which resolves when the message was sent
     */

  }, {
    key: "pwmWrite",
    value: function pwmWrite(pin, value) {
      var _this7 = this;

      return new Promise(function (resolve) {
        _this7.firmata.pwmWrite(pin, value);

        setTimeout(function () {
          return resolve();
        }, _this7.sendingInterval);
      });
    }
    /**
     * Asks the arduino to move a servo
     * @param {number} pin The pin the servo is connected to
     * @param {number} value The degrees to move the servo to.
     * @returns {Promise} a Promise which resolves when the message was sent
     */

  }, {
    key: "servoWrite",
    value: function servoWrite() {
      var _this8 = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new Promise(function (resolve) {
        var _this8$firmata;

        (_this8$firmata = _this8.firmata).servoWrite.apply(_this8$firmata, args);

        setTimeout(function () {
          return resolve();
        }, _this8.sendingInterval);
      });
    }
  }, {
    key: "analogRead",
    value: function analogRead(pin, callback) {
      return this.firmata.analogRead(pin, callback);
    }
  }, {
    key: "reportAnalogPin",
    value: function reportAnalogPin(pin, value) {
      return this.firmata.reportAnalogPin(pin, value);
    }
    /**
     * Write data to the register
     * @param {number} address The address of the I2C device.
     * @param {number} register The register to write
     * @param {Array} inBytes An array of bytes
     * @returns {Promise} a Promise which resolves when the message was sent
     */

  }, {
    key: "i2cWrite",
    value: function i2cWrite(address, register, inBytes) {
      var _this9 = this;

      return new Promise(function (resolve) {
        _this9.firmata.i2cWrite(address, register, inBytes);

        setTimeout(function () {
          return resolve();
        }, _this9.sendingInterval);
      });
    }
  }, {
    key: "i2cStop",
    value: function i2cStop(options) {
      return this.firmata.i2cStop(options);
    }
  }, {
    key: "i2cReadOnce",
    value: function i2cReadOnce(address, register, readLength, timeout) {
      var _this10 = this;

      timeout = timeout ? timeout : this.i2cReadWaitingTime;
      var request = new Promise(function (resolve) {
        _this10.firmata.i2cReadOnce(address, register, readLength, function (data) {
          resolve(data);
        });
      });
      return Promise.race([request, timeoutReject(timeout)]);
    }
    /**
     * Resets all devices on the bus.
     * @param {number} pin pin number to reset
     * @returns {Promise} a Promise which resolves when the message was sent
     */

  }, {
    key: "sendOneWireReset",
    value: function sendOneWireReset(pin) {
      var _this11 = this;

      return new Promise(function (resolve) {
        _this11.firmata.sendOneWireReset(pin);

        setTimeout(function () {
          return resolve();
        }, _this11.sendingInterval);
      });
    }
  }, {
    key: "searchOneWireDevices",
    value: function searchOneWireDevices(pin) {
      var _this12 = this;

      return new Promise(function (resolve, reject) {
        if (_this12.firmata.pins[pin].mode !== _this12.firmata.MODES.ONEWIRE) {
          _this12.firmata.sendOneWireConfig(pin, true);

          return _this12.firmata.sendOneWireSearch(pin, function (error, founds) {
            if (error) return reject(error);
            if (founds.length < 1) return reject(new Error('no device'));

            _this12.firmata.pinMode(pin, _this12.firmata.MODES.ONEWIRE);

            _this12.oneWireDevices = founds;

            _this12.firmata.sendOneWireDelay(pin, 1);

            resolve(_this12.oneWireDevices);
          });
        }

        resolve(_this12.oneWireDevices);
      });
    }
  }, {
    key: "oneWireWrite",
    value: function oneWireWrite(pin, data) {
      var _this13 = this;

      return this.searchOneWireDevices(pin).then(function (devices) {
        _this13.firmata.sendOneWireWrite(pin, devices[0], data);
      });
    }
  }, {
    key: "oneWireRead",
    value: function oneWireRead(pin, length, timeout) {
      var _this14 = this;

      timeout = timeout ? timeout : this.oneWireReadWaitingTime;
      var request = this.searchOneWireDevices(pin).then(function (devices) {
        return new Promise(function (resolve, reject) {
          _this14.firmata.sendOneWireRead(pin, devices[0], length, function (readError, data) {
            if (readError) return reject(readError);
            resolve(data);
          });
        });
      });
      return Promise.race([request, timeoutReject(timeout)]);
    }
  }, {
    key: "oneWireWriteAndRead",
    value: function oneWireWriteAndRead(pin, data, readLength, timeout) {
      var _this15 = this;

      timeout = timeout ? timeout : this.oneWireReadWaitingTime;
      var request = this.searchOneWireDevices(pin).then(function (devices) {
        return new Promise(function (resolve, reject) {
          _this15.firmata.sendOneWireWriteAndRead(pin, devices[0], data, readLength, function (readError, readData) {
            if (readError) return reject(readError);
            resolve(readData);
          });
        });
      });
      return Promise.race([request, timeoutReject(timeout)]);
    }
  }, {
    key: "neoPixelConfigStrip",
    value: function neoPixelConfigStrip(pin, length) {
      var _this16 = this;

      // now send the config message with length and data point.
      this.neoPixel = {
        pin: pin,
        length: length
      };
      var data = new Array(7);
      data[0] = nodePixelConstants.START_SYSEX;
      data[1] = nodePixelConstants.PIXEL_COMMAND;
      data[2] = nodePixelConstants.PIXEL_CONFIG;
      data[3] = nodePixelConstants.COLOR_ORDER.GRB << 5 | pin;
      data[4] = length & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[5] = length >> 7 & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[6] = nodePixelConstants.END_SYSEX;
      return new Promise(function (resolve) {
        _this16.port.write(data, function () {
          return resolve();
        });
      });
    }
  }, {
    key: "neoPixelSetColor",
    value: function neoPixelSetColor(index, color) {
      var _this17 = this;

      if (!this.neoPixel) return Promise.resolve();
      var address = Math.min(this.neoPixel.length, Math.max(0, index));
      var colorValue = neoPixelColorValue(color, neoPixelGammaTable);
      var data = new Array(10);
      data[0] = nodePixelConstants.START_SYSEX;
      data[1] = nodePixelConstants.PIXEL_COMMAND;
      data[2] = nodePixelConstants.PIXEL_SET_PIXEL;
      data[3] = address & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[4] = address >> 7 & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[5] = colorValue & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[6] = colorValue >> 7 & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[7] = colorValue >> 14 & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[8] = colorValue >> 21 & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[9] = nodePixelConstants.END_SYSEX;
      return new Promise(function (resolve) {
        _this17.port.write(data, function () {
          return resolve();
        });
      });
    }
  }, {
    key: "neoPixelClear",
    value: function () {
      var _neoPixelClear = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
        var index;
        return regenerator.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.neoPixel) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", Promise.resolve());

              case 2:
                index = 0;

              case 3:
                if (!(index < this.neoPixel.length)) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 6;
                return this.neoPixelSetColor(index, [0, 0, 0]);

              case 6:
                index++;
                _context3.next = 3;
                break;

              case 9:
                return _context3.abrupt("return", this.neoPixelShow());

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function neoPixelClear() {
        return _neoPixelClear.apply(this, arguments);
      }

      return neoPixelClear;
    }()
  }, {
    key: "neoPixelShow",
    value: function neoPixelShow() {
      var _this18 = this;

      var data = [];
      data[0] = nodePixelConstants.START_SYSEX;
      data[1] = nodePixelConstants.PIXEL_COMMAND;
      data[2] = nodePixelConstants.PIXEL_SHOW;
      data[3] = nodePixelConstants.END_SYSEX;
      return new Promise(function (resolve) {
        _this18.port.write(data, function () {
          return resolve();
        });
      });
    }
    /**
     * State of the all pins
     */

  }, {
    key: "pins",
    get: function get() {
      return this.firmata.pins;
    }
  }, {
    key: "MODES",
    get: function get() {
      return this.firmata.MODES;
    }
  }, {
    key: "HIGH",
    get: function get() {
      return this.firmata.HIGH;
    }
  }, {
    key: "LOW",
    get: function get() {
      return this.firmata.LOW;
    }
  }, {
    key: "RESOLUTION",
    get: function get() {
      return this.firmata.RESOLUTION;
    }
  }], [{
    key: "RELEASED",
    get:
    /**
     * Event name for reporting that this board has been released.
     * @const {string}
     */
    function get() {
      return 'RELEASED';
    }
  }]);

  return FirmataBoard;
}(EventEmitter$1);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Manager object which serves firmata boards.
 */

var FirmataConnector = /*#__PURE__*/function (_EventEmitter) {
  _inherits(FirmataConnector, _EventEmitter);

  var _super = _createSuper(FirmataConnector);

  /**
   * Constructor of this instance.
   * @param {Runtime} runtime - Scratch runtime object
   */
  function FirmataConnector(runtime) {
    var _this;

    _classCallCheck(this, FirmataConnector);

    _this = _super.call(this);
    /**
     * The Scratch 3.0 runtime.
     * @type {Runtime}
     */

    _this.runtime = runtime;
    /**
     * Available boards
     * @type {Array<FirmataBoard>}
     */

    _this.boards = [];
    return _this;
  }
  /**
   * Return connected board which is confirmed with the options.
   * @param {object} options serial port options
   * @param {Array<{usbVendorId, usbProductId}>} options.filters allay of filters
   * @returns {FirmataBoard?} first board which confirmed with options
   */


  _createClass(FirmataConnector, [{
    key: "findBoard",
    value: function findBoard(options) {
      if (this.boards.length === 0) return;
      if (!options || !options.filters) return this.boards[0];
      return this.boards.find(function (aBoard) {
        return aBoard.isConnected() && options.filters.some(function (filter) {
          return filter.usbVendorId === aBoard.portInfo.usbVendorId && filter.usbProductId === aBoard.portInfo.usbProductId;
        });
      });
    }
    /**
     * Add a board to the boards holder.
     * @param {FirmataBoard} newBoard the board to be added
     */

  }, {
    key: "addBoard",
    value: function addBoard(newBoard) {
      this.boards.push(newBoard);
      this.emit(FirmataConnector.BOARD_ADDED, newBoard);
    }
    /**
     * Remove a board from the boards holder.
     * @param {FirmataBoard} removal the board to be removed
     */

  }, {
    key: "removeBoard",
    value: function removeBoard(removal) {
      var indexOfRemoval = this.boards.indexOf(removal);
      if (indexOfRemoval < 0) return; // not found

      this.boards.splice(indexOfRemoval, 1);
      this.emit(FirmataConnector.BOARD_ADDED, removal);
    }
    /**
     * Return a connected firmata board which is confirmed with the options
     * @param {string} extensionId - ID of the extension which is requesting
     * @param {object} options - serial port options
     * @returns {Promise<FirmataBoard>} a Promise which resolves a connected firmata board or reject with reason
     */

  }, {
    key: "connect",
    value: function connect(extensionId, options) {
      var _this2 = this;

      if (!('serial' in navigator)) {
        console.log('This browser does not support Web Serial API.');
        return Promise.reject('This browser does not support Web Serial API.');
      }

      var connectedBoard = this.findBoard(options);

      if (connectedBoard) {
        // share a board object
        return Promise.resolve(connectedBoard);
      }

      var newBoard = new FirmataBoard(this.runtime);
      newBoard.once(FirmataBoard.RELEASED, function () {
        _this2.removeBoard(newBoard);

        _this2.runtime.emit(_this2.runtime.constructor.PERIPHERAL_DISCONNECTED, {
          name: newBoard.name,
          path: newBoard.portInfo
        });
      });
      return newBoard.requestPort(extensionId, options).then(function (connected) {
        _this2.addBoard(connected);

        return connected;
      });
    }
  }], [{
    key: "BOARD_REMOVED",
    get:
    /**
     * Event name for reporting that a board removed.
     * @const {string}
     */
    function get() {
      return 'BOARD_REMOVED';
    }
    /**
     * Event name for reporting that a board added.
     * @const {string}
     */

  }, {
    key: "BOARD_ADDED",
    get: function get() {
      return 'BOARD_ADDED';
    }
  }]);

  return FirmataConnector;
}(EventEmitter$1);
/**
 * Return a shared firmata connector object
 * @param {Runtime} runtime - Scratch runtime object
 * @returns {FirmataConnector} a firmata connector object
 */

var getFirmataConnector = function getFirmataConnector(runtime) {
  if (!runtime.firmataConnector) {
    runtime.firmataConnector = new FirmataConnector(runtime);
  }

  return runtime.firmataConnector;
};

/**
 * VL53L0X API converted from Cpp code for Arduino.
 * ref: https://github.com/pololu/vl53l0x-arduino
 */

/* eslint-disable no-unused-vars */

/* eslint-disable camelcase */
// register addresses from API vl53l0x_device.h (ordered as listed there)
// enum regAddr
var SYSRANGE_START = 0x00;
var SYSTEM_SEQUENCE_CONFIG = 0x01;
var SYSTEM_INTERMEASUREMENT_PERIOD = 0x04;
var SYSTEM_INTERRUPT_CONFIG_GPIO = 0x0A;
var GPIO_HV_MUX_ACTIVE_HIGH = 0x84;
var SYSTEM_INTERRUPT_CLEAR = 0x0B;
var RESULT_INTERRUPT_STATUS = 0x13;
var RESULT_RANGE_STATUS = 0x14;
var I2C_SLAVE_DEVICE_ADDRESS = 0x8A;
var MSRC_CONFIG_CONTROL = 0x60;
var PRE_RANGE_CONFIG_VALID_PHASE_LOW = 0x56;
var PRE_RANGE_CONFIG_VALID_PHASE_HIGH = 0x57;
var FINAL_RANGE_CONFIG_VALID_PHASE_LOW = 0x47;
var FINAL_RANGE_CONFIG_VALID_PHASE_HIGH = 0x48;
var FINAL_RANGE_CONFIG_MIN_COUNT_RATE_RTN_LIMIT = 0x44;
var PRE_RANGE_CONFIG_VCSEL_PERIOD = 0x50;
var PRE_RANGE_CONFIG_TIMEOUT_MACROP_HI = 0x51;
var FINAL_RANGE_CONFIG_VCSEL_PERIOD = 0x70;
var FINAL_RANGE_CONFIG_TIMEOUT_MACROP_HI = 0x71;
var MSRC_CONFIG_TIMEOUT_MACROP = 0x46;
var IDENTIFICATION_MODEL_ID = 0xC0;
var OSC_CALIBRATE_VAL = 0xF8;
var GLOBAL_CONFIG_VCSEL_WIDTH = 0x32;
var GLOBAL_CONFIG_SPAD_ENABLES_REF_0 = 0xB0;
var GLOBAL_CONFIG_REF_EN_START_SELECT = 0xB6;
var DYNAMIC_SPAD_NUM_REQUESTED_REF_SPAD = 0x4E;
var DYNAMIC_SPAD_REF_EN_START_OFFSET = 0x4F;
var VHV_CONFIG_PAD_SCL_SDA__EXTSUP_HV = 0x89;
var ALGO_PHASECAL_LIM = 0x30;
var ALGO_PHASECAL_CONFIG_TIMEOUT = 0x30; // enum vcselPeriodType

var VcselPeriodPreRange = 0;
var VcselPeriodFinalRange = 1;
/**
 * Decode VCSEL (vertical cavity surface emitting laser) pulse period in PCLKs
 * from register value
 * based on VL53L0X_decode_vcsel_period()
 * @param {number} reg_val - register value
 * @returns {number} decoded value
 */

var decodeVcselPeriod = function decodeVcselPeriod(reg_val) {
  return reg_val + 1 << 1;
}; // Encode VCSEL pulse period register value from period in PCLKs
// based on VL53L0X_encode_vcsel_period()


var encodeVcselPeriod = function encodeVcselPeriod(period_pclks) {
  return (period_pclks >> 1) - 1;
}; // Calculate macro period in *nanoseconds* from VCSEL period in PCLKs
// based on VL53L0X_calc_macro_period_ps()
// PLL_period_ps = 1655; macro_period_vclks = 2304


var calcMacroPeriod = function calcMacroPeriod(vcsel_period_pclks) {
  return (2304 * vcsel_period_pclks * 1655 + 500) / 1000;
};
/**
 * This class is representing a VL53L0X distance sensor.
 */


var VL53L0X = /*#__PURE__*/function () {
  // eslint-disable-next-line valid-jsdoc

  /**
   * Constructor of VL53L0X instance.
   * @param {FirmataBoard} board - connecting firmata board
   * @param {*} address - I2C address of the sensor
   */
  function VL53L0X(board, address) {
    _classCallCheck(this, VL53L0X);

    /**
     * Connecting firmata board
     * @type {import('./firmata-board').default}
     */
    this.board = board;
    /**
     * I2C address for this module
     */

    this.address = 0x29;

    if (address) {
      this.setAddress(address);
    }
    /**
     * read by init and used when starting measurement;
     * is StopVariable field of VL53L0X_DevData_t structure in API
     * @type {number}
     */


    this.stop_variable = 0;
    /**
     * Timeout for IO in milliseconds.
     * @type {number}
     */

    this.io_timeout = 500;
    /**
     * Did a timeout occur in a sequence.
     * @type {boolean}
     */

    this.did_timeout = false;
    /**
     * @type {number}
     */

    this.measurement_timing_budget_us = 0;
  }
  /**
   * Change address for this module
   * @param {number} new_addr - I2C address to set
   */


  _createClass(VL53L0X, [{
    key: "setAddress",
    value: function setAddress(new_addr) {
      this.writeReg(I2C_SLAVE_DEVICE_ADDRESS, new_addr);
      this.address = new_addr;
    }
    /**
     * Initialize sensor using sequence based on VL53L0X_DataInit(),
     * VL53L0X_StaticInit(), and VL53L0X_PerformRefCalibration().
     * @param {boolean} io2v8 - set 2V8 mode if it was true
     * @returns {Promise<boolean>} a Promise which resolves boolean if the initialization was succeeded.
     */

  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(io2v8) {
        var id, info, refSpadMap, firstSpadToEnable, spadsEnabled, i;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.readReg(IDENTIFICATION_MODEL_ID);

              case 2:
                id = _context.sent;

                if (!(id !== 0xEE)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", false);

              case 5:
                if (!io2v8) {
                  _context.next = 13;
                  break;
                }

                _context.t0 = this;
                _context.t1 = VHV_CONFIG_PAD_SCL_SDA__EXTSUP_HV;
                _context.next = 10;
                return this.readReg(VHV_CONFIG_PAD_SCL_SDA__EXTSUP_HV);

              case 10:
                _context.t2 = _context.sent;
                _context.t3 = _context.t2 | 0x01;

                _context.t0.writeReg.call(_context.t0, _context.t1, _context.t3);

              case 13:
                // "Set I2C standard mode"
                this.writeReg(0x88, 0x00);
                this.writeReg(0x80, 0x01);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x00, 0x00);
                _context.next = 19;
                return this.readReg(0x91);

              case 19:
                this.stop_variable = _context.sent;
                this.writeReg(0x00, 0x01);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x80, 0x00); // disable SIGNAL_RATE_MSRC (bit 1) and SIGNAL_RATE_PRE_RANGE (bit 4) limit checks

                _context.t4 = this;
                _context.t5 = MSRC_CONFIG_CONTROL;
                _context.next = 27;
                return this.readReg(MSRC_CONFIG_CONTROL);

              case 27:
                _context.t6 = _context.sent;
                _context.t7 = _context.t6 | 0x12;

                _context.t4.writeReg.call(_context.t4, _context.t5, _context.t7);

                // set final range signal rate limit to 0.25 MCPS (million counts per second)
                this.setSignalRateLimit(0.25);
                this.writeReg(SYSTEM_SEQUENCE_CONFIG, 0xFF); // VL53L0X_DataInit() end
                // VL53L0X_StaticInit() begin

                info = {
                  count: 0,
                  isAperture: false
                };
                _context.next = 35;
                return this.getSpadInfo(info);

              case 35:
                if (_context.sent) {
                  _context.next = 37;
                  break;
                }

                return _context.abrupt("return", false);

              case 37:
                _context.next = 39;
                return this.readMulti(GLOBAL_CONFIG_SPAD_ENABLES_REF_0, 6);

              case 39:
                refSpadMap = _context.sent;
                // -- VL53L0X_set_reference_spads() begin (assume NVM values are valid)
                this.writeReg(0xFF, 0x01);
                this.writeReg(DYNAMIC_SPAD_REF_EN_START_OFFSET, 0x00);
                this.writeReg(DYNAMIC_SPAD_NUM_REQUESTED_REF_SPAD, 0x2C);
                this.writeReg(0xFF, 0x00);
                this.writeReg(GLOBAL_CONFIG_REF_EN_START_SELECT, 0xB4);
                firstSpadToEnable = info.isAperture ? 12 : 0; // 12 is the first aperture spad

                spadsEnabled = 0;

                for (i = 0; i < 48; i++) {
                  if (i < firstSpadToEnable || spadsEnabled === info.count) {
                    // This bit is lower than the first one that should be enabled, or
                    // (reference_spad_count) bits have already been enabled, so zero this bit
                    refSpadMap[i / 8] &= ~(1 << i % 8);
                  } else if (refSpadMap[i / 8] >> i % 8 & 0x1) {
                    spadsEnabled++;
                  }
                }

                this.writeMulti(GLOBAL_CONFIG_SPAD_ENABLES_REF_0, refSpadMap, 6); // -- VL53L0X_set_reference_spads() end
                // -- VL53L0X_load_tuning_settings() begin
                // DefaultTuningSettings from vl53l0x_tuning.h

                this.writeReg(0xFF, 0x01);
                this.writeReg(0x00, 0x00);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x09, 0x00);
                this.writeReg(0x10, 0x00);
                this.writeReg(0x11, 0x00);
                this.writeReg(0x24, 0x01);
                this.writeReg(0x25, 0xFF);
                this.writeReg(0x75, 0x00);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x4E, 0x2C);
                this.writeReg(0x48, 0x00);
                this.writeReg(0x30, 0x20);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x30, 0x09);
                this.writeReg(0x54, 0x00);
                this.writeReg(0x31, 0x04);
                this.writeReg(0x32, 0x03);
                this.writeReg(0x40, 0x83);
                this.writeReg(0x46, 0x25);
                this.writeReg(0x60, 0x00);
                this.writeReg(0x27, 0x00);
                this.writeReg(0x50, 0x06);
                this.writeReg(0x51, 0x00);
                this.writeReg(0x52, 0x96);
                this.writeReg(0x56, 0x08);
                this.writeReg(0x57, 0x30);
                this.writeReg(0x61, 0x00);
                this.writeReg(0x62, 0x00);
                this.writeReg(0x64, 0x00);
                this.writeReg(0x65, 0x00);
                this.writeReg(0x66, 0xA0);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x22, 0x32);
                this.writeReg(0x47, 0x14);
                this.writeReg(0x49, 0xFF);
                this.writeReg(0x4A, 0x00);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x7A, 0x0A);
                this.writeReg(0x7B, 0x00);
                this.writeReg(0x78, 0x21);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x23, 0x34);
                this.writeReg(0x42, 0x00);
                this.writeReg(0x44, 0xFF);
                this.writeReg(0x45, 0x26);
                this.writeReg(0x46, 0x05);
                this.writeReg(0x40, 0x40);
                this.writeReg(0x0E, 0x06);
                this.writeReg(0x20, 0x1A);
                this.writeReg(0x43, 0x40);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x34, 0x03);
                this.writeReg(0x35, 0x44);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x31, 0x04);
                this.writeReg(0x4B, 0x09);
                this.writeReg(0x4C, 0x05);
                this.writeReg(0x4D, 0x04);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x44, 0x00);
                this.writeReg(0x45, 0x20);
                this.writeReg(0x47, 0x08);
                this.writeReg(0x48, 0x28);
                this.writeReg(0x67, 0x00);
                this.writeReg(0x70, 0x04);
                this.writeReg(0x71, 0x01);
                this.writeReg(0x72, 0xFE);
                this.writeReg(0x76, 0x00);
                this.writeReg(0x77, 0x00);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x0D, 0x01);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x80, 0x01);
                this.writeReg(0x01, 0xF8);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x8E, 0x01);
                this.writeReg(0x00, 0x01);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x80, 0x00); // -- VL53L0X_load_tuning_settings() end
                // "Set interrupt config to new sample ready"
                // -- VL53L0X_SetGpioConfig() begin

                this.writeReg(SYSTEM_INTERRUPT_CONFIG_GPIO, 0x04);
                _context.t8 = this;
                _context.t9 = GPIO_HV_MUX_ACTIVE_HIGH;
                _context.next = 134;
                return this.readReg(GPIO_HV_MUX_ACTIVE_HIGH);

              case 134:
                _context.t10 = _context.sent;
                _context.t11 = ~0x10;
                _context.t12 = _context.t10 & _context.t11;

                _context.t8.writeReg.call(_context.t8, _context.t9, _context.t12);

                // active low
                this.writeReg(SYSTEM_INTERRUPT_CLEAR, 0x01); // -- VL53L0X_SetGpioConfig() end

                _context.next = 141;
                return this.getMeasurementTimingBudget();

              case 141:
                this.measurement_timing_budget_us = _context.sent;
                // "Disable MSRC and TCC by default"
                // MSRC = Minimum Signal Rate Check
                // TCC = Target CentreCheck
                // -- VL53L0X_SetSequenceStepEnable() begin
                this.writeReg(SYSTEM_SEQUENCE_CONFIG, 0xE8); // -- VL53L0X_SetSequenceStepEnable() end
                // "Recalculate timing budget"

                _context.next = 145;
                return this.setMeasurementTimingBudget(this.measurement_timing_budget_us);

              case 145:
                // VL53L0X_StaticInit() end
                // VL53L0X_PerformRefCalibration() begin (VL53L0X_perform_ref_calibration())
                // -- VL53L0X_perform_vhv_calibration() begin
                this.writeReg(SYSTEM_SEQUENCE_CONFIG, 0x01);
                _context.next = 148;
                return this.performSingleRefCalibration(0x40);

              case 148:
                if (_context.sent) {
                  _context.next = 150;
                  break;
                }

                return _context.abrupt("return", false);

              case 150:
                // -- VL53L0X_perform_vhv_calibration() end
                // -- VL53L0X_perform_phase_calibration() begin
                this.writeReg(SYSTEM_SEQUENCE_CONFIG, 0x02);
                _context.next = 153;
                return this.performSingleRefCalibration(0x00);

              case 153:
                if (_context.sent) {
                  _context.next = 155;
                  break;
                }

                return _context.abrupt("return", false);

              case 155:
                // -- VL53L0X_perform_phase_calibration() end
                // "restore the previous Sequence Config"
                this.writeReg(SYSTEM_SEQUENCE_CONFIG, 0xE8); // VL53L0X_PerformRefCalibration() end

                return _context.abrupt("return", true);

              case 157:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init(_x) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
    /**
     * Write an 8-bit at the register.
     * @param {number} register - register to write
     * @param {number} value - written 8-bit value
     */

  }, {
    key: "writeReg",
    value: function writeReg(register, value) {
      this.board.i2cWrite(this.address, register, value);
    }
    /**
     * Write a 16-bit at the register.
     * @param {number} register - register to write
     * @param {number} value - written 16-bit value
     */

  }, {
    key: "writeReg16Bit",
    value: function writeReg16Bit(register, value) {
      var data = [value >> 8 & 0xFF, value & 0xFF];
      this.board.i2cWrite(this.address, register, data);
    }
    /**
     * Write a 32-bit at the register.
     * @param {number} register - register to write
     * @param {number} value - written 32-bit value
     */

  }, {
    key: "writeReg32Bit",
    value: function writeReg32Bit(register, value) {
      var data = [value >> 24 & 0xFF, value >> 16 & 0xFF, value >> 8 & 0xFF, value & 0xFF];
      this.board.i2cWrite(this.address, register, data);
    }
    /**
     * Read an 8-bit from the register.
     * @param {number} register - register to read
     * @returns {Promise<number>} a Promise which resolves read value
     */

  }, {
    key: "readReg",
    value: function readReg(register) {
      return this.board.i2cReadOnce(this.address, register, 1, this.io_timeout).then(function (data) {
        return data[0];
      });
    }
    /**
     * Read a 16-bit from the register.
     * @param {number} register - starting register
     * @returns {Promise<number>} a Promise which resolves read value
     */

  }, {
    key: "readReg16Bit",
    value: function readReg16Bit(register) {
      return this.board.i2cReadOnce(this.address, register, 2, this.io_timeout).then(function (data) {
        var value = data[0] << 8 | data[1];
        return value;
      });
    }
    /**
     * Read a 32-bit from the register.
     * @param {number} register - starting register
     * @returns {Promise<number>} a Promise which resolves read value
     */

  }, {
    key: "readReg32Bit",
    value: function readReg32Bit(register) {
      return this.board.i2cReadOnce(this.address, register, 4, this.io_timeout).then(function (data) {
        var value = data[0] << 24 | data[1] << 16 | data[2] << 8 | data[3];
        return value;
      });
    }
    /**
     * Write these bytes starting at the register.
     * @param {number} register - starting register
     * @param {Array<number>} data - array of uint8t to be written
     */

  }, {
    key: "writeMulti",
    value: function writeMulti(register, data) {
      this.board.i2cWrite(this.address, register, data);
    }
    /**
     * Read bytes of the length from the register.
     * @param {number} register - starting register
     * @param {number} bytesToRead - byte length to read
     * @returns {Promise<Array<number>>} a Promise which resolves read bytes
     */

  }, {
    key: "readMulti",
    value: function readMulti(register, bytesToRead) {
      return this.board.i2cReadOnce(this.address, register, bytesToRead, this.io_timeout);
    }
    /**
     * Record the current time to check an upcoming timeout against
     */

  }, {
    key: "startTimeout",
    value: function startTimeout() {
      /**
       * Starting time to count timeout for IO.
       */
      this.timeout_start_ms = Date.now();
    }
    /**
     * Check if timeout is enabled (set to nonzero value) and has expired.
     * @returns {boolean} true when the timeout has expired
     */

  }, {
    key: "checkTimeoutExpired",
    value: function checkTimeoutExpired() {
      return this.io_timeout > 0 && Date.now() - this.timeout_start_ms > this.io_timeout;
    } // Set the return signal rate limit check value in units of MCPS (mega counts
    // per second). "This represents the amplitude of the signal reflected from the
    // target and detected by the device"; setting this limit presumably determines
    // the minimum measurement necessary for the sensor to report a valid reading.
    // Setting a lower limit increases the potential range of the sensor but also
    // seems to increase the likelihood of getting an inaccurate reading because of
    // unwanted reflections from objects other than the intended target.
    // Defaults to 0.25 MCPS as initialized by the ST API and this library.

  }, {
    key: "setSignalRateLimit",
    value: function setSignalRateLimit(limitMCPS) {
      if (limitMCPS < 0 || limitMCPS > 511.99) {
        return false;
      } // Q9.7 fixed point format (9 integer bits, 7 fractional bits)


      this.writeReg16Bit(FINAL_RANGE_CONFIG_MIN_COUNT_RATE_RTN_LIMIT, limitMCPS * (1 << 7));
      return true;
    } // Get the return signal rate limit check value in MCPS

  }, {
    key: "getSignalRateLimit",
    value: function () {
      var _getSignalRateLimit = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.readReg16Bit(FINAL_RANGE_CONFIG_MIN_COUNT_RATE_RTN_LIMIT);

              case 2:
                _context2.t0 = _context2.sent;
                _context2.t1 = 1 << 7;
                return _context2.abrupt("return", _context2.t0 / _context2.t1);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getSignalRateLimit() {
        return _getSignalRateLimit.apply(this, arguments);
      }

      return getSignalRateLimit;
    }() // Set the measurement timing budget in microseconds, which is the time allowed
    // for one measurement; the ST API and this library take care of splitting the
    // timing budget among the sub-steps in the ranging sequence. A longer timing
    // budget allows for more accurate measurements. Increasing the budget by a
    // factor of N decreases the range measurement standard deviation by a factor of
    // sqrt(N). Defaults to about 33 milliseconds; the minimum is 20 ms.
    // based on VL53L0X_set_measurement_timing_budget_micro_seconds()

  }, {
    key: "setMeasurementTimingBudget",
    value: function () {
      var _setMeasurementTimingBudget = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(budget_us) {
        var enables, timeouts, StartOverhead, EndOverhead, MsrcOverhead, TccOverhead, DssOverhead, PreRangeOverhead, FinalRangeOverhead, MinTimingBudget, used_budget_us, final_range_timeout_us, final_range_timeout_mclks;
        return regenerator.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                enables = {
                  tcc: false,
                  msrc: false,
                  dss: false,
                  pre_range: false,
                  final_range: false
                };
                timeouts = {
                  pre_range_vcsel_period_pclks: 0,
                  final_range_vcsel_period_pclks: 0,
                  msrc_dss_tcc_mclks: 0,
                  pre_range_mclks: 0,
                  final_range_mclks: 0,
                  msrc_dss_tcc_us: 0,
                  pre_range_us: 0,
                  final_range_us: 0
                };
                StartOverhead = 1910;
                EndOverhead = 960;
                MsrcOverhead = 660;
                TccOverhead = 590;
                DssOverhead = 690;
                PreRangeOverhead = 660;
                FinalRangeOverhead = 550;
                MinTimingBudget = 20000;

                if (!(budget_us < MinTimingBudget)) {
                  _context3.next = 12;
                  break;
                }

                return _context3.abrupt("return", false);

              case 12:
                used_budget_us = StartOverhead + EndOverhead;
                _context3.next = 15;
                return this.getSequenceStepEnables(enables);

              case 15:
                _context3.next = 17;
                return this.getSequenceStepTimeouts(enables, timeouts);

              case 17:
                if (enables.tcc) {
                  used_budget_us += timeouts.msrc_dss_tcc_us + TccOverhead;
                }

                if (enables.dss) {
                  used_budget_us += 2 * (timeouts.msrc_dss_tcc_us + DssOverhead);
                } else if (enables.msrc) {
                  used_budget_us += timeouts.msrc_dss_tcc_us + MsrcOverhead;
                }

                if (enables.pre_range) {
                  used_budget_us += timeouts.pre_range_us + PreRangeOverhead;
                }

                if (!enables.final_range) {
                  _context3.next = 29;
                  break;
                }

                used_budget_us += FinalRangeOverhead; // "Note that the final range timeout is determined by the timing
                // budget and the sum of all other timeouts within the sequence.
                // If there is no room for the final range timeout, then an error
                // will be set. Otherwise the remaining time will be applied to
                // the final range."

                if (!(used_budget_us > budget_us)) {
                  _context3.next = 24;
                  break;
                }

                return _context3.abrupt("return", false);

              case 24:
                final_range_timeout_us = budget_us - used_budget_us; // set_sequence_step_timeout() begin
                // (SequenceStepId == VL53L0X_SEQUENCESTEP_FINAL_RANGE)
                // "For the final range timeout, the pre-range timeout
                //  must be added. To do this both final and pre-range
                //  timeouts must be expressed in macro periods MClks
                //  because they have different vcsel periods."

                final_range_timeout_mclks = this.timeoutMicrosecondsToMclks(final_range_timeout_us, timeouts.final_range_vcsel_period_pclks);

                if (enables.pre_range) {
                  final_range_timeout_mclks += timeouts.pre_range_mclks;
                }

                this.writeReg16Bit(FINAL_RANGE_CONFIG_TIMEOUT_MACROP_HI, this.encodeTimeout(final_range_timeout_mclks)); // set_sequence_step_timeout() end

                this.measurement_timing_budget_us = budget_us; // store for internal reuse

              case 29:
                return _context3.abrupt("return", true);

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function setMeasurementTimingBudget(_x2) {
        return _setMeasurementTimingBudget.apply(this, arguments);
      }

      return setMeasurementTimingBudget;
    }() // Get the measurement timing budget in microseconds
    // based on VL53L0X_get_measurement_timing_budget_micro_seconds()
    // in us

  }, {
    key: "getMeasurementTimingBudget",
    value: function () {
      var _getMeasurementTimingBudget = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4() {
        var enables, timeouts, StartOverhead, EndOverhead, MsrcOverhead, TccOverhead, DssOverhead, PreRangeOverhead, FinalRangeOverhead, budget_us;
        return regenerator.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                enables = {
                  tcc: false,
                  msrc: false,
                  dss: false,
                  pre_range: false,
                  final_range: false
                };
                timeouts = {
                  pre_range_vcsel_period_pclks: 0,
                  final_range_vcsel_period_pclks: 0,
                  msrc_dss_tcc_mclks: 0,
                  pre_range_mclks: 0,
                  final_range_mclks: 0,
                  msrc_dss_tcc_us: 0,
                  pre_range_us: 0,
                  final_range_us: 0
                };
                StartOverhead = 1910;
                EndOverhead = 960;
                MsrcOverhead = 660;
                TccOverhead = 590;
                DssOverhead = 690;
                PreRangeOverhead = 660;
                FinalRangeOverhead = 550; // "Start and end overhead times always present"

                budget_us = StartOverhead + EndOverhead;
                _context4.next = 12;
                return this.getSequenceStepEnables(enables);

              case 12:
                _context4.next = 14;
                return this.getSequenceStepTimeouts(enables, timeouts);

              case 14:
                if (enables.tcc) {
                  budget_us += timeouts.msrc_dss_tcc_us + TccOverhead;
                }

                if (enables.dss) {
                  budget_us += 2 * (timeouts.msrc_dss_tcc_us + DssOverhead);
                } else if (enables.msrc) {
                  budget_us += timeouts.msrc_dss_tcc_us + MsrcOverhead;
                }

                if (enables.pre_range) {
                  budget_us += timeouts.pre_range_us + PreRangeOverhead;
                }

                if (enables.final_range) {
                  budget_us += timeouts.final_range_us + FinalRangeOverhead;
                }

                this.measurement_timing_budget_us = budget_us; // store for internal reuse

                return _context4.abrupt("return", budget_us);

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getMeasurementTimingBudget() {
        return _getMeasurementTimingBudget.apply(this, arguments);
      }

      return getMeasurementTimingBudget;
    }() // Set the VCSEL (vertical cavity surface emitting laser) pulse period for the
    // given period type (pre-range or final range) to the given value in PCLKs.
    // Longer periods seem to increase the potential range of the sensor.
    // Valid values are (even numbers only):
    //  pre:  12 to 18 (initialized default: 14)
    //  final: 8 to 14 (initialized default: 10)
    // based on VL53L0X_set_vcsel_pulse_period()

  }, {
    key: "setVcselPulsePeriod",
    value: function () {
      var _setVcselPulsePeriod = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(type, period_pclks) {
        var vcsel_period_reg, enables, timeouts, new_pre_range_timeout_mclks, new_msrc_timeout_mclks, new_final_range_timeout_mclks, sequence_config;
        return regenerator.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                vcsel_period_reg = encodeVcselPeriod(period_pclks);
                enables = {
                  tcc: false,
                  msrc: false,
                  dss: false,
                  pre_range: false,
                  final_range: false
                };
                timeouts = {
                  pre_range_vcsel_period_pclks: 0,
                  final_range_vcsel_period_pclks: 0,
                  msrc_dss_tcc_mclks: 0,
                  pre_range_mclks: 0,
                  final_range_mclks: 0,
                  msrc_dss_tcc_us: 0,
                  pre_range_us: 0,
                  final_range_us: 0
                };
                _context5.next = 5;
                return this.getSequenceStepEnables(enables);

              case 5:
                _context5.next = 7;
                return this.getSequenceStepTimeouts(enables, timeouts);

              case 7:
                if (!(type === VcselPeriodPreRange)) {
                  _context5.next = 28;
                  break;
                }

                _context5.t0 = period_pclks;
                _context5.next = _context5.t0 === 12 ? 11 : _context5.t0 === 14 ? 13 : _context5.t0 === 16 ? 15 : _context5.t0 === 18 ? 17 : 19;
                break;

              case 11:
                this.writeReg(PRE_RANGE_CONFIG_VALID_PHASE_HIGH, 0x18);
                return _context5.abrupt("break", 20);

              case 13:
                this.writeReg(PRE_RANGE_CONFIG_VALID_PHASE_HIGH, 0x30);
                return _context5.abrupt("break", 20);

              case 15:
                this.writeReg(PRE_RANGE_CONFIG_VALID_PHASE_HIGH, 0x40);
                return _context5.abrupt("break", 20);

              case 17:
                this.writeReg(PRE_RANGE_CONFIG_VALID_PHASE_HIGH, 0x50);
                return _context5.abrupt("break", 20);

              case 19:
                return _context5.abrupt("return", false);

              case 20:
                this.writeReg(PRE_RANGE_CONFIG_VALID_PHASE_LOW, 0x08); // apply new VCSEL period

                this.writeReg(PRE_RANGE_CONFIG_VCSEL_PERIOD, vcsel_period_reg); // update timeouts
                // set_sequence_step_timeout() begin
                // (SequenceStepId == VL53L0X_SEQUENCESTEP_PRE_RANGE)

                new_pre_range_timeout_mclks = this.timeoutMicrosecondsToMclks(timeouts.pre_range_us, period_pclks);
                this.writeReg16Bit(PRE_RANGE_CONFIG_TIMEOUT_MACROP_HI, this.encodeTimeout(new_pre_range_timeout_mclks)); // set_sequence_step_timeout() end
                // set_sequence_step_timeout() begin
                // (SequenceStepId == VL53L0X_SEQUENCESTEP_MSRC)

                new_msrc_timeout_mclks = this.timeoutMicrosecondsToMclks(timeouts.msrc_dss_tcc_us, period_pclks);
                this.writeReg(MSRC_CONFIG_TIMEOUT_MACROP, new_msrc_timeout_mclks > 256 ? 255 : new_msrc_timeout_mclks - 1); // set_sequence_step_timeout() end

                _context5.next = 72;
                break;

              case 28:
                if (!(type === VcselPeriodFinalRange)) {
                  _context5.next = 71;
                  break;
                }

                _context5.t1 = period_pclks;
                _context5.next = _context5.t1 === 8 ? 32 : _context5.t1 === 10 ? 40 : _context5.t1 === 12 ? 48 : _context5.t1 === 14 ? 56 : 64;
                break;

              case 32:
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_HIGH, 0x10);
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_LOW, 0x08);
                this.writeReg(GLOBAL_CONFIG_VCSEL_WIDTH, 0x02);
                this.writeReg(ALGO_PHASECAL_CONFIG_TIMEOUT, 0x0C);
                this.writeReg(0xFF, 0x01);
                this.writeReg(ALGO_PHASECAL_LIM, 0x30);
                this.writeReg(0xFF, 0x00);
                return _context5.abrupt("break", 65);

              case 40:
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_HIGH, 0x28);
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_LOW, 0x08);
                this.writeReg(GLOBAL_CONFIG_VCSEL_WIDTH, 0x03);
                this.writeReg(ALGO_PHASECAL_CONFIG_TIMEOUT, 0x09);
                this.writeReg(0xFF, 0x01);
                this.writeReg(ALGO_PHASECAL_LIM, 0x20);
                this.writeReg(0xFF, 0x00);
                return _context5.abrupt("break", 65);

              case 48:
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_HIGH, 0x38);
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_LOW, 0x08);
                this.writeReg(GLOBAL_CONFIG_VCSEL_WIDTH, 0x03);
                this.writeReg(ALGO_PHASECAL_CONFIG_TIMEOUT, 0x08);
                this.writeReg(0xFF, 0x01);
                this.writeReg(ALGO_PHASECAL_LIM, 0x20);
                this.writeReg(0xFF, 0x00);
                return _context5.abrupt("break", 65);

              case 56:
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_HIGH, 0x48);
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_LOW, 0x08);
                this.writeReg(GLOBAL_CONFIG_VCSEL_WIDTH, 0x03);
                this.writeReg(ALGO_PHASECAL_CONFIG_TIMEOUT, 0x07);
                this.writeReg(0xFF, 0x01);
                this.writeReg(ALGO_PHASECAL_LIM, 0x20);
                this.writeReg(0xFF, 0x00);
                return _context5.abrupt("break", 65);

              case 64:
                return _context5.abrupt("return", false);

              case 65:
                // apply new VCSEL period
                this.writeReg(FINAL_RANGE_CONFIG_VCSEL_PERIOD, vcsel_period_reg); // update timeouts
                // set_sequence_step_timeout() begin
                // (SequenceStepId == VL53L0X_SEQUENCESTEP_FINAL_RANGE)
                // "For the final range timeout, the pre-range timeout
                //  must be added. To do this both final and pre-range
                //  timeouts must be expressed in macro periods MClks
                //  because they have different vcsel periods."

                new_final_range_timeout_mclks = this.timeoutMicrosecondsToMclks(timeouts.final_range_us, period_pclks);

                if (enables.pre_range) {
                  new_final_range_timeout_mclks += timeouts.pre_range_mclks;
                }

                this.writeReg16Bit(FINAL_RANGE_CONFIG_TIMEOUT_MACROP_HI, this.encodeTimeout(new_final_range_timeout_mclks)); // set_sequence_step_timeout end

                _context5.next = 72;
                break;

              case 71:
                return _context5.abrupt("return", false);

              case 72:
                _context5.next = 74;
                return this.setMeasurementTimingBudget(this.measurement_timing_budget_us);

              case 74:
                _context5.next = 76;
                return this.readReg(SYSTEM_SEQUENCE_CONFIG);

              case 76:
                sequence_config = _context5.sent;
                this.writeReg(SYSTEM_SEQUENCE_CONFIG, 0x02);
                _context5.next = 80;
                return this.performSingleRefCalibration(0x0);

              case 80:
                this.writeReg(SYSTEM_SEQUENCE_CONFIG, sequence_config); // VL53L0X_perform_phase_calibration() end

                return _context5.abrupt("return", true);

              case 82:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function setVcselPulsePeriod(_x3, _x4) {
        return _setVcselPulsePeriod.apply(this, arguments);
      }

      return setVcselPulsePeriod;
    }() // Get the VCSEL pulse period in PCLKs for the given period type.
    // based on VL53L0X_get_vcsel_pulse_period()

  }, {
    key: "getVcselPulsePeriod",
    value: function () {
      var _getVcselPulsePeriod = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee6(type) {
        return regenerator.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(type === VcselPeriodPreRange)) {
                  _context6.next = 8;
                  break;
                }

                _context6.t0 = decodeVcselPeriod;
                _context6.next = 4;
                return this.readReg(PRE_RANGE_CONFIG_VCSEL_PERIOD);

              case 4:
                _context6.t1 = _context6.sent;
                return _context6.abrupt("return", (0, _context6.t0)(_context6.t1));

              case 8:
                if (!(type === VcselPeriodFinalRange)) {
                  _context6.next = 14;
                  break;
                }

                _context6.t2 = decodeVcselPeriod;
                _context6.next = 12;
                return this.readReg(FINAL_RANGE_CONFIG_VCSEL_PERIOD);

              case 12:
                _context6.t3 = _context6.sent;
                return _context6.abrupt("return", (0, _context6.t2)(_context6.t3));

              case 14:
                return _context6.abrupt("return", 255);

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getVcselPulsePeriod(_x5) {
        return _getVcselPulsePeriod.apply(this, arguments);
      }

      return getVcselPulsePeriod;
    }()
    /**
     * Start continuous ranging measurements. If period_ms (optional) is 0 or not
     * given, continuous back-to-back mode is used (the sensor takes measurements as
     * often as possible); otherwise, continuous timed mode is used, with the given
     * inter-measurement period in milliseconds determining how often the sensor
     * takes a measurement.
     * based on VL53L0X_StartMeasurement()
     * @param {number} period_ms - interval time between measurements
     */

  }, {
    key: "startContinuous",
    value: function () {
      var _startContinuous = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee7(period_ms) {
        var osc_calibrate_val;
        return regenerator.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.writeReg(0x80, 0x01);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x00, 0x00);
                this.writeReg(0x91, this.stop_variable);
                this.writeReg(0x00, 0x01);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x80, 0x00);

                if (!period_ms) {
                  _context7.next = 16;
                  break;
                }

                _context7.next = 10;
                return this.readReg16Bit(OSC_CALIBRATE_VAL);

              case 10:
                osc_calibrate_val = _context7.sent;

                if (osc_calibrate_val !== 0) {
                  period_ms *= osc_calibrate_val;
                }

                this.writeReg32Bit(SYSTEM_INTERMEASUREMENT_PERIOD, period_ms); // VL53L0X_SetInterMeasurementPeriodMilliSeconds() end

                this.writeReg(SYSRANGE_START, 0x04); // VL53L0X_REG_SYSRANGE_MODE_TIMED

                _context7.next = 17;
                break;

              case 16:
                // continuous back-to-back mode
                this.writeReg(SYSRANGE_START, 0x02); // VL53L0X_REG_SYSRANGE_MODE_BACKTOBACK

              case 17:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function startContinuous(_x6) {
        return _startContinuous.apply(this, arguments);
      }

      return startContinuous;
    }()
    /**
     * Stop continuous measurements
     * based on VL53L0X_StopMeasurement()
     */

  }, {
    key: "stopContinuous",
    value: function stopContinuous() {
      this.writeReg(SYSRANGE_START, 0x01); // VL53L0X_REG_SYSRANGE_MODE_SINGLESHOT

      this.writeReg(0xFF, 0x01);
      this.writeReg(0x00, 0x00);
      this.writeReg(0x91, 0x00);
      this.writeReg(0x00, 0x01);
      this.writeReg(0xFF, 0x00);
    }
    /**
     * Returns a range reading in millimeters when continuous mode is active
     * (readRangeSingleMillimeters() also calls this function after starting a
     * single-shot range measurement)
     * @returns {Promise<number>} a Promise which resolves range for continuous mode
     */

  }, {
    key: "readRangeContinuousMillimeters",
    value: function () {
      var _readRangeContinuousMillimeters = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee8() {
        var range;
        return regenerator.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.startTimeout();

              case 1:
                _context8.next = 3;
                return this.readReg(RESULT_INTERRUPT_STATUS);

              case 3:
                _context8.t0 = _context8.sent;
                _context8.t1 = _context8.t0 & 0x07;

                if (!(_context8.t1 === 0)) {
                  _context8.next = 11;
                  break;
                }

                if (!this.checkTimeoutExpired()) {
                  _context8.next = 9;
                  break;
                }

                this.did_timeout = true;
                return _context8.abrupt("return", Promise.reject("timeout read RESULT_INTERRUPT_STATUS: ".concat(this.io_timeout, "ms")));

              case 9:
                _context8.next = 1;
                break;

              case 11:
                _context8.next = 13;
                return this.readReg16Bit(RESULT_RANGE_STATUS + 10);

              case 13:
                range = _context8.sent;
                this.writeReg(SYSTEM_INTERRUPT_CLEAR, 0x01);
                return _context8.abrupt("return", range);

              case 16:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function readRangeContinuousMillimeters() {
        return _readRangeContinuousMillimeters.apply(this, arguments);
      }

      return readRangeContinuousMillimeters;
    }()
    /**
     * Performs a single-shot range measurement and returns the reading in millimeters
     * based on VL53L0X_PerformSingleRangingMeasurement()
     * @returns {Promise<number>} a Promise which resolves range for single-shot mode
     */

  }, {
    key: "readRangeSingleMillimeters",
    value: function () {
      var _readRangeSingleMillimeters = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee9() {
        return regenerator.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.writeReg(0x80, 0x01);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x00, 0x00);
                this.writeReg(0x91, this.stop_variable);
                this.writeReg(0x00, 0x01);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x80, 0x00);
                this.writeReg(SYSRANGE_START, 0x01); // "Wait until start bit has been cleared"

                this.startTimeout();

              case 9:
                _context9.next = 11;
                return this.readReg(SYSRANGE_START);

              case 11:
                _context9.t0 = _context9.sent;

                if (!(_context9.t0 & 0x01)) {
                  _context9.next = 18;
                  break;
                }

                if (!this.checkTimeoutExpired()) {
                  _context9.next = 16;
                  break;
                }

                this.did_timeout = true;
                return _context9.abrupt("return", Promise.reject("timeout read SYSRANGE_START: ".concat(this.io_timeout, "ms")));

              case 16:
                _context9.next = 9;
                break;

              case 18:
                return _context9.abrupt("return", this.readRangeContinuousMillimeters());

              case 19:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function readRangeSingleMillimeters() {
        return _readRangeSingleMillimeters.apply(this, arguments);
      }

      return readRangeSingleMillimeters;
    }()
    /**
     * Return whether a timeout did occur and clear the timeout flag.
     * @returns {boolean} whether a timeout occur or not
     */

  }, {
    key: "timeoutOccurred",
    value: function timeoutOccurred() {
      var tmp = this.did_timeout;
      this.did_timeout = false;
      return tmp;
    }
    /**
     * Get reference SPAD (single photon avalanche diode) count and type
     * based on VL53L0X_get_info_from_device(),
     * but only gets reference SPAD count and type
     * @param {object} info - info of SPAD
     * @param {number} info.count - SPAD count
     * @param {boolean} info.isAperture - SPAD is aperture type or not
     * @returns {Promise<boolean>} whether the info has got or not
     */

  }, {
    key: "getSpadInfo",
    value: function () {
      var _getSpadInfo = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee10(info) {
        var tmp;
        return regenerator.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.writeReg(0x80, 0x01);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x00, 0x00);
                this.writeReg(0xFF, 0x06);
                _context10.t0 = this;
                _context10.next = 7;
                return this.readReg(0x83);

              case 7:
                _context10.t1 = _context10.sent;
                _context10.t2 = _context10.t1 | 0x04;

                _context10.t0.writeReg.call(_context10.t0, 0x83, _context10.t2);

                this.writeReg(0xFF, 0x07);
                this.writeReg(0x81, 0x01);
                this.writeReg(0x80, 0x01);
                this.writeReg(0x94, 0x6b);
                this.writeReg(0x83, 0x00);
                this.startTimeout();

              case 16:
                _context10.next = 18;
                return this.readReg(0x83);

              case 18:
                _context10.t3 = _context10.sent;

                if (!(_context10.t3 === 0x00)) {
                  _context10.next = 24;
                  break;
                }

                if (!this.checkTimeoutExpired()) {
                  _context10.next = 22;
                  break;
                }

                return _context10.abrupt("return", false);

              case 22:
                _context10.next = 16;
                break;

              case 24:
                this.writeReg(0x83, 0x01);
                _context10.next = 27;
                return this.readReg(0x92);

              case 27:
                tmp = _context10.sent;
                info.count = tmp & 0x7f;
                info.isAperture = (tmp >> 7 & 0x01) === 0x01;
                this.writeReg(0x81, 0x00);
                this.writeReg(0xFF, 0x06);
                _context10.t4 = this;
                _context10.next = 35;
                return this.readReg(0x83);

              case 35:
                _context10.t5 = _context10.sent;
                _context10.t6 = ~0x04;
                _context10.t7 = _context10.t5 & _context10.t6;

                _context10.t4.writeReg.call(_context10.t4, 0x83, _context10.t7);

                this.writeReg(0xFF, 0x01);
                this.writeReg(0x00, 0x01);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x80, 0x00);
                return _context10.abrupt("return", true);

              case 44:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getSpadInfo(_x7) {
        return _getSpadInfo.apply(this, arguments);
      }

      return getSpadInfo;
    }()
    /**
     * Get sequence step enables
     * based on VL53L0X_GetSequenceStepEnables()
     * @param {Promise<object>} enables - reading buffer for sequence step enables
     */

  }, {
    key: "getSequenceStepEnables",
    value: function () {
      var _getSequenceStepEnables = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee11(enables) {
        var sequence_config;
        return regenerator.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.readReg(SYSTEM_SEQUENCE_CONFIG);

              case 2:
                sequence_config = _context11.sent;
                enables.tcc = sequence_config >> 4 & 0x1;
                enables.dss = sequence_config >> 3 & 0x1;
                enables.msrc = sequence_config >> 2 & 0x1;
                enables.pre_range = sequence_config >> 6 & 0x1;
                enables.final_range = sequence_config >> 7 & 0x1;

              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getSequenceStepEnables(_x8) {
        return _getSequenceStepEnables.apply(this, arguments);
      }

      return getSequenceStepEnables;
    }() // Get sequence step timeouts
    // based on get_sequence_step_timeout(),
    // but gets all timeouts instead of just the requested one, and also stores
    // intermediate values

  }, {
    key: "getSequenceStepTimeouts",
    value: function () {
      var _getSequenceStepTimeouts = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee12(enables, timeouts) {
        return regenerator.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.getVcselPulsePeriod(VcselPeriodPreRange);

              case 2:
                timeouts.pre_range_vcsel_period_pclks = _context12.sent;
                _context12.next = 5;
                return this.readReg(MSRC_CONFIG_TIMEOUT_MACROP);

              case 5:
                _context12.t0 = _context12.sent;
                timeouts.msrc_dss_tcc_mclks = _context12.t0 + 1;
                timeouts.msrc_dss_tcc_us = this.timeoutMclksToMicroseconds(timeouts.msrc_dss_tcc_mclks, timeouts.pre_range_vcsel_period_pclks);
                _context12.t1 = this;
                _context12.next = 11;
                return this.readReg16Bit(PRE_RANGE_CONFIG_TIMEOUT_MACROP_HI);

              case 11:
                _context12.t2 = _context12.sent;
                timeouts.pre_range_mclks = _context12.t1.decodeTimeout.call(_context12.t1, _context12.t2);
                timeouts.pre_range_us = this.timeoutMclksToMicroseconds(timeouts.pre_range_mclks, timeouts.pre_range_vcsel_period_pclks);
                _context12.next = 16;
                return this.getVcselPulsePeriod(VcselPeriodFinalRange);

              case 16:
                timeouts.final_range_vcsel_period_pclks = _context12.sent;
                _context12.t3 = this;
                _context12.next = 20;
                return this.readReg16Bit(FINAL_RANGE_CONFIG_TIMEOUT_MACROP_HI);

              case 20:
                _context12.t4 = _context12.sent;
                timeouts.final_range_mclks = _context12.t3.decodeTimeout.call(_context12.t3, _context12.t4);

                if (enables.pre_range) {
                  timeouts.final_range_mclks -= timeouts.pre_range_mclks;
                }

                timeouts.final_range_us = this.timeoutMclksToMicroseconds(timeouts.final_range_mclks, timeouts.final_range_vcsel_period_pclks);

              case 24:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getSequenceStepTimeouts(_x9, _x10) {
        return _getSequenceStepTimeouts.apply(this, arguments);
      }

      return getSequenceStepTimeouts;
    }() // Decode sequence step timeout in MCLKs from register value
    // based on VL53L0X_decode_timeout()
    // Note: the original function returned a uint32_t, but the return value is
    // always stored in a uint16_t.

  }, {
    key: "decodeTimeout",
    value: function decodeTimeout(reg_val) {
      // format: "(LSByte * 2^MSByte) + 1"
      return ((reg_val & 0x00FF) << ((reg_val & 0xFF00) >> 8)) + 1;
    } // Encode sequence step timeout register value from timeout in MCLKs
    // based on VL53L0X_encode_timeout()

  }, {
    key: "encodeTimeout",
    value: function encodeTimeout(timeout_mclks) {
      // format: "(LSByte * 2^MSByte) + 1"
      var ls_byte = 0;
      var ms_byte = 0;

      if (timeout_mclks > 0) {
        ls_byte = timeout_mclks - 1;

        while ((ls_byte & 0xFFFFFF00) > 0) {
          ls_byte >>= 1;
          ms_byte++;
        }

        return ms_byte << 8 | ls_byte & 0xFF;
      }

      return 0;
    } // Convert sequence step timeout from MCLKs to microseconds with given VCSEL period in PCLKs
    // based on VL53L0X_calc_timeout_us()

  }, {
    key: "timeoutMclksToMicroseconds",
    value: function timeoutMclksToMicroseconds(timeout_period_mclks, vcsel_period_pclks) {
      var macro_period_ns = calcMacroPeriod(vcsel_period_pclks);
      return (timeout_period_mclks * macro_period_ns + 500) / 1000;
    } // Convert sequence step timeout from microseconds to MCLKs with given VCSEL period in PCLKs
    // based on VL53L0X_calc_timeout_mclks()

  }, {
    key: "timeoutMicrosecondsToMclks",
    value: function timeoutMicrosecondsToMclks(timeout_period_us, vcsel_period_pclks) {
      var macro_period_ns = calcMacroPeriod(vcsel_period_pclks);
      return (timeout_period_us * 1000 + macro_period_ns / 2) / macro_period_ns;
    } // based on VL53L0X_perform_single_ref_calibration()

  }, {
    key: "performSingleRefCalibration",
    value: function () {
      var _performSingleRefCalibration = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee13(vhv_init_byte) {
        return regenerator.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.writeReg(SYSRANGE_START, 0x01 | vhv_init_byte); // VL53L0X_REG_SYSRANGE_MODE_START_STOP

                this.startTimeout();

              case 2:
                _context13.next = 4;
                return this.readReg(RESULT_INTERRUPT_STATUS);

              case 4:
                _context13.t0 = _context13.sent;
                _context13.t1 = _context13.t0 & 0x07;

                if (!(_context13.t1 === 0)) {
                  _context13.next = 11;
                  break;
                }

                if (!this.checkTimeoutExpired()) {
                  _context13.next = 9;
                  break;
                }

                return _context13.abrupt("return", false);

              case 9:
                _context13.next = 2;
                break;

              case 11:
                this.writeReg(SYSTEM_INTERRUPT_CLEAR, 0x01);
                this.writeReg(SYSRANGE_START, 0x00);
                return _context13.abrupt("return", true);

              case 14:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function performSingleRefCalibration(_x11) {
        return _performSingleRefCalibration.apply(this, arguments);
      }

      return performSingleRefCalibration;
    }()
  }]);

  return VL53L0X;
}();

/**
 * acceleration sensor ADX345 API
 */
// register addresses
var ADXL345_ADDR = 0x53;
var ADXL345_ID = 0xE5;
var DATA_FORMAT = 0x31;
var POWER_CTL = 0x2D;
var DATA_X0 = 0x32;
var FULL_RES_16G = 0x0B;
var MEASURE = 0x08;
/**
 * This class is representing a ADXL345.
 */

var ADXL345 = /*#__PURE__*/function () {
  /**
   * Constructor of ADXL345 instance.
   * @param {FirmataBoard} board - connecting firmata board
   */
  function ADXL345(board) {
    _classCallCheck(this, ADXL345);

    /**
     * Connecting firmata board
     * @type {import('./firmata-board').default}
     */
    this.board = board;
    /**
     * I2C address
     * @type {number}
     */

    this.address = ADXL345_ADDR;
    /**
     * Timeout for readings in milliseconds.
     * @type {number}
     */

    this.timeout = 2000;
    /**
     * Scale factor for raw data of acceleration
     */

    this.scale = {
      x: 0.0392266,
      // =(4/1000*9.80665)
      y: 0.0392266,
      z: 0.0392266
    };
  }
  /**
   * Initialize the sensor
   * @returns {Promise} a Promise which resolves when the sensor was initialized
   */


  _createClass(ADXL345, [{
    key: "init",
    value: function init() {
      var _this = this;

      return this.readID().then(function (id) {
        if (id !== ADXL345_ID) return Promise.reject("0x".concat(_this.address.toString(16), " is not ADXL345"));

        _this.board.i2cWrite(_this.address, DATA_FORMAT, FULL_RES_16G);

        _this.board.i2cWrite(_this.address, POWER_CTL, MEASURE);
      });
    }
    /**
     * Read ID of a ADXL345
     * @returns {Promise} a Promise which resolves ID
     */

  }, {
    key: "readID",
    value: function readID() {
      return this.board.i2cReadOnce(this.address, 0x00, 1, this.timeout).then(function (data) {
        return data[0];
      });
    }
    /**
     * Return latest acceleration data
     * @returns {promise<{x: number, y: number, z: number}>} a Promise which resolves acceleration
     */

  }, {
    key: "getAcceleration",
    value: function getAcceleration() {
      var _this2 = this;

      return this.board.i2cReadOnce(this.address, DATA_X0, 6, this.timeout).then(function (data) {
        var dataView = new DataView(new Uint8Array(data).buffer);
        var acceleration = {};
        acceleration.x = dataView.getInt16(0, true) * _this2.scale.x;
        acceleration.y = dataView.getInt16(2, true) * _this2.scale.y;
        acceleration.z = dataView.getInt16(4, true) * _this2.scale.z;
        return acceleration;
      });
    }
  }]);

  return ADXL345;
}();

var integer64From = function integer64From(value, unsigned) {
  if (!value) return unsigned ? Long.UZERO : Long.ZERO;
  var radix = 10;

  if (typeof value === 'string') {
    value = value.trim();
    if (value.length === 0) return unsigned ? Long.UZERO : Long.ZERO;
    var sign = '';

    if (value[0] === '-') {
      sign = '-';
      value = value.slice(1).trim();
    }

    if (value.includes('0x')) {
      radix = 16;
      value = value.slice(2);
    }

    if (value.includes('0b')) {
      radix = 2;
      value = value.slice(2);
    }

    return Long.fromString(sign + value, unsigned, radix);
  }

  return Long.fromValue(value, unsigned);
};

var numericArrayToString = function numericArrayToString(array) {
  return array.join(', ');
};

var readAsNumericArray = function readAsNumericArray(stringExp) {
  if (typeof stringExp !== 'string') return [Number(stringExp)];
  stringExp = stringExp.trim();
  if (stringExp.length === 0) return [];
  stringExp = stringExp.replaceAll(/[[|\]|"]/g, '');
  var array = [];

  if (stringExp.includes(',')) {
    stringExp.split(',').forEach(function (numberString) {
      numberString = numberString.trim(); // remove blank items

      if (numberString.length !== 0) {
        array.push(Number(numberString));
      }
    });
  } else {
    stringExp.split(/\s+/).forEach(function (item) {
      array.push(Number(item));
    });
  }

  return array;
};
/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {object} messageData - format-message object
 * @returns {string} - message for the locale
 */


var formatMessage = function formatMessage(messageData) {
  return messageData.defaultMessage;
};
/**
 * Setup format-message for this extension.
 */


var setupTranslations = function setupTranslations() {
  var localeSetup = formatMessage.setup();

  if (localeSetup && localeSetup.translations[localeSetup.locale]) {
    Object.assign(localeSetup.translations[localeSetup.locale], translations[localeSetup.locale]);
  }
};

var EXTENSION_ID = 'g2s';
/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */

var extensionURL = 'https://tfabworks.github.io/xcx-g2s/dist/g2s.mjs';
/**
 * Scratch 3.0 blocks for example of Xcratch.
 */

var ExtensionBlocks = /*#__PURE__*/function () {
  /**
   * Construct a set of blocks for Grove.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  function ExtensionBlocks(runtime) {
    var _this = this;

    _classCallCheck(this, ExtensionBlocks);

    /**
     * The Scratch 3.0 runtime.
     * @type {Runtime}
     */
    this.runtime = runtime;

    if (runtime.formatMessage) {
      // Replace 'formatMessage' to a formatter which is used in the runtime.
      formatMessage = runtime.formatMessage;
    }
    /**
     * Current connected board object with firmata protocol
     * @type {FirmataBoard}
     */


    this.board = null;
    /**
     * Distance sensor VL53L0X
     * @type {VL53L0X}
     */

    this.vl53l0x = null;
    /**
     * Manager of firmata boards
     * @type {FirmataConnector}
     */

    this.firmataConnector = getFirmataConnector(runtime);
    this.firmataConnector.addListener(FirmataConnector.BOARD_ADDED, function () {
      return _this.updateBoard();
    });
    this.firmataConnector.addListener(FirmataConnector.BOARD_REMOVED, function () {
      return _this.updateBoard();
    });
    /**
     * state holder of the all pins
     */

    this.pins = [];
    [6, 9, 10, 11, 14, 15, 16, 17].forEach(function (pin) {
      _this.pins[pin] = {};
    });
    this.serialPortOptions = {
      filters: [{
        usbVendorId: 0x04D8,
        usbProductId: 0xE83A
      }, // Licensed for AkaDako
      {
        usbVendorId: 0x04D8,
        usbProductId: 0x000A
      }, // Dev board
      {
        usbVendorId: 0x04D9,
        usbProductId: 0xB534
      } // Use in the future
      ]
    }; // register to call scan()/connect()

    this.runtime.registerPeripheralExtension(EXTENSION_ID, this);
    this.runtime.on('PROJECT_STOP_ALL', function () {
      _this.neoPixelClear();
    });
  }
  /**
   * Update connected board
   */


  _createClass(ExtensionBlocks, [{
    key: "updateBoard",
    value: function updateBoard() {
      if (this.board && this.board.isConnected()) return;
      var prev = this.board;
      this.board = this.firmataConnector.findBoard(this.serialPortOptions);
      if (prev === this.board) return;
      this.vl53l0x = null;
      this.adxl345 = null;
    }
    /**
     * Called by the runtime when user wants to scan for a peripheral.
     * @returns {Promise} - a Promise which resolves when a board was connected
     */

  }, {
    key: "scan",
    value: function scan() {
      return this.connectBoard();
    }
    /**
     * Called by the runtime when user wants to cancel scanning or the peripheral was disconnected.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.disconnectBoard();
    }
  }, {
    key: "isConnected",
    value: function isConnected() {
      if (!this.board) return false;
      return this.board.isReady();
    }
  }, {
    key: "connectBoard",
    value: function connectBoard() {
      var _this2 = this;

      if (this.board && this.board.isConnected()) return; // Already connected

      return this.firmataConnector.connect(EXTENSION_ID, this.serialPortOptions).then(function (connectedBoard) {
        _this2.runtime.emit(_this2.runtime.constructor.PERIPHERAL_CONNECTED, {
          name: connectedBoard.name,
          path: connectedBoard.portInfo
        });

        return 'connected';
      }).catch(function (reason) {
        if (reason) {
          console.log(reason);
          return reason;
        }

        return "fail to connect port: ".concat(JSON.stringify(_this2.serialPortOptions));
      });
    }
  }, {
    key: "disconnectBoard",
    value: function disconnectBoard() {
      if (!this.board) return;
      return this.board.disconnect();
    }
  }, {
    key: "boardStateChanged",
    value: function boardStateChanged(args) {
      return args.STATE === 'connected' === this.isConnected();
    }
    /**
     * Get the digital level of the pin
     * @param {number} pin - pin number to get
     * @returns {Promise<number>} a Promise which resolves digital value [0|1] of the pin
     */

  }, {
    key: "getDigitalLevel",
    value: function getDigitalLevel(pin) {
      if (!this.isConnected()) return Promise.resolve(0);
      return this.board.updateDigitalInput(pin).catch(function (reason) {
        console.log("digitalRead(".concat(pin, ") was rejected by ").concat(reason));
        return false;
      });
    }
    /**
     * Whether the current level of the connector is HIGHT as digital input.
     * @param {object} args - the block's arguments.
     * @param {number} args.CONNECTOR - pin number of the connector
     * @returns {Promise} a Promise which resolves boolean when the response was returned
     */

  }, {
    key: "digitalIsHigh",
    value: function digitalIsHigh(args) {
      if (!this.isConnected()) return Promise.resolve(false);
      var pin = parseInt(args.CONNECTOR, 10);
      return this.getDigitalLevel(pin).then(function (readData) {
        return !!readData;
      });
    }
    /**
     * The level of digital A1 connector
     * @returns {Promise} - a Promise which resolves digital level of the pin
     */

  }, {
    key: "digitalLevelA1",
    value: function digitalLevelA1() {
      return this.getDigitalLevel(10);
    }
    /**
     * The level of digital A2 connector
     * @returns {Promise} - a Promise which resolves digital level of the pin
     */

  }, {
    key: "digitalLevelA2",
    value: function digitalLevelA2() {
      return this.getDigitalLevel(11);
    }
    /**
     * The level of digital B1 connector
     * @returns {Promise} - a Promise which resolves digital level of the pin
     */

  }, {
    key: "digitalLevelB1",
    value: function digitalLevelB1() {
      return this.getDigitalLevel(6);
    }
    /**
     * The level of digital B2 connector
     * @returns {Promise} - a Promise which resolves digital level of the pin
     */

  }, {
    key: "digitalLevelB2",
    value: function digitalLevelB2() {
      return this.getDigitalLevel(9);
    }
    /**
     * Detect the edge as digital level of the connector for HAT block.
     * @param {object} args - the block's arguments.
     * @param {number} args.CONNECTOR - pin number of the connector
     * @param {boolean} args.LEVEL - level to detect edge
     * @returns {boolean} is the level same as the current of the connector
     */

  }, {
    key: "digitalLevelChanged",
    value: function digitalLevelChanged(args) {
      if (!this.isConnected()) return false;
      var pin = parseInt(args.CONNECTOR, 10);
      var rise = cast.toBoolean(args.LEVEL);
      this.board.updateDigitalInput(pin) // update for the next call
      .catch(function (reason) {
        console.log("digitalRead(".concat(pin, ") was rejected by ").concat(reason));
      });
      return rise === !!this.board.pins[pin].value; // Do NOT return Promise for the hat execute correctly.
    }
    /**
     * Set input bias of the connector.
     * @param {object} args - the block's arguments.
     * @param {string} args.PIN - number of the pin
     * @param {string} args.BIAS - input bias of the pin [none | pullUp]
     * @returns {Promise} a Promise which resolves when the message was sent
     */

  }, {
    key: "inputBiasSet",
    value: function inputBiasSet(args) {
      if (!this.isConnected()) return;
      var pin = parseInt(args.PIN, 10);
      var pullUp = args.BIAS === 'pullUp';
      return this.board.setInputBias(pin, pullUp);
    }
    /**
     * Set the connector to the level as digital output.
     * @param {object} args - the block's arguments.
     * @param {number} args.CONNECTOR - pin number of the connector
     * @param {boolean | string | number} args.LEVEL - level to be set
     * @returns {Promise} a Promise which resolves when the message was sent
     */

  }, {
    key: "digitalLevelSet",
    value: function digitalLevelSet(args) {
      if (!this.isConnected()) return;
      var pin = parseInt(args.CONNECTOR, 10);
      var value = cast.toBoolean(args.LEVEL) ? this.board.HIGH : this.board.LOW;
      this.board.pinMode(pin, this.board.MODES.OUTPUT);
      return this.board.digitalWrite(pin, value);
    }
    /**
     * The level (0...100) of the connector as analog input.
     * @param {number} analogPin - pin number of the connector
     * @returns {Promise} - a Promise which resolves analog level when the response was returned
     */

  }, {
    key: "getAnalogLevel",
    value: function getAnalogLevel(analogPin) {
      if (!this.isConnected()) return Promise.resolve(0);
      return this.board.updateAnalogInput(analogPin).then(function (raw) {
        return Math.round(raw / 1023 * 1000) / 10;
      }).catch(function (reason) {
        console.log("analogRead(".concat(analogPin, ") was rejected by ").concat(reason));
        return 0;
      });
    }
    /**
     * The level of analog A1 connector
     * @returns {Promise} - a Promise which resolves analog level when the response was returned
     */

  }, {
    key: "analogLevelA1",
    value: function analogLevelA1() {
      return this.getAnalogLevel(0);
    }
    /**
     * The level of analog A2 connector
     * @returns {Promise} - a Promise which resolves analog level when the response was returned
     */

  }, {
    key: "analogLevelA2",
    value: function analogLevelA2() {
      return this.getAnalogLevel(1);
    }
    /**
     * The level of analog B1 connector
     * @returns {Promise} - a Promise which resolves analog level when the response was returned
     */

  }, {
    key: "analogLevelB1",
    value: function analogLevelB1() {
      return this.getAnalogLevel(2);
    }
    /**
     * The level of analog A1 connector
     * @returns {Promise} - a Promise which resolves analog level when the response was returned
     */

  }, {
    key: "analogLevelB2",
    value: function analogLevelB2() {
      return this.getAnalogLevel(3);
    }
    /**
     * Set the connector to power (%) as PWM.
     * @param {object} args - the block's arguments.
     * @param {number} args.CONNECTOR - pin number of the connector
     * @param {string | number} args.LEVEL - power (%) of PWM
     * @returns {Promise} a Promise which resolves when the message was sent
     */

  }, {
    key: "analogLevelSet",
    value: function analogLevelSet(args) {
      if (!this.isConnected()) return;
      var pin = parseInt(args.CONNECTOR, 10);
      var percent = Math.min(Math.max(cast.toNumber(args.LEVEL), 0), 100);
      var value = Math.round(this.board.RESOLUTION.PWM * (percent / 100));
      this.board.pinMode(pin, this.board.MODES.PWM);
      return this.board.pwmWrite(pin, value);
    }
    /**
     * Turn the servo motor to the degrees.
     * @param {object} args - the block's arguments.
     * @param {number} args.CONNECTOR - pin number of the connector
     * @param {number} args.DEGREE - degrees to the servo to turn
     * @returns {Promise} a Promise which resolves when the message was sent
     */

  }, {
    key: "servoTurn",
    value: function servoTurn(args) {
      var pin = parseInt(args.CONNECTOR, 10);
      var value = cast.toNumber(args.DEGREE);
      this.board.pinMode(pin, this.board.MODES.SERVO);
      return this.board.servoWrite(pin, value);
    }
    /**
     * Write data to register
     * @param {object} args - the block's arguments.
     * @param {number} args.ADDRESS - I2C address
     * @param {number} args.REGISTER - register which write to
     * @param {Array<number>} args.DATA - bytes to be written
     * @returns {Promise} a Promise which resolves when the message was sent
     */

  }, {
    key: "i2cWrite",
    value: function i2cWrite(args) {
      if (!this.isConnected()) return;
      var address = Number(args.ADDRESS);
      var register = Number(args.REGISTER);
      var data = readAsNumericArray(args.DATA);
      return this.board.i2cWrite(address, register, data);
    }
  }, {
    key: "i2cReadOnce",
    value: function i2cReadOnce(args) {
      if (!this.isConnected()) return '';
      var address = Number(args.ADDRESS);
      var register = Number(args.REGISTER);
      var length = parseInt(cast.toNumber(args.LENGTH), 10);
      return this.board.i2cReadOnce(address, register, length).then(function (data) {
        return numericArrayToString(data);
      }).catch(function (reason) {
        console.log("i2cReadOnce(".concat(address, ", ").concat(register, ", ").concat(length, ") was rejected by ").concat(reason));
        return '';
      });
    }
    /**
     * Reset OneWire modules on the pin
     * @param {object} args - the block's arguments.
     * @param {number} args.CONNECTOR - pin number of the connector
     * @returns {Promise} a Promise which resolves when the message was sent
     */

  }, {
    key: "oneWireReset",
    value: function oneWireReset(args) {
      if (!this.isConnected()) return;
      var pin = parseInt(args.CONNECTOR, 10);
      return this.board.sendOneWireReset(pin);
    }
  }, {
    key: "oneWireWrite",
    value: function oneWireWrite(args) {
      if (!this.isConnected()) return;
      var pin = parseInt(args.CONNECTOR, 10);
      var data = readAsNumericArray(args.DATA);
      return this.board.oneWireWrite(pin, data).catch(function (error) {
        console.log(error);
        return error.message ? error.message : error;
      });
    }
    /**
     * Read on OneWire.
     * @param {object} args - the block's arguments.
     * @param {number} args.CONNECTOR - pin number of the connector
     * @param {BlockUtility} util - utility object provided by the runtime.
     * @returns {Promise<string>} return a Promise which will resolve with read data
     */

  }, {
    key: "oneWireRead",
    value: function oneWireRead(args) {
      if (!this.isConnected()) return Promise.resolve('');
      var pin = parseInt(args.CONNECTOR, 10);
      var length = parseInt(cast.toNumber(args.LENGTH), 10);
      return this.board.oneWireRead(pin, length).then(function (readData) {
        return numericArrayToString(readData);
      }).catch(function (reason) {
        console.log("oneWireRead(".concat(pin, ", ").concat(length, ") was rejected by ").concat(reason));
        return '';
      });
    }
    /**
     * Write then read on OneWire.
     * @param {object} args - the block's arguments.
     * @param {number} args.CONNECTOR - pin number of the connector
     * @param {BlockUtility} util - utility object provided by the runtime.
     * @returns {Promise<string>} return a Promise which will resolve with read data
     */

  }, {
    key: "oneWireWriteAndRead",
    value: function oneWireWriteAndRead(args) {
      if (!this.isConnected()) return Promise.resolve('');
      var pin = parseInt(args.CONNECTOR, 10);
      var data = readAsNumericArray(args.DATA);
      var readLength = parseInt(cast.toNumber(args.LENGTH), 10);
      return this.board.oneWireWriteAndRead(pin, data, readLength).then(function (readData) {
        return numericArrayToString(readData);
      }).catch(function (reason) {
        console.log("oneWireWriteAndRead(".concat(pin, ", ").concat(data, ", ").concat(readLength, ") was rejected by ").concat(reason));
        return '';
      });
    }
  }, {
    key: "neoPixelConfigStrip",
    value: function neoPixelConfigStrip(args) {
      if (!this.isConnected()) return Promise.resolve();
      var pin = parseInt(args.CONNECTOR, 10);
      var length = parseInt(cast.toNumber(args.LENGTH), 10);
      return this.board.neoPixelConfigStrip(pin, length);
    }
  }, {
    key: "neoPixelShow",
    value: function neoPixelShow() {
      if (!this.isConnected()) return Promise.resolve();
      return this.board.neoPixelShow();
    }
  }, {
    key: "neoPixelSetColor",
    value: function neoPixelSetColor(args) {
      if (!this.isConnected()) return Promise.resolve();
      var index = parseInt(cast.toNumber(args.POSITION), 10) - 1;
      var r = Math.max(0, Math.min(255, parseInt(cast.toNumber(args.RED), 10)));
      var g = Math.max(0, Math.min(255, parseInt(cast.toNumber(args.GREEN), 10)));
      var b = Math.max(0, Math.min(255, parseInt(cast.toNumber(args.BLUE), 10)));
      return this.board.neoPixelSetColor(index, [r, g, b]);
    }
  }, {
    key: "neoPixelClear",
    value: function neoPixelClear() {
      if (!this.isConnected()) return Promise.resolve();
      return this.board.neoPixelClear();
    }
  }, {
    key: "measureDistanceVL53L",
    value: function () {
      var _measureDistanceVL53L = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
        var _this3 = this;

        var newSensor, found, distance;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.isConnected()) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", 0);

              case 2:
                if (this.vl53l0x) {
                  _context.next = 14;
                  break;
                }

                newSensor = new VL53L0X(this.board);
                _context.next = 6;
                return newSensor.init(true);

              case 6:
                found = _context.sent;

                if (found) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", 0);

              case 9:
                _context.next = 11;
                return newSensor.startContinuous().catch(function (reason) {
                  console.log("fail to VL53L0X.startContinuous() by ".concat(reason));
                  newSensor = null;
                });

              case 11:
                if (newSensor) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt("return", 0);

              case 13:
                this.vl53l0x = newSensor;

              case 14:
                _context.next = 16;
                return this.vl53l0x.readRangeContinuousMillimeters().catch(function (reason) {
                  console.log("VL53L0X.readRangeContinuousMillimeters() was rejected by ".concat(reason));
                  _this3.vl53l0x = null;
                  return 0;
                });

              case 16:
                distance = _context.sent;
                return _context.abrupt("return", distance);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function measureDistanceVL53L() {
        return _measureDistanceVL53L.apply(this, arguments);
      }

      return measureDistanceVL53L;
    }()
    /**
     * Get acceleration for the axis by ADXL345
     * @param {object} args - the block's arguments.
     * @param {number} args.AXIS - axis to get
     * @returns {Promise<number>} return a Promise which resolves acceleration
     */

  }, {
    key: "getAccelerationADXL345",
    value: function () {
      var _getAccelerationADXL = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(args) {
        var _this4 = this;

        var axis, newSensor;
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.isConnected()) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", Promise.resolve(0));

              case 2:
                axis = args.AXIS;

                if (this.adxl345) {
                  _context2.next = 15;
                  break;
                }

                newSensor = new ADXL345(this.board);
                _context2.prev = 5;
                _context2.next = 8;
                return newSensor.init();

              case 8:
                _context2.next = 14;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](5);
                // fail to create instance
                console.log(_context2.t0);
                return _context2.abrupt("return", Promise.resolve(0));

              case 14:
                this.adxl345 = newSensor;

              case 15:
                return _context2.abrupt("return", this.adxl345.getAcceleration().then(function (acceleration) {
                  if (axis === 'absolute') {
                    return Math.round(Math.sqrt(Math.pow(acceleration.x, 2) + Math.pow(acceleration.y, 2) + Math.pow(acceleration.z, 2)) * 100) / 100;
                  }

                  return acceleration[axis];
                }).catch(function (reason) {
                  console.log("ADXL345.getAcceleration() was rejected by ".concat(reason));
                  _this4.adxl345 = null;
                  return 0;
                }));

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 10]]);
      }));

      function getAccelerationADXL345(_x) {
        return _getAccelerationADXL.apply(this, arguments);
      }

      return getAccelerationADXL345;
    }()
  }, {
    key: "numberAtIndex",
    value: function numberAtIndex(args) {
      var array = readAsNumericArray(args.ARRAY);
      var index = Number(args.INDEX);

      if (isNaN(index)) {
        index = 0;
      }

      index = Math.min(array.length, Math.max(1, index));
      index = Math.floor(index);
      return array[index - 1];
    }
  }, {
    key: "spliceNumbers",
    value: function spliceNumbers(args) {
      var array = readAsNumericArray(args.ARRAY);
      var index = Number(args.INDEX);

      if (isNaN(index)) {
        index = 0;
      }

      index = Math.floor(index);
      var deleteCount = Number(args.DELETE);

      if (isNaN(deleteCount)) {
        deleteCount = 0;
      }

      deleteCount = Math.min(array.length, Math.max(0, deleteCount));
      deleteCount = Math.floor(deleteCount);
      var newNumbers = readAsNumericArray(args.INSERT);
      array.splice.apply(array, [index > 0 ? index - 1 : index, deleteCount].concat(_toConsumableArray(newNumbers)));
      return numericArrayToString(array);
    }
  }, {
    key: "lengthOfNumbers",
    value: function lengthOfNumbers(args) {
      var array = readAsNumericArray(args.ARRAY);
      return array.length;
    }
  }, {
    key: "readBytesAs",
    value: function readBytesAs(args) {
      try {
        var array = readAsNumericArray(args.ARRAY);
        var buffer = new Uint8Array(array).buffer;
        var dataView = new DataView(buffer);
        var little = args.ENDIAN === 'little';
        var result = [];

        if (args.TYPE === 'Int16') {
          if (array.length < 2) return '';

          for (var index = 0; index < Math.floor(array.length / 2); index++) {
            var element = dataView.getInt16(index * 2, little);
            result[index] = element;
          }

          return numericArrayToString(result);
        }

        if (args.TYPE === 'Uint16') {
          if (array.length < 2) return '';

          for (var _index = 0; _index < Math.floor(array.length / 2); _index++) {
            var _element = dataView.getUint16(_index * 2, little);

            result[_index] = _element;
          }

          return numericArrayToString(result);
        }
      } catch (error) {
        console.log(error);
      }

      return '';
    }
  }, {
    key: "int64Operation",
    value: function int64Operation(args) {
      var op = args.OP;
      var left = integer64From(args.LEFT);
      var right = integer64From(args.RIGHT);

      if (op === '＋') {
        return left.add(right).toString(10);
      }

      if (op === '－') {
        return left.subtract(right).toString(10);
      }

      if (op === '✕') {
        return left.multiply(right).toString(10);
      }

      if (op === '÷') {
        return left.divide(right).toString(10);
      }

      if (op === 'mod') {
        return left.modulo(right).toString(10);
      }
    }
  }, {
    key: "bitOperation",
    value: function bitOperation(args) {
      var op = args.OP;
      var left = integer64From(args.LEFT);
      var right = integer64From(args.RIGHT);

      if (op === '<<') {
        return left.shiftLeft(right).toString(10);
      }

      if (op === '>>') {
        return left.shiftRight(right).toString(10);
      }

      if (op === '&') {
        return left.and(right).toString(10);
      }

      if (op === '|') {
        return left.or(right).toString(10);
      }

      if (op === '^') {
        return left.xor(right).toString(10);
      }
    }
  }, {
    key: "bitNot",
    value: function bitNot(args) {
      var bits = integer64From(args.VALUE);
      return bits.not().toString();
    }
    /**
     * @returns {object} metadata for this extension and its blocks.
     */

  }, {
    key: "getInfo",
    value: function getInfo() {
      setupTranslations();
      return {
        id: ExtensionBlocks.EXTENSION_ID,
        name: ExtensionBlocks.EXTENSION_NAME,
        extensionURL: ExtensionBlocks.extensionURL,
        blockIconURI: img,
        showStatusButton: true,
        blocks: [{
          opcode: 'connectBoard',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.connectBoard',
            default: 'connect board',
            description: 'open serial port and connect a board'
          }),
          arguments: {}
        }, {
          opcode: 'disconnectBoard',
          blockType: blockType.COMMAND,
          blockAllThreads: false,
          text: formatMessage({
            id: 'g2s.disconnectBoard',
            default: 'disconnect board',
            description: 'disconnect the board'
          }),
          arguments: {}
        }, {
          opcode: 'isConnected',
          blockType: blockType.BOOLEAN,
          text: formatMessage({
            id: 'g2s.isConnected',
            default: 'board is connected',
            description: 'firmata board is connected'
          }),
          arguments: {}
        }, {
          opcode: 'boardStateChanged',
          blockType: blockType.HAT,
          text: formatMessage({
            id: 'g2s.boardStateChanged',
            default: 'When board is [STATE]',
            description: 'catch event when the board state was changed'
          }),
          arguments: {
            STATE: {
              type: argumentType.STRING,
              menu: 'boardStateMenu'
            }
          }
        }, '---', {
          opcode: 'analogLevelA1',
          blockType: blockType.REPORTER,
          disableMonitor: false,
          text: formatMessage({
            id: 'g2s.analogLevelA1',
            default: 'level of analog A1',
            description: 'report analog level of the connector'
          }),
          arguments: {}
        }, {
          opcode: 'analogLevelA2',
          blockType: blockType.REPORTER,
          disableMonitor: false,
          text: formatMessage({
            id: 'g2s.analogLevelA2',
            default: 'level of analog A2',
            description: 'report analog level of the connector'
          }),
          arguments: {}
        }, {
          opcode: 'analogLevelB1',
          blockType: blockType.REPORTER,
          disableMonitor: false,
          text: formatMessage({
            id: 'g2s.analogLevelB1',
            default: 'level of analog B1',
            description: 'report analog level of the connector'
          }),
          arguments: {}
        }, {
          opcode: 'analogLevelB2',
          blockType: blockType.REPORTER,
          disableMonitor: false,
          text: formatMessage({
            id: 'g2s.analogLevelB2',
            default: 'level of analog B2',
            description: 'report analog level of the connector'
          }),
          arguments: {}
        }, '---', {
          opcode: 'digitalLevelA1',
          blockType: blockType.REPORTER,
          disableMonitor: false,
          text: formatMessage({
            id: 'g2s.digitalLevelA1',
            default: 'level of digital A1',
            description: 'report digital level of the connector'
          }),
          arguments: {}
        }, {
          opcode: 'digitalLevelA2',
          blockType: blockType.REPORTER,
          disableMonitor: false,
          text: formatMessage({
            id: 'g2s.digitalLevelA2',
            default: 'level of digital A2',
            description: 'report digital level of the connector'
          }),
          arguments: {}
        }, {
          opcode: 'digitalLevelB1',
          blockType: blockType.REPORTER,
          disableMonitor: false,
          text: formatMessage({
            id: 'g2s.digitalLevelB1',
            default: 'level of digital B1',
            description: 'report digital level of the connector'
          }),
          arguments: {}
        }, {
          opcode: 'digitalLevelB2',
          blockType: blockType.REPORTER,
          disableMonitor: false,
          text: formatMessage({
            id: 'g2s.digitalLevelB2',
            default: 'level of digital B2',
            description: 'report digital level of the connector'
          }),
          arguments: {}
        }, '---', {
          opcode: 'digitalIsHigh',
          blockType: blockType.BOOLEAN,
          text: formatMessage({
            id: 'g2s.digitalIsHigh',
            default: '[CONNECTOR] is HIGH',
            description: 'whether the digital level of the connector is high or not'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            }
          }
        }, {
          opcode: 'digitalLevelChanged',
          blockType: blockType.HAT,
          text: formatMessage({
            id: 'g2s.digitalLevelChanged',
            default: 'When [CONNECTOR] is [LEVEL]',
            description: 'catch pulse rise/fall of the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            },
            LEVEL: {
              type: argumentType.STRING,
              menu: 'digitalLevelMenu'
            }
          }
        }, {
          opcode: 'inputBiasSet',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.inputBiasSet',
            default: '[PIN] bias [BIAS]',
            description: 'set bias of the connector for g2s'
          }),
          arguments: {
            PIN: {
              type: argumentType.STRING,
              menu: 'inputPinsMenu'
            },
            BIAS: {
              type: argumentType.STRING,
              menu: 'inputBiasMenu'
            }
          }
        }, {
          opcode: 'digitalLevelSet',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.digitalLevelSet',
            default: '[CONNECTOR] to digital [LEVEL]',
            description: 'set digital level of the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            },
            LEVEL: {
              type: argumentType.STRING,
              menu: 'digitalLevelMenu'
            }
          }
        }, {
          opcode: 'analogLevelSet',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.analogLevelSet',
            default: '[CONNECTOR] to analog [LEVEL]',
            description: 'set analog level of the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'pwmConnectorMenu'
            },
            LEVEL: {
              type: argumentType.NUMBER,
              defaultValue: 0
            }
          }
        }, '---', {
          opcode: 'servoTurn',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.servoTurn',
            default: 'Servo [CONNECTOR] turn [DEGREE]',
            description: 'turn servo motor'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            },
            DEGREE: {
              type: argumentType.ANGLE
            }
          }
        }, '---', {
          opcode: 'i2cWrite',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.i2cWrite',
            default: 'I2C write on [ADDRESS] register [REGISTER] with [DATA]',
            description: 'write I2C data to the connector'
          }),
          arguments: {
            ADDRESS: {
              type: argumentType.STRING,
              defaultValue: '0x00'
            },
            REGISTER: {
              type: argumentType.STRING,
              defaultValue: '0x00'
            },
            DATA: {
              type: argumentType.STRING,
              defaultValue: '0x00, 0x00'
            }
          }
        }, {
          opcode: 'i2cReadOnce',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.i2cReadOnce',
            default: 'I2C read [LENGTH] bytes from [ADDRESS] register [REGISTER]',
            description: 'read I2C data from the connector'
          }),
          arguments: {
            ADDRESS: {
              type: argumentType.STRING,
              defaultValue: '0x00'
            },
            REGISTER: {
              type: argumentType.STRING,
              defaultValue: '0x00'
            },
            LENGTH: {
              type: argumentType.NUMBER,
              defaultValue: 1
            }
          }
        }, '---', {
          opcode: 'oneWireReset',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.oneWireReset',
            default: 'reset OneWire [CONNECTOR]',
            description: 'Reset OneWire on the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            }
          }
        }, {
          opcode: 'oneWireWrite',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.oneWireWrite',
            default: 'OneWire [CONNECTOR] write [DATA]',
            description: 'write OneWire data to the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            },
            DATA: {
              type: argumentType.STRING,
              defaultValue: '0x00, 0x00'
            }
          }
        }, {
          opcode: 'oneWireRead',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.oneWireRead',
            default: 'OneWire [CONNECTOR] read [LENGTH] bytes',
            description: 'read OneWire data from the device on the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            },
            LENGTH: {
              type: argumentType.NUMBER,
              defaultValue: 1
            }
          }
        }, {
          opcode: 'oneWireWriteAndRead',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.oneWireWriteAndRead',
            default: 'OneWire [CONNECTOR] write [DATA] then read [LENGTH] bytes',
            description: 'write OneWire data then read at the device on the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            },
            DATA: {
              type: argumentType.STRING,
              defaultValue: '0x00, 0x00'
            },
            LENGTH: {
              type: argumentType.NUMBER,
              defaultValue: 1
            }
          }
        }, '---', {
          opcode: 'neoPixelConfigStrip',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.neoPixelConfigStrip',
            default: 'full color LED [CONNECTOR] length [LENGTH]',
            description: 'configure full color LED on the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            },
            LENGTH: {
              type: argumentType.NUMBER,
              defaultValue: '16'
            }
          }
        }, {
          opcode: 'neoPixelSetColor',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.neoPixelSetColor',
            default: 'full color LED [POSITION] R [RED] G [GREEN] B [BLUE]',
            description: 'set full color LED color'
          }),
          arguments: {
            POSITION: {
              type: argumentType.NUMBER,
              defaultValue: '1'
            },
            RED: {
              type: argumentType.NUMBER,
              defaultValue: '255'
            },
            GREEN: {
              type: argumentType.NUMBER,
              defaultValue: '255'
            },
            BLUE: {
              type: argumentType.NUMBER,
              defaultValue: '255'
            }
          }
        }, {
          opcode: 'neoPixelShow',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.neoPixelShow',
            default: 'full color LED show',
            description: 'show full color LED'
          }),
          arguments: {}
        }, {
          opcode: 'neoPixelClear',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.neoPixelClear',
            default: 'full color LED clear',
            description: 'clear full color LED'
          }),
          arguments: {}
        }, '---', {
          opcode: 'measureDistance',
          func: 'measureDistanceVL53L',
          blockType: blockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'g2s.measureDistance',
            default: 'distance (mm)',
            description: 'report distance'
          }),
          arguments: {}
        }, '---', {
          opcode: 'getAcceleration',
          func: 'getAccelerationADXL345',
          blockType: blockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'g2s.getAcceleration',
            default: 'acceleration [AXIS] (m/s^2)',
            description: 'report acceleration'
          }),
          arguments: {
            AXIS: {
              type: argumentType.STRING,
              menu: 'accelerationAxisMenu'
            }
          }
        }, '---', {
          opcode: 'numberAtIndex',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.numberAtIndex',
            default: 'number of [ARRAY] at [INDEX]',
            description: 'get a number at the index of the array'
          }),
          arguments: {
            ARRAY: {
              type: argumentType.STRING,
              defaultValue: '1.0, 1E1, 0xFF'
            },
            INDEX: {
              type: argumentType.NUMBER,
              defaultValue: '1'
            }
          }
        }, {
          opcode: 'spliceNumbers',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.spliceNumbers',
            default: '[ARRAY] at [INDEX] delete [DELETE] insert [INSERT]',
            description: 'splice array'
          }),
          arguments: {
            ARRAY: {
              type: argumentType.STRING,
              defaultValue: '1.0, 1E1, 0xFF'
            },
            INDEX: {
              type: argumentType.NUMBER,
              defaultValue: '1'
            },
            DELETE: {
              type: argumentType.NUMBER,
              defaultValue: '1'
            },
            INSERT: {
              type: argumentType.STRING,
              defaultValue: '-1, 0'
            }
          }
        }, {
          opcode: 'lengthOfNumbers',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.lengthOfNumbers',
            default: 'length of numbers [ARRAY]',
            description: 'get length of an Array in string'
          }),
          arguments: {
            ARRAY: {
              type: argumentType.STRING,
              defaultValue: '1.0, 1E1, 0xFF'
            }
          }
        }, {
          opcode: 'readBytesAs',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.readBytesAs',
            default: 'read bytes [ARRAY] as [TYPE] [ENDIAN]',
            description: 'read typed value from bytes'
          }),
          arguments: {
            ARRAY: {
              type: argumentType.STRING,
              defaultValue: '0x00, 0xFF, 0xFF, 0x00'
            },
            TYPE: {
              type: argumentType.STRING,
              menu: 'bytesTypeMenu'
            },
            ENDIAN: {
              type: argumentType.STRING,
              menu: 'endianMenu'
            }
          }
        }, {
          opcode: 'int64Operation',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.int64Operation',
            default: 'int64 [LEFT] [OP] [RIGHT]',
            description: 'bitwise operation'
          }),
          arguments: {
            OP: {
              type: argumentType.STRING,
              menu: 'int64OperationMenu'
            },
            LEFT: {
              type: argumentType.STRING,
              defaultValue: '0x01'
            },
            RIGHT: {
              type: argumentType.STRING,
              defaultValue: '0x02'
            }
          }
        }, {
          opcode: 'bitOperation',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.bitOperation',
            default: 'bit [LEFT] [OP] [RIGHT]',
            description: 'bitwise operation'
          }),
          arguments: {
            OP: {
              type: argumentType.STRING,
              menu: 'bitOperationMenu'
            },
            LEFT: {
              type: argumentType.STRING,
              defaultValue: '0x03'
            },
            RIGHT: {
              type: argumentType.STRING,
              defaultValue: '0x01'
            }
          }
        }, {
          opcode: 'bitNot',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.bitNot',
            default: 'bit NOT [VALUE]',
            description: 'bitwise NOT'
          }),
          arguments: {
            VALUE: {
              type: argumentType.STRING,
              defaultValue: '0x01'
            }
          }
        }],
        menus: {
          boardStateMenu: {
            acceptReporters: false,
            items: this.getBoardStateMenu()
          },
          digitalConnectorMenu: {
            acceptReporters: false,
            items: this.getDigitalConnectorMenu()
          },
          inputBiasMenu: {
            acceptReporters: false,
            items: this.getInputBiasMenu()
          },
          digitalLevelMenu: {
            acceptReporters: true,
            items: this.getDigitalLevelMenu()
          },
          inputPinsMenu: {
            acceptReporters: true,
            items: this.getInputPinsMenu()
          },
          pwmConnectorMenu: {
            acceptReporters: false,
            items: this.getDigitalConnectorMenu()
          },
          accelerationAxisMenu: {
            acceptReporters: false,
            items: this.getAccelerationAxisMenu()
          },
          bytesTypeMenu: {
            acceptReporters: false,
            items: ['Int16', 'Uint16']
          },
          endianMenu: {
            acceptReporters: false,
            items: ['little', 'big']
          },
          int64OperationMenu: {
            acceptReporters: false,
            items: ['＋', '－', '✕', '÷', 'mod']
          },
          bitOperationMenu: {
            acceptReporters: false,
            items: ['<<', '>>', '&', '|', '^']
          }
        }
      };
    }
  }, {
    key: "getBoardStateMenu",
    value: function getBoardStateMenu() {
      return [{
        text: formatMessage({
          id: 'g2s.boardState.connected',
          default: 'connected'
        }),
        value: 'connected'
      }, {
        text: formatMessage({
          id: 'g2s.boardState.disconnected',
          default: 'disconnected'
        }),
        value: 'disconnected'
      }];
    }
  }, {
    key: "getDigitalConnectorMenu",
    value: function getDigitalConnectorMenu() {
      var digitalPrefix = formatMessage({
        id: 'g2s.digitalConnector.prefix',
        default: 'Digital'
      });
      return [{
        text: "".concat(digitalPrefix, " A1"),
        value: '10'
      }, {
        text: "".concat(digitalPrefix, " A2"),
        value: '11'
      }, {
        text: "".concat(digitalPrefix, " B1"),
        value: '6'
      }, {
        text: "".concat(digitalPrefix, " B2"),
        value: '9'
      }];
    }
  }, {
    key: "getDigitalLevelMenu",
    value: function getDigitalLevelMenu() {
      return [{
        text: formatMessage({
          id: 'g2s.digitalLevelMenu.low',
          default: 'Low',
          description: 'label for low value in digital output menu for g2s'
        }),
        value: 'false'
      }, {
        text: formatMessage({
          id: 'g2s.digitalLevelMenu.high',
          default: 'High',
          description: 'label for high value in digital output menu for g2s'
        }),
        value: 'true'
      }];
    }
  }, {
    key: "getInputPinsMenu",
    value: function getInputPinsMenu() {
      var digitalPrefix = formatMessage({
        id: 'g2s.digitalConnector.prefix',
        default: 'Digital'
      });
      var analogPrefix = formatMessage({
        id: 'g2s.analogConnector.prefix',
        default: 'Analog'
      });
      return [{
        text: "".concat(digitalPrefix, " A1"),
        value: '10'
      }, {
        text: "".concat(digitalPrefix, " A2"),
        value: '11'
      }, {
        text: "".concat(digitalPrefix, " B1"),
        value: '6'
      }, {
        text: "".concat(digitalPrefix, " B2"),
        value: '9'
      }, {
        text: "".concat(analogPrefix, " A1"),
        value: '0'
      }, {
        text: "".concat(analogPrefix, " A2"),
        value: '1'
      }, {
        text: "".concat(analogPrefix, " B1"),
        value: '2'
      }, {
        text: "".concat(analogPrefix, " B2"),
        value: '3'
      }];
    }
  }, {
    key: "getInputBiasMenu",
    value: function getInputBiasMenu() {
      return [{
        text: formatMessage({
          id: 'g2s.inputBiasMenu.none',
          default: 'none',
          description: 'label for none in input bias menu for g2s'
        }),
        value: 'none'
      }, {
        text: formatMessage({
          id: 'g2s.inputBiasMenu.pullUp',
          default: 'pull up',
          description: 'label for pull up in input bias menu for g2s'
        }),
        value: 'pullUp'
      }];
    }
  }, {
    key: "getAccelerationAxisMenu",
    value: function getAccelerationAxisMenu() {
      return [{
        text: formatMessage({
          id: 'g2s.accelerationAxisMenu.x',
          default: 'x'
        }),
        value: 'x'
      }, {
        text: formatMessage({
          id: 'g2s.accelerationAxisMenu.y',
          default: 'y'
        }),
        value: 'y'
      }, {
        text: formatMessage({
          id: 'g2s.accelerationAxisMenu.z',
          default: 'z'
        }),
        value: 'z'
      }, {
        text: formatMessage({
          id: 'g2s.accelerationAxisMenu.absolute',
          default: 'absolute'
        }),
        value: 'absolute'
      }];
    }
  }], [{
    key: "EXTENSION_NAME",
    get:
    /**
     * @return {string} - the name of this extension.
     */
    function get() {
      return formatMessage({
        id: 'g2s.name',
        default: 'AkaDako',
        description: 'name of the extension'
      });
    }
    /**
     * @return {string} - the ID of this extension.
     */

  }, {
    key: "EXTENSION_ID",
    get: function get() {
      return EXTENSION_ID;
    }
    /**
     * URL to get this extension.
     * @type {string}
     */

  }, {
    key: "extensionURL",
    get: function get() {
      return extensionURL;
    }
    /**
     * Set URL to get this extension.
     * The extensionURL will be changed to the URL of the loading server.
     * @param {string} url - URL
     */
    ,
    set: function set(url) {
      extensionURL = url;
    }
  }]);

  return ExtensionBlocks;
}();

export { ExtensionBlocks as blockClass, entry };

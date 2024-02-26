# ChatGPT
Generativ pretrained transformer
LLM
175 milliarden parameter
96 schichten input layer
trained to 
	just predict next token into sequenz of words
	to make safer
		fine tune
				turns model that not aligns into human values
			reinforcement training from human feedbakc
			RLHF
				![[Pasted image 20240207153714.png]]
				
		r
# ChatBot
Input Output
menschen sprache
txt datein


---
RLHF


---
# Verarbeitung
CONVERSATIONAL PROMPT INJECTION TO CREATE A CONTEXT FOR GPT
tokenisierung
die eingabe wird aufgeteilt in wenige buchstaben grose teile

embedding
diese werden in einer numerische vektordatenbank als embeddings eingespeichert um kontext von woertern zu verstehen

Ein generatives Large Language Model wird mit diesen Daten trainiert, **tiefen neuronalen Netzwerk, das auf der GPT-3.5-Architektur von OpenAI **

um eine breite Palette von natürlicher Sprache zu verstehen und darauf zu reagieren.
komplexe Muster und Abhängigkeiten in den Daten zu erfassen. Es verwendet diese Fähigkeiten, um den Kontext der Eingabe zu verstehen.

Dabei versucht es, kohärente und sinnvolle Sätze zu bilden, die auf die Eingabe bezogen sind

**Dekodierung:** Die generierte Antwort wird wieder in natürliche Sprache umgewandelt und als Textausgabe präsentiert.

zieht lediglich Schlüsse aus Mustern in den Daten, auf denen es trainiert wurde. 

---

transformer netz
die speziell für die Verarbeitung von Sequenzen wie Text entwickelt wurde. Sie wurde erstmals im 2017 veröffentlichten Paper "Attention is All You Need

positional coder
tension modul

Die Transformer-Architektur ist eine bahnbrechende Neuronale Netzwerkarchitektur, die speziell für die Verarbeitung von Sequenzen wie Text entwickelt wurde. Sie wurde erstmals im 2017 veröffentlichten Paper "Attention is All You Need" vorgestellt.

Hier ist eine grundlegende Erklärung der Transformer-Architektur:

1. **Self-Attention Mechanismus**: Der Kern der Transformer-Architektur ist der Self-Attention Mechanismus. Dieser Mechanismus ermöglicht es dem Netzwerk, die Beziehung zwischen allen Wörtern in einer Eingabesequenz zu verstehen, indem es jedem Wort eine Gewichtung zuweist, die auf seiner Bedeutung in Bezug auf alle anderen Wörter basiert.

2. **Positional Encoding**: Da Transformer keine RNNs (Recurrent Neural Networks) verwenden, müssen sie die Positionsinformation der Wörter auf andere Weise kodieren. Hier kommt das Positional Encoding ins Spiel, das dem Netzwerk hilft, die Position jedes Worts in der Sequenz zu verstehen.

3. **Multi-Head Attention**: Um eine vielfältige Repräsentation der Eingabesequenz zu erhalten, verwendet der Transformer mehrere Köpfe für den Attention Mechanismus. Dies ermöglicht es dem Netzwerk, unterschiedliche "Ansichten" der Eingabesequenz zu berücksichtigen und sie dann zusammenzuführen.

4. **Feedforward Neural Networks**: Jeder Attention Layer im Transformer wird von einem Feedforward Neural Network gefolgt, das die transformierten Darstellungen der Wörter weiter verarbeitet.

5. **Encoder-Decoder-Architektur**: In vielen Anwendungen, wie z.B. maschineller Übersetzung, besteht der Transformer aus einem Encoder und einem Decoder. Der Encoder verarbeitet die Eingabesequenz, während der Decoder die Ausgabe erzeugt.

6. **Residual Connections und Layer Normalization**: Um das Training zu erleichtern und Gradientenverschwinden zu vermeiden, verwendet der Transformer Residualverbindungen und Layer-Normalisierung in jedem Layer.

Die Transformer-Architektur hat sich als äußerst effektiv erwiesen und ist die Grundlage für viele fortschrittliche Modelle im Bereich des Natural Language Processing, einschließlich GPT (Generative Pre-trained Transformer) und BERT (Bidirectional Encoder Representations from Transformers).



---



1. **Tokenisierung:** Die Eingabe wird in kleinere Einheiten, sogenannte Tokens, aufgeteilt. Ein Token könnte beispielsweise ein einzelnes Zeichen oder eine Gruppe von Zeichen sein. Dies ermöglicht dem Modell, den Text in handhabbare Teile zu zerlegen.

2. **Embedding:** Jedes Token wird in einen numerischen Vektor umgewandelt, der das semantische Verständnis des Tokens repräsentiert. Diese Vektoren werden als Embeddings bezeichnet und helfen dem Modell, den Kontext der Wörter zu verstehen.

3. **Verarbeitung durch das Modell:** Die eingebetteten Tokens werden dem tiefen neuronalen Netzwerk von GPT-3.5 zugeführt. Das Modell hat während des Trainings gelernt, komplexe Muster und Abhängigkeiten in den Daten zu erfassen. Es verwendet diese Fähigkeiten, um den Kontext der Eingabe zu verstehen.

4. **Generierung der Antwort:** Basierend auf dem gelernten Kontext generiert das Modell eine Antwort. Dabei versucht es, kohärente und sinnvolle Sätze zu bilden, die auf die Eingabe bezogen sind.

5. **Dekodierung:** Die generierte Antwort wird wieder in natürliche Sprache umgewandelt und als Textausgabe präsentiert.


---


proof of concept 
beispielseite tu 
lehrsrtuhlseite 
fakultaet
im studium
studienpl;aene
pruefungsordnung
anfragen ueber diese 
pdf extractor

mittwoch 06.03
15.30



---


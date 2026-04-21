import { AudioExtractor } from "./AudioExtractor";
import { FileWriter } from "./FileWriter";
import { SubtitleMerger } from "./SubtitleMerger";
import { VideoCompressor } from "./VideoCompressor";

export class VideoConverterFacade {
    private audioExtractor = new AudioExtractor();
    private videoCompressor = new VideoCompressor();
    private subtitleMerger = new SubtitleMerger();
    private fileWriter = new FileWriter();

    convert(filePath: string, targetFormat: string) {
        console.log(`[Converter]: Iniciando a conversao do video ${filePath}, para o formato ${targetFormat}`);
        this.audioExtractor.extract(filePath);
        this.subtitleMerger.merge(filePath);
        this.videoCompressor.compress(filePath);
        this.fileWriter.write(filePath, targetFormat);
        console.log('[Converter]: Video convertido com sucesso!');
    }
}
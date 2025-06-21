import imageCompression from 'browser-image-compression';

export async function compressAndUpload(file: File) {
    if (file.size > 10 * 1024 * 1024) throw new Error('Arquivo muito grande');
    const compressed = await imageCompression(file, { maxSizeMB: 2, maxWidthOrHeight: 1920, useWebWorker: true });
    // upload para Supabase Storage ou outro serviço
}

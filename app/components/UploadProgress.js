export const UploadProgress = ({ loading, progress }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <div className="space-y-4">
          <div className="h-2 bg-gray-200 rounded">
            <div 
              className="h-full bg-green-600 rounded transition-all duration-300" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-gray-700">
            Uploading... {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};